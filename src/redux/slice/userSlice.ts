import { createSlice } from "@reduxjs/toolkit";
type UserData = {
  email: string | null;
  tokken: string | null;
  id: string | null;
};
const initialState: UserData = {
  email: null,
  tokken: null,
  id: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action) {
      state.email = action.payload.email;
      state.tokken = action.payload.tokken;
      state.id = action.payload.id;
    },
    removeUser(state) {
      state.email = null;
      state.tokken = null;
      state.id = null;
    },
  },
});

export const { setUser, removeUser } = userSlice.actions;
export default userSlice;
