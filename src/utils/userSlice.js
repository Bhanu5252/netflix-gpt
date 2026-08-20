import { createSlice } from "@reduxjs/toolkit";
const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    setUserInfo: (state, action) => {
        return action.payload;
    
    },
    removeUserInfo: (state, action) => {
        return null;
    },
}
});
export const { setUserInfo, removeUserInfo } = userSlice.actions;
export default userSlice.reducer;