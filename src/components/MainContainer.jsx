import React, { useEffect, useState } from "react";
import BoxList from "./BoxList";
import { useDispatch, useSelector } from "react-redux";
import {
  updateBoxList,
  resetBoxList,
  addScoreX,
  addScoreY,
  addScoreDraw,
  clearScore,
} from "../lib/features/boxSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainContainer = () => {
  const scores = useSelector((state) => state.score);
  const boxlist = useSelector((state) => state.boxList);
  const [player, setPlayer] = useState("X");
  const [boxSelection, setBoxSelection] = useState(boxlist);
  const [settledGame, setSettledGame] = useState(false);
  const [pattern, setPattern] = useState(null);

  const winningPatterns = [
    { s0: 0, s1: 1, s2: 2 },
    { s0: 3, s1: 4, s2: 5 },
    { s0: 6, s1: 7, s2: 8 },
    { s0: 0, s1: 3, s2: 6 },
    { s0: 1, s1: 4, s2: 7 },
    { s0: 2, s1: 5, s2: 8 },
    { s0: 0, s1: 4, s2: 8 },
    { s0: 2, s1: 4, s2: 6 },
  ];

  const dispatch = useDispatch();

  //on player choose box
  const onPlayerSelect = (p, id) => {
    if (settledGame) {
      return;
    }
    let newBoxList = [...boxlist];
    newBoxList = newBoxList.map((v) => {
      if (v.boxId === id && v.player === "") {
        //changing of player turns
        if (player === "X") {
          setPlayer("O");
        } else {
          setPlayer("X");
        }
        return { ...v, player: p };
      } else {
        return v;
      }
    });

    setBoxSelection(newBoxList);
    //update store
    dispatch(updateBoxList(newBoxList));

    let draw = true;
    //check winning pattern
    winningPatterns.map((v, i) => {
      if (
        (newBoxList[v.s0].player === "X" &&
          newBoxList[v.s1].player === "X" &&
          newBoxList[v.s2].player === "X") ||
        (newBoxList[v.s0].player === "O" &&
          newBoxList[v.s1].player === "O" &&
          newBoxList[v.s2].player === "O")
      ) {
        setPattern(i);
        setSettledGame(true);
        draw = false;
        toast.success(`Player ${player} Wins!`);
        if (player === "X") {
          dispatch(addScoreX());
        } else {
          dispatch(addScoreY());
        }
      }
    });

    if (draw) {
      const draw = newBoxList.every((v) => v.player !== "");
      if (draw) {
        toast.success(`Game Draw!`);
        dispatch(addScoreDraw());
        setSettledGame(true);
      }
    }
  };

  //on game resets
  const onNewGame = () => {
    onGameReset();
    setSettledGame(false);
  };

  //on game resets
  const onClearScores = () => {
    dispatch(clearScore());
    onGameReset();
    setSettledGame(false);
  };

  //on game resets
  const onGameReset = () => {
    let newBoxList = [...boxSelection];
    newBoxList = newBoxList.map((v) => ({ ...v, player: "" }));
    setBoxSelection(newBoxList);
    setPlayer("X");
    setPattern(null);
    //reset to initial store
    dispatch(resetBoxList());
  };

  return (
    <>
      <ToastContainer autoClose={1000} hideProgressBar={true} />
      <div className="flex flex-row items-center justify-center">
        <div className="flex flex-col my-2 text-violet-700 border-2 border-violet-700 w-[320px] px-2 bg-white">
          <div className="flex flex-row flex-wrap my-1">
            Scoreboard{" "}
            <div>
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-medium ml-[9.7rem] py-1 px-3 rounded"
                onClick={() => {
                  onClearScores();
                }}
              >
                Clear
              </button>
            </div>
          </div>
          <div>X: {scores?.x}</div>
          <div>O: {scores?.o}</div>
          <div>Draw: {scores?.draw}</div>
        </div>
        <div className="flex flex-col justify-center">
          <h1 className="text-center mx-8 mt-1 text-violet-700 text-4xl">
            Tic-Tac-Toe NCS
          </h1>
          <div className="flex flex-row gap-2  mx-8 mt-2">
            {settledGame ? (
              <button
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                  onNewGame();
                }}
              >
                New Game
              </button>
            ) : (
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => {
                  onGameReset();
                  toast.success("Game Resets!");
                }}
              >
                Reset
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="flex flex-wrap h-[620px] w-[620px] border-1 text-center min-w-[400px] bg-white shadow-2xl">
        <BoxList
          boxList={boxSelection}
          onPlayerSelect={onPlayerSelect}
          player={player}
          pattern={pattern}
        />
      </div>
    </>
  );
};

export default MainContainer;
