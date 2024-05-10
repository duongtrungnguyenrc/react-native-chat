import Realm from "realm";

export class LocalDataService {
  private static instance: LocalDataService | null = null;
  private realm: Realm | null = null;

  private constructor() {
    const UserSchema = {
      name: "User",
      primaryKey: "_id",
      properties: {
        _id: "string",
        name: "string",
        email: "string",
        password: "string",
        phone: "string",
        friend: "User[]",
      },
    };

    const MessageSchema = {
      name: "Message",
      primaryKey: "_id",
      properties: {
        _id: "string",
        message: "string",
        time: "date",
        sender: "User",
      },
    };

    const RoomSchema = {
      name: "Room",
      primaryKey: "_id",
      properties: {
        _id: "string",
        users: "User[]",
        messages: "Message[]",
      },
    };

    this.realm = new Realm({
      schema: [UserSchema, MessageSchema, RoomSchema],
    });
  }

  public static getInstance(): LocalDataService {
    if (!LocalDataService.instance) {
      LocalDataService.instance = new LocalDataService();
    }
    return LocalDataService.instance;
  }
}
