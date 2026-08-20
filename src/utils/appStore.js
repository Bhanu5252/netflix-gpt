import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice"; // Import your user slice reducer

const appStore = configureStore({
  reducer: {
    // Add your reducers here
    user: userReducer, // Add the user reducer to the store
  },
});
export default appStore;