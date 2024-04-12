import { createSlice } from "@reduxjs/toolkit";

const dynamicBoxes = Array.from(Array(9), (x, i) => ({
  boxId: i + 1,
  player: "",
}));

const initialState = {
  boxList: dynamicBoxes,
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
