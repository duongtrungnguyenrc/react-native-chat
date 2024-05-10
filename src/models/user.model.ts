export interface User {
  _id: string;
  avatar: string;
  name: string;
  email: string;
  password: string;
  phone: string;
  friend: User[];
  isOnline?: boolean;
  isFriend?: boolean;
  addFriend?: boolean;
}
