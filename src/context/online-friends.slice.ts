import { User } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

const onlineFriendsSlice = createSlice({
  name: "onlineFriends",
  initialState: [] as User[],
  reducers: {
    addOnlineFriends(state, action: { payload: User[] }) {
      action.payload.forEach((room) => {
        state.push(room);
      });
    },
    onlineFriend(state, action: { payload: User }) {
      state.push(action.payload);
      return state;
    },
    offlineFriend(state, action: { payload: string }) {
      return state.filter((user) => user._id.toString() != action.payload);
    },
  },
});

export const { addOnlineFriends, onlineFriend, offlineFriend } =
  onlineFriendsSlice.actions;
export default onlineFriendsSlice.reducer;
