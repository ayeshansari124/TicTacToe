"use client";

import { useState } from "react";
import Board from "@/components/Board";

export default function Home() {
  const [currentPlayer, setCurrentPlayer] = useState<"X" | "O">("X");
  const [cells, setCells] = useState<(string | null)[]>(Array(9).fill(null));
  const [message, setMessage] = useState("");

  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // cols
    [0, 4, 8], [2, 4, 6],            // diagonals
  ];

  const checkWinner = (newCells: (string | null)[]) => {
    return winPatterns.some(([a, b, c]) =>
      newCells[a] && newCells[a] === newCells[b] && newCells[a] === newCells[c]
    );
  };

  const handleMove = (index: number) => {
    if (cells[index] || message) return;

    const newCells = [...cells];
    newCells[index] = currentPlayer;
    setCells(newCells);

    if (checkWinner(newCells)) {
      setMessage(`${currentPlayer} wins!`);
    } else if (newCells.every((cell) => cell)) {
      setMessage("It's a draw!");
    } else {
      setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
    }
  };

  const resetGame = () => {
    setCells(Array(9).fill(null));
    setCurrentPlayer("X");
    setMessage("");
  };

  return (
    <main className="font-sans bg-gray-500 flex justify-center items-center min-h-screen p-4">
      <div className="bg-white w-[90vw] sm:w-[70vw] md:w-[40vw] lg:w-[30vw] aspect-[3/4] max-w-[420px] flex flex-col items-center justify-between p-6 sm:p-8 rounded-2xl shadow-xl">
        <h1 className="text-[rgba(165,42,42,0.978)] text-3xl sm:text-2xl font-bold mb-2 text-center">
          Tic-Tac-Toe
        </h1>

        <Board cells={cells} onMove={handleMove} />

        <div className="bg-white text-[rgba(165,42,42,0.978)] font-serif font-bold text-lg sm:text-base my-3 p-2 text-center rounded-md">
          {message}
        </div>

        <button
          onClick={resetGame}
          className="bg-[rgba(165,42,42,0.803)] text-white text-lg sm:text-base px-8 py-3 rounded-lg hover:bg-[rgba(165,42,42,0.978)] transition-all duration-200 w-full sm:w-auto"
        >
          Reset Game
        </button>
      </div>
    </main>
  );
}
