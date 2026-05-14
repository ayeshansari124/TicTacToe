"use client";

import { useState } from "react";

export default function Home() {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));

  const [player, setPlayer] = useState<"X" | "O">("X");

  const wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const winner = wins.find(
    ([a, b, c]) => board[a] && board[a] === board[b] && board[a] === board[c],
  );

  const message = winner
    ? `${board[winner[0]]} wins!`
    : board.every(Boolean)
      ? "It's a draw!"
      : `Turn: ${player}`;

  const handleClick = (i: number) => {
    if (board[i] || winner) return;

    const next = [...board];

    next[i] = player;

    setBoard(next);

    setPlayer(player === "X" ? "O" : "X");
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));

    setPlayer("X");
  };

  return (
    <main className="min-h-screen flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-black/55 backdrop-blur-md border border-white/10 rounded-3xl p-8 shadow-2xl">
        <h1 className="text-4xl font-black text-center text-white mb-2">
          Tic-Tac-Toe
        </h1>

        <p className="text-center text-white/70 mb-8">{message}</p>

        <div className="grid grid-cols-3 gap-4">
          {board.map((cell, i) => (
            <button
              key={i}
              onClick={() => handleClick(i)}
              className="
                w-full aspect-square
                rounded-2xl
                bg-purple-900/70
                hover:bg-purple-800/80
                border border-white/10
                text-5xl font-bold text-white
                transition
                active:scale-95
                flex items-center justify-center
              "
            >
              {cell}
            </button>
          ))}
        </div>

        <button
          onClick={resetGame}
          className="
            w-full mt-8 py-3
            rounded-2xl
            bg-red-700 hover:bg-red-800
            text-white font-semibold
            transition
          "
        >
          Reset Game
        </button>
      </div>
    </main>
  );
}
