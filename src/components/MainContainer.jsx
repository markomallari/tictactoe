import React, { useState } from "react";

const MainContainer = () => {
  const [player, setPlayer] = useState();

  return (
    <>
      <h1 className="m-4">TicTacToe Game</h1>
      <div class="flex h-[600px] w-[600px] p-4 border-1 bg-white text-center min-w-[400px]">
        <div class="grid grid-cols-3 w-full">
          <div className="flex justify-center items-center bg-stone-100 border-black border-r-4 border-b-4 cursor-pointer">
            <span className="leading-10 text-[9.25rem] font-cursive">X</span>
          </div>
          <div className="flex justify-center items-center bg-stone-100 border-black border-r-4 border-b-4">
            <span className="leading-10 text-[9.25rem] font-cursive">O</span>
          </div>
          <div className="flex justify-center items-center bg-stone-100 border-black border-b-4">
            <span className="leading-10 text-[9.25rem] font-cursive">X</span>
          </div>
          <div className="flex justify-center items-center bg-stone-100 border-black border-r-4 border-b-4">
            <span className="leading-10 text-[9.25rem] font-cursive">X</span>
          </div>
          <div className="flex justify-center items-center bg-stone-100 border-black border-r-4 border-b-4">
            <span className="leading-10 text-[9.25rem] font-cursive">O</span>
          </div>
          <div className="flex justify-center items-center bg-stone-100 border-black border-b-4">
            <span className="leading-10 text-[9.25rem] font-cursive">X</span>
          </div>
          <div className="flex justify-center items-center bg-stone-100 border-black border-r-4">
            <span className="leading-10 text-[9.25rem] font-cursive">X</span>
          </div>
          <div className="flex justify-center items-center bg-stone-100 border-black border-r-4">
            <span className="leading-10 text-[9.25rem] font-cursive">O</span>
          </div>
          <div className="flex justify-center items-center bg-stone-100 border-black">
            <span className="leading-10 text-[9.25rem] font-cursive">X</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContainer;
