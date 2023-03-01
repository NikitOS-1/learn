import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./countReducer";

export const store = configureStore({
  reducer: {
    count: countReducer,
  },
});
