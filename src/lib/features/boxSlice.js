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
  score: {
    x: 0,
    o: 0,
    draw: 0,
  },
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
    addScoreX: (state) => {
      state.score.x = state.score.x + 1;
    },
    addScoreY: (state) => {
      state.score.o = state.score.o + 1;
    },
    addScoreDraw: (state) => {
      state.score.draw = state.score.draw + 1;
    },
    clearScore: (state) => {
      state.score = {
        x: 0,
        o: 0,
        draw: 0,
      };
    },
  },
});

export const {
  updateBoxList,
  resetBoxList,
  addScoreX,
  addScoreY,
  addScoreDraw,
  clearScore,
} = boxListSlice.actions;

export default boxListSlice.reducer;
