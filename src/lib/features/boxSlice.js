import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boxList: [
    {
      boxId: 1,
      player: "",
    },
    {
      boxId: 2,
      player: "",
    },
    {
      boxId: 3,
      player: "",
    },
    {
      boxId: 4,
      player: "",
    },
    {
      boxId: 5,
      player: "",
    },
    {
      boxId: 6,
      player: "",
    },
    {
      boxId: 7,
      player: "",
    },
    {
      boxId: 8,
      player: "",
    },
    {
      boxId: 9,
      player: "",
    },
  ],
};

export const boxListSlice = createSlice({
  name: "boxList",
  initialState,
  reducers: {
    updateBoxList: (state, action) => {
      state.boxList = action.payload;
    },
    resetBoxList: (state) => {
      state.boxList = state.boxList.map((v) => ({ ...v, player: "" }));
    },
  },
});

export const { updateBoxList, resetBoxList } = boxListSlice.actions;

export default boxListSlice.reducer;
