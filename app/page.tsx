"use client";

import { useState } from "react";
import Board from "@/components/Board";

export default function Home() {
  const [cells, setCells] = useState<(string | null)[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");
  const [message, setMessage] = useState("");

  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6],
  ];

  const checkWinner = (cells: (string | null)[]) =>
    winPatterns.some(([a, b, c]) => cells[a] && cells[a] === cells[b] && cells[a] === cells[c]);

  const handleMove = (i: number) => {
    if (cells[i] || message) return;
    const next = [...cells];
    next[i] = currentPlayer;
    if (checkWinner(next)) setMessage(`${currentPlayer} wins!`);
    else if (next.every(Boolean)) setMessage("It's a draw!");
    else setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    setCells(next);
  };

  const resetGame = () => {
    setCells(Array(9).fill(null));
    setCurrentPlayer("X");
    setMessage("");
  };

  return (
    <main className="flex justify-center items-center min-h-screen p-4">
      <div className="backdrop-brightness-50 bg-zinc/20 text-white w-[90vw] sm:w-[70vw] md:w-[40vw] lg:w-[28vw] aspect-[3/4] max-w-[420px] rounded-2xl p-6 sm:p-8 flex flex-col items-center justify-between shadow-2xl">
        <h1 className="text-3xl font-bold text-center mb-2 text-white">
          Tic-Tac-Toe
        </h1>

        <Board cells={cells} onMove={handleMove} />

        <p className="my-3 p-2 bg-black/20 text-[rgba(165,42,42,0.9)] font-semibold rounded-md w-full text-center">
          {message}
        </p>

        <button
          onClick={resetGame}
          className="bg-[rgba(165,42,42,0.8)] hover:bg-[rgba(165,42,42,0.95)] cursor-pointer text-white px-8 py-3 rounded-lg transition-all duration-200 w-full sm:w-auto"
        >
          Reset Game
        </button>
      </div>
    </main>
  );
}
