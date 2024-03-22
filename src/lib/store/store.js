import { configureStore } from "@reduxjs/toolkit";
import boxSliceReducer from "../features/boxSlice";

export const store = configureStore({
  reducer: boxSliceReducer,
});
