import { createSlice } from "@reduxjs/toolkit";

const chatModalVisibleSlice = createSlice({
  name: "chatModalVisible",
  initialState: false,
  reducers: {
    setVisible(state, action: { payload: boolean }) {
      return action.payload;
    },
  },
});

export const { setVisible } = chatModalVisibleSlice.actions;
export default chatModalVisibleSlice.reducer;
