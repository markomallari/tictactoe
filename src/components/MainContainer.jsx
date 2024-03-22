import React from "react";

const MainContainer = () => {
  return (
    <>
      <h1 className="m-4">TicTacToe Game</h1>
      <div class="flex h-[600px] w-[600px] p-4 border-1 bg-white my-10 text-center items-center justify-center min-w-[390px]">
        <div class="grid grid-cols-3 border-2 border-black-100 w-full h-full">
          <div className="bg-stone-100 p-8 border-r-2 border-b-2 border-black">
            01
          </div>
          <div className="bg-stone-100 p-8 border-r-2 border-b-2 border-black">
            02
          </div>
          <div className="bg-stone-100 p-8 border-b-2 border-black">03</div>
          <div className="bg-stone-100 p-8 border-r-2 border-b-2 border-black">
            04
          </div>
          <div className="bg-stone-100 p-8 border-r-2 border-b-2 border-black">
            05
          </div>
          <div className="bg-stone-100 p-8  border-b-2 border-black">06</div>
          <div className="bg-stone-100 p-8 border-r-2 border-black">07</div>
          <div className="bg-stone-100 p-8 border-r-2  border-black">08</div>
          <div className="bg-stone-100 p-8  border-black">09</div>
        </div>
      </div>
    </>
  );
};

export default MainContainer;
