import { Message } from "./message.model";
import { User } from "./user.model";

export interface Room {
  _id: string;
  users: User[];
  messages: Message[];
}
