import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boxList: [
    {
      box: "1",
      player: "",
    },
    {
      box: "2",
      player: "",
    },
    {
      box: "3",
      player: "",
    },
    {
      box: "4",
      player: "",
    },
    {
      box: "5",
      player: "",
    },
    {
      box: "6",
      player: "",
    },
    {
      box: "7",
      player: "",
    },
    {
      box: "8",
      player: "",
    },
    {
      box: "9",
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
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } = boxListSlice.actions;

export default boxListSlice.reducer;
