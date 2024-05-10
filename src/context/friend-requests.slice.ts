import { FriendRequest } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

const friendRequestSlice = createSlice({
  name: "friendRequest",
  initialState: [] as FriendRequest[],
  reducers: {
    loadRequest(_state, action: { payload: FriendRequest[] }) {
      return action.payload;
    },
    addRequest(state, action: { payload: FriendRequest }) {
      return [...state, action.payload];
    },
    deleteRequest(state, action: { payload: string }) {
      return state.filter(
        (request) => request._id.toString() != action.payload
      );
    },
  },
});

export const { loadRequest, addRequest, deleteRequest } =
  friendRequestSlice.actions;
export default friendRequestSlice.reducer;
