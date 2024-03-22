import React from "react";
import BoxItem from "./BoxItem";

const BoxList = ({ boxList, onPlayerSelect, player }) => {
  const selectByPlayer = (p, id) => {
    onPlayerSelect(p, id);
  };

  const boxStyle = `flex justify-center items-center bg-white border-black cursor-pointer leading-10 text-[9.25rem] font-cursive`;

  return (
    <div className="grid grid-cols-3 w-full p-10">
      {boxList?.map((v) => {
        if (v.boxId == 1 || v.boxId == 2) {
          return (
            <div
              className={`${boxStyle} ${
                v.player === ""
                  ? player === "X"
                    ? "box-item-player-1"
                    : "box-item-player-2"
                  : ""
              } border-r-4 border-b-4`}
              key={v.boxId}
              onClick={() => {
                selectByPlayer(player, v.boxId);
              }}
            >
              {}
              <BoxItem player={v.player} />
            </div>
          );
        }
        if (v.boxId == 3 || v.boxId == 6) {
          return (
            <div
              className={`${boxStyle} ${
                v.player === ""
                  ? player === "X"
                    ? "box-item-player-1"
                    : "box-item-player-2"
                  : ""
              } border-b-4`}
              key={v.boxId}
              onClick={() => {
                selectByPlayer(player, v.boxId);
              }}
            >
              <BoxItem player={v.player} />
            </div>
          );
        }
        if (v.boxId == 4 || v.boxId == 5) {
          return (
            <div
              className={`${boxStyle} ${
                v.player === ""
                  ? player === "X"
                    ? "box-item-player-1"
                    : "box-item-player-2"
                  : ""
              } border-r-4 border-b-4`}
              key={v.boxId}
              onClick={() => {
                selectByPlayer(player, v.boxId);
              }}
            >
              <BoxItem player={v.player} />
            </div>
          );
        }
        if (v.boxId == 7 || v.boxId == 8) {
          return (
            <div
              className={`${boxStyle} ${
                v.player === ""
                  ? player === "X"
                    ? "box-item-player-1"
                    : "box-item-player-2"
                  : ""
              } border-r-4`}
              key={v.boxId}
              onClick={() => {
                selectByPlayer(player, v.boxId);
              }}
            >
              <BoxItem player={v.player} />
            </div>
          );
        }
        if (v.boxId == 9) {
          return (
            <div
              className={`${boxStyle} ${
                v.player === ""
                  ? player === "X"
                    ? "box-item-player-1"
                    : "box-item-player-2"
                  : ""
              }`}
              key={v.boxId}
              onClick={() => {
                selectByPlayer(player, v.boxId);
              }}
            >
              <BoxItem player={v.player} />
            </div>
          );
        }
      })}
    </div>
  );
};

export default BoxList;
