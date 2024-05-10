import { User } from "@/models";

export enum EFriendRequestStatus {
  "PENDING",
  "ACCEPTED",
  "CANCEL",
}

export interface FriendRequest {
  _id: string;
  from: User;
  to: User;
  status: EFriendRequestStatus;
}
