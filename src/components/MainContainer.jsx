import React, { useState } from "react";
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
  const [loader, setLoader] = useState(false);
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
    let win = false;

    if (settledGame) {
      return;
    }

    const newBoxList = boxlist.map((v) => {
      if (v.boxId === id && v.player === "") {
        //changing of player turns
        if (player === "X") {
          setPlayer("O");
        } else {
          setPlayer("X");
        }
        //updating state player
        return { ...v, player: p };
      } else {
        return v;
      }
    });

    //set active boxes
    setBoxSelection(newBoxList);

    //update store
    dispatch(updateBoxList(newBoxList));

    //check winning pattern
    winningPatterns.forEach((v, i) => {
      if (win) return;
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
        toast.success(`Player ${player} Wins!`);
        if (player === "X") {
          dispatch(addScoreX());
        } else {
          dispatch(addScoreY());
        }
        win = true;
      }
    });

    //check if all slot is clicked
    const allItemsSelected = newBoxList.every((v) => v.player !== "");
    if (allItemsSelected && !win) {
      toast.success(`Game Draw!`);
      dispatch(addScoreDraw());
      setSettledGame(true);
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
    toast.success(`Scoreboard Clear!`);
    onGameReset();
    setSettledGame(false);
  };

  //on game resets
  const onGameReset = () => {
    //for animation loader
    setLoader(true);

    let newBoxList = [...boxSelection];
    newBoxList = newBoxList.map((v) => ({ ...v, player: "" }));
    setBoxSelection(newBoxList);
    setPlayer("X");
    setPattern(null);

    //reset to initial store
    dispatch(resetBoxList());

    //animation
    setTimeout(() => {
      setLoader(false);
    }, 200);
  };

  return (
    <>
      <ToastContainer autoClose={1000} hideProgressBar={true} />
      <div className="@container container absolute m-auto min-w-[380px]">
        <div className="flex flex-col items-center justify-center">
          <div className="flex text-center align-middle justify-center items-center">
            <div className="font-semibold text-2xl text-violet-700  my-4">
              {" "}
              Tictactoe
            </div>
          </div>
          <div className="justify-center items-center w-full md:w-[470px] shadow-2xl">
            <BoxList
              boxList={boxSelection}
              onPlayerSelect={onPlayerSelect}
              player={player}
              pattern={pattern}
              loader={loader}
            />
          </div>
          <div className="grid grid-cols-3 w-full md:w-[470px] my-2">
            <div className="flex flex-col bg-white shadow-lg p-2 w-full col-span-2">
              <div className="font-bold">Scoreboard: </div>
              <div className="">
                <button
                  className="bg-green-500 hover:bg-green-700 text-white font-medium py-1 px-3 rounded"
                  onClick={() => {
                    onClearScores();
                  }}
                >
                  Clear Scores
                </button>
              </div>
              <div className="font-medium">
                Player X: {scores?.x}{" "}
                {scores.x > 1 ? "points" : scores.x === 1 ? "point" : ""}
              </div>
              <div className="font-medium">
                Player O: {scores?.o}{" "}
                {scores.o > 1 ? "points" : scores.o === 1 ? "point" : ""}
              </div>
              <div className="font-medium">
                Draw: {scores?.draw}{" "}
                {scores.draw > 1 ? "points" : scores.draw === 1 ? "point" : ""}
              </div>
            </div>
            <div className="flex text-center justify-center">
              <div>
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
        </div>
      </div>
    </>
  );
};

export default MainContainer;
