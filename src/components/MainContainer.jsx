import React, { useState } from "react";
import BoxList from "./BoxList";
import { useDispatch, useSelector } from "react-redux";
import { updateBoxList, resetBoxList } from "../lib/features/boxSlice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MainContainer = () => {
  const boxlist = useSelector((state) => state.boxList);
  const [player, setPlayer] = useState("X");
  const [boxSelection, setBoxSelection] = useState(boxlist);

  const dispatch = useDispatch();

  const onPlayerSelect = (p, id) => {
    let newBoxList = [...boxlist];
    newBoxList = newBoxList.map((v) =>
      v.boxId === id && v.player === "" ? { ...v, player: p } : v
    );
    setBoxSelection(newBoxList);
    //update store
    dispatch(updateBoxList(newBoxList));

    //changing of player
    if (player === "X") {
      setPlayer("O");
    }
    if (player === "O") {
      setPlayer("X");
    }
  };

  //on game resets
  const onGameReset = () => {
    let newBoxList = [...boxlist];
    newBoxList = newBoxList.map((v) => ({ ...v, player: "" }));
    setBoxSelection(newBoxList);
    dispatch(resetBoxList());
    toast.success("Game Resets!");
  };

  return (
    <>
      <ToastContainer />
      <div className="flex flex-row items-center justify-center">
        <h1 className="text-center m-6 text-violet-700 text-4xl">
          Tic-Tac-Toe Game
        </h1>
        <div>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={() => {
              onGameReset();
            }}
          >
            Reset
          </button>
        </div>
      </div>

      <div className="flex flex-wrap h-[620px] w-[620px] border-1 text-center min-w-[400px] bg-white shadow-2xl">
        <BoxList
          boxList={boxSelection}
          onPlayerSelect={onPlayerSelect}
          player={player}
        />
      </div>
    </>
  );
};

export default MainContainer;
