import React from "react";
import Sqaure from "./Sqaure";

const Board = () => {
  const [state, setState] = React.useState(Array(9).fill(null));
  const [isXTurn, setIsXTurn] = React.useState(true);

  const handleClick = (index) => {
    if (state[index] !== null) {
      return;
    }
    const copyState = [...state];
    copyState[index] = isXTurn ? "X" : "O";
    setState(copyState);
    setIsXTurn(!isXTurn);
  };

  const calculateWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];

      if (state[a] !== null && state[a] === state[b] && state[a] === state[c]) {
        return state[a];
      } else if (
        state[0] !== null &&
        state[1] !== null &&
        state[2] !== null &&
        state[3] !== null &&
        state[4] !== null &&
        state[5] !== null &&
        state[6] !== null &&
        state[7] !== null &&
        state[8] !== null
      ) {
        return "Draw";
      }
    }
    return false;
  };

  const isWinner = calculateWinner();

  return (
    <div className="boardContainer mt-10 ">
      {isWinner ? (
        <div className="flex flex-col justify-center items-center w-80 mx-auto space-y-5 ">
          <h1 className="text-3xl font-bold underline text-center">
            {isWinner !== "Draw" && `${isWinner} is the Winner`}{" "}
            {isWinner === "Draw" && "Draw"}
          </h1>
          <button
            onClick={() => setState(Array(9).fill(null))}
            className="bg-slate-300 hover:bg-slate-700 hover:text-white font-bold py-2 px-4 rounded w-full duration-200 "
          >
            Play Again
          </button>
        </div>
      ) : (
        <>
          {isXTurn ? (
            <h1 className="text-3xl font-bold underline text-center">X Turn</h1>
          ) : (
            <h1 className="text-3xl font-bold underline text-center">O Turn</h1>
          )}
          <div className="row flex justify-evenly px-4">
            <Sqaure value={state[0]} Onclick={() => handleClick(0)} />
            <Sqaure value={state[1]} Onclick={() => handleClick(1)} />
            <Sqaure value={state[2]} Onclick={() => handleClick(2)} />
          </div>
          <div className="row flex justify-evenly px-4">
            <Sqaure value={state[3]} Onclick={() => handleClick(3)} />
            <Sqaure value={state[4]} Onclick={() => handleClick(4)} />
            <Sqaure value={state[5]} Onclick={() => handleClick(5)} />
          </div>
          <div className="row flex justify-evenly  px-4">
            <Sqaure value={state[6]} Onclick={() => handleClick(6)} />
            <Sqaure value={state[7]} Onclick={() => handleClick(7)} />
            <Sqaure value={state[8]} Onclick={() => handleClick(8)} />
          </div>{" "}
        </>
      )}
    </div>
  );
};

export default Board;
