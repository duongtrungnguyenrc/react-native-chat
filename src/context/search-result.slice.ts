import { User } from "@/models";
import { createSlice } from "@reduxjs/toolkit";

const searchResultSlice = createSlice({
  name: "searchResults",
  initialState: [] as User[],
  reducers: {
    loadResult(_state, action: { payload: User[] }) {
      return action.payload;
    },
    clearResult(_state) {
      return [] as User[];
    },
  },
});

export const { loadResult, clearResult } = searchResultSlice.actions;
export default searchResultSlice.reducer;
