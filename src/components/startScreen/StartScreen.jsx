import React from "react";

const StartScreen = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-green-400 to-blue-500">
      <h1 className="text-4xl font-bold text-white mb-8">Welcome to the Quiz Game</h1>
      <button
        className="px-6 py-3 bg-yellow-500 text-white text-lg font-semibold rounded-lg hover:bg-yellow-600 transition"
        onClick={onStart}
      >
        Start Quiz
      </button>
    </div>
  );
};

export default StartScreen;