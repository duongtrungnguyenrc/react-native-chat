import {
  BaseResponseModel,
  FriendRequest,
  Message,
  Room,
  User,
} from "@/models";
import io, { Socket } from "socket.io-client";
import apiService from "./api.service";
import { AxiosError } from "axios";
import {
  addOnlineFriends,
  addRequest,
  dispath,
  offlineFriend,
  onlineFriend,
} from "@/context";
import {
  addMessage,
  addMessages,
  addRooms,
  addRoomsFirst,
  setOnlineStatus,
} from "@/context/rooms.slice";
import { DefaultEventsMap } from "@socket.io/component-emitter";

class ChatService {
  private static instance: ChatService | null = null;
  private sentAction: ((message: Message) => void | null) | undefined;
  private receiveAction: ((message: Message) => void | null) | undefined;
  private socket: Socket<DefaultEventsMap, DefaultEventsMap> | undefined;

  private constructor() {}

  static getInstance() {
    if (!this.instance) {
      this.instance = new ChatService();
    }
    return this.instance;
  }

  registerSentMessageAction(action: (message: Message) => void) {
    this.sentAction = action;
  }

  registerReceiveMessageAction(action: (message: Message) => void) {
    this.receiveAction = action;
  }

  getSocket() {
    return this.socket;
  }

  joinRoom(id: string) {
    this.socket?.emit("join", id);
  }

  leaveRoom(id: string) {
    this.socket?.emit("leave", id);
  }

  sendMessage(message: string, receiverId?: string) {
    this.socket?.emit("send", JSON.stringify({ message, receiverId }));
  }

  init(accessToken: string) {
    this.socket = io("http://192.168.31.214/chat", {
      extraHeaders: {
        authorization: `Bearer ${accessToken}`,
      },
    });

    if (this.socket?.active) {
      this.socket.on("receive", (message: Message) => {
        dispath(addMessage(message));
        this.receiveAction && this.receiveAction(message);
      });

      this.socket.on("sent", (message: Message) => {
        dispath(addMessage({ ...message, me: true }));
        setTimeout(() => {
          if (this.sentAction) this.sentAction(message);
        }, 500);
      });

      this.socket.on("online", (user: User) => {
        dispath(setOnlineStatus({ uid: user._id, status: true }));
        dispath(onlineFriend(user));
      });

      this.socket.on("offline", (uid: string) => {
        dispath(setOnlineStatus({ uid: uid, status: false }));
        dispath(offlineFriend(uid));
      });

      this.socket.on("new-friend-request", (request: FriendRequest) => {
        dispath(addRequest(request));
      });

      this.socket.on("new-room", (room: Room) => {
        dispath(addRoomsFirst([room]));
      });
    } else {
      throw new Error("Invalid socket");
    }
  }

  dispose() {
    ChatService.instance = null;
    this.socket?.close();
    this.socket = undefined;
  }

  async getOnlineFriends() {
    const response = await apiService.getService().get("/user/online-friends");

    if (response.status != 200) {
      throw new Error(response.data.message);
    }
    const data = response.data as BaseResponseModel<User[]>;
    dispath(addOnlineFriends(data.data));
    return data;
  }

  async getRoom(
    receiverId?: string,
    page = 1,
    limit = 20
  ): Promise<BaseResponseModel<Room>> {
    const response = await apiService
      .getService()
      .get("chat/room", { params: { receiverId, page, limit } });

    const data = response.data as BaseResponseModel<Room>;

    dispath(addRooms([data.data]));
    return data;
  }

  async getRooms(): Promise<BaseResponseModel<Room[]>> {
    try {
      const response = await apiService.getService().get("chat/rooms");
      if (response.status != 200) {
        throw new AxiosError(response.data);
      }

      const data = response.data as BaseResponseModel<Room[]>;

      dispath(addRooms(data.data));
      return data;
    } catch (error) {
      console.log(error);

      throw error;
    }
  }

  async getMessages(
    page: number,
    limit: number,
    id?: string
  ): Promise<BaseResponseModel<Message[]>> {
    if (!id) throw new Error("Invalid room");

    try {
      const response = await apiService.getService().get("chat/messages", {
        params: { id, page, limit },
      });
      if (response.status != 200) {
        throw new AxiosError(response.data);
      }
      const data = response.data as BaseResponseModel<Message[]>;
      dispath(addMessages({ roomId: id, messages: data.data }));

      return data;
    } catch (error) {
      throw error;
    }
  }
}

const chatService = ChatService.getInstance();
export default chatService;
