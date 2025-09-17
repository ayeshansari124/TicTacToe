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
    <main className="font-sans bg-gray-500 flex justify-center items-center min-h-screen">
      <div className="bg-white w-[30vw] h-[70vh] max-w-[400px] flex flex-col items-center p-8 rounded-2xl shadow-md md:w-[90%] sm:p-5">
        <h1 className="text-[rgba(165,42,42,0.978)] text-2xl md:text-xl font-bold mb-4">
          Tic-Tac-Toe
        </h1>

        <Board cells={cells} onMove={handleMove} />

        <div className="bg-white text-[rgba(165,42,42,0.978)] font-serif font-bold my-4 p-2 text-center sm:text-sm sm:px-4 sm:py-2">
          {message}
        </div>

        <button
          onClick={resetGame}
          className="bg-[rgba(165,42,42,0.803)] text-white text-lg sm:text-base px-6 py-2 rounded-lg hover:bg-[rgba(165,42,42,0.978)] transition-all"
        >
          Reset Game
        </button>
      </div>
    </main>
  );
}
