import { User } from "./user.model";

export interface Message {
  roomId: string;
  _id: string;
  message: string;
  time: Date;
  sender: User;
  me: boolean;
}
