import { Message, Room } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

const roomSlice = createSlice({
  name: "rooms",
  initialState: [] as Room[],
  reducers: {
    addRoomsFirst(state, action: { payload: Room[] }) {
      return [...action.payload, ...state];
    },
    addRooms(state, action: { payload: Room[] }) {
      return [...state, ...action.payload];
    },
    addMessage(state, action: { payload: Message }) {
      return state.map((room) => {
        if (room._id === action.payload.roomId) {
          return {
            ...room,
            messages: [...room.messages, action.payload],
          };
        }
        return room;
      });
    },
    addMessages(
      state,
      action: { payload: { roomId: string; messages: Message[] } }
    ) {
      const { roomId, messages } = action.payload;

      const roomIndex = state.findIndex((room) => room._id === roomId);
      if (roomIndex === -1) return state;

      const updatedRoom = {
        ...state[roomIndex],
        messages: [...messages, ...state[roomIndex].messages],
      };

      return [
        updatedRoom,
        ...state.slice(0, roomIndex),
        ...state.slice(roomIndex + 1),
      ];
    },
    setOnlineStatus(
      state,
      action: { payload: { uid: string; status: boolean } }
    ) {
      return state.map((room) => {
        if (room.users[0]._id.toString() === action.payload.uid.toString()) {
          return {
            ...room,
            users: [{ ...room.users[0], isOnline: action.payload.status }],
          };
        }
        return room;
      });
    },
  },
});

export const {
  addMessage,
  addRooms,
  addRoomsFirst,
  addMessages,
  setOnlineStatus,
} = roomSlice.actions;
export default roomSlice.reducer;
