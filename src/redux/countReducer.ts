import { createSlice } from "@reduxjs/toolkit";

type CounterState = {
  count: number;
};

const initialState: CounterState = {
  count: 0,
};

export const counter = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export default counter.reducer;
