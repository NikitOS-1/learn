import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  user: boolean;
}

const initialState: UserState = {
  user: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    isUser: (state) => {
      state.user = true;
    },
    notUser: (state) => {
      state.user = false;
    },
  },
});
export const { isUser, notUser } = userSlice.actions;
export default userSlice.reducer;
