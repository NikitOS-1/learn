import { createSlice } from "@reduxjs/toolkit";

interface UserState {
  user: boolean;
  id: number;
  name: string;
}

const initialState: UserState = {
  user: false,
  id: 0,
  name: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    isUser: (state, action) => {
      if (action.payload == 1) {
        state.user = true;
      }
      action.payload.name = "sss";
    },
    notUser: (state, action) => {
      if (action.payload == 1) {
        state.user = false;
      }
    },
  },
});
export const { isUser, notUser } = userSlice.actions;
export default userSlice.reducer;
