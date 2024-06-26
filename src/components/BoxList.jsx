import React, { useState } from "react";
import BoxItem from "./BoxItem";

const BoxList = ({ boxList, onPlayerSelect, player, pattern, loader }) => {
  const selectByPlayer = (p, id) => {
    onPlayerSelect(p, id);
  };

  let slashPatternStyle = ``;

  const patternIndex = [0, 1, 2, 3, 4, 5, 6, 7];

  switch (pattern) {
    case 0:
      slashPatternStyle = `bg-red-500 absolute row-1-line`;
      break;
    case 1:
      slashPatternStyle = `bg-red-500 absolute row-2-line`;
      break;
    case 2:
      slashPatternStyle = `bg-red-500 absolute row-3-line`;
      break;
    case 3:
      slashPatternStyle = `bg-red-500 absolute col-1-line`;
      break;
    case 4:
      slashPatternStyle = `bg-red-500 absolute col-2-line`;
      break;
    case 5:
      slashPatternStyle = `bg-red-500 absolute col-3-line`;
      break;
    case 6:
      slashPatternStyle = `bg-red-500 absolute slant-2-line`;
      break;
    case 7:
      slashPatternStyle = `bg-red-500 absolute slant-1-line`;
      break;
  }

  const boxStyle = `flex justify-center items-center bg-white border-black cursor-pointer leading-10 text-[9.25rem] font-cursive aspect-square hover:bg-slate-50`;

  return (
    <div className={`${loader ? "opacity-50" : ""} grid grid-cols-3`}>
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
              } typography border-r-4 border-b-4`}
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
              } typography border-b-4`}
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
              } typography border-r-4 border-b-4`}
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
              } typography border-r-4`}
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
              } typography`}
              key={v.boxId}
              onClick={() => {
                selectByPlayer(player, v.boxId);
              }}
            >
              <BoxItem player={v.player} />
              {patternIndex.includes(pattern) ? (
                <div className={`${slashPatternStyle}`}></div>
              ) : (
                ""
              )}
            </div>
          );
        }
      })}

      {loader ? (
        <div className="loader w-16 h-16 border-8 border-dashed rounded-full animate-spin border-gray-600 absolute"></div>
      ) : (
        ""
      )}
    </div>
  );
};

export default BoxList;
