import { configureStore } from "@reduxjs/toolkit";
import roomReducer from "./rooms.slice";
import onlineFriendsReducer from "./online-friends.slice";
import newChatModalVisibleReducer from "./new-chat-modal-visible.slice";
import searchResultReducer from "./search-result.slice";
import friendRequestReducer from "./friend-requests.slice";
import loadingReducer from "./loading.slice";

export const store = configureStore({
  reducer: {
    rooms: roomReducer,
    onlineFriends: onlineFriendsReducer,
    newChatModalVisible: newChatModalVisibleReducer,
    searchResults: searchResultReducer,
    friendRequests: friendRequestReducer,
    loading: loadingReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export default store.dispatch;
