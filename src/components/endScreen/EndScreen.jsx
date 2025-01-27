import React from "react";

const EndScreen = ({ score, onRestart }) => {
  let performanceMessage = "";
  const percentage = (score / 100) * 100;

  if (percentage === 100) {
    performanceMessage = "Congratulations! You've completed all levels!";
  } else if (percentage >= 80) {
    performanceMessage = "Great job! You passed the quiz!";
  } else if (percentage >= 50) {
    performanceMessage = "Nice try! You were close!";
  } else {
    performanceMessage = "You failed at the medium level. Try again!";
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Quiz Completed!</h1>
      <h2 className="text-xl mb-6">Your Score: <span className="text-blue-600 font-semibold">{score}</span></h2>
      <p className="text-lg mb-6">{performanceMessage}</p>
      <button
        className="px-6 py-3 bg-green-500 text-white text-lg rounded-lg shadow hover:bg-green-600 transition"
        onClick={onRestart}
      >
        Restart Quiz
      </button>
    </div>
  );
};

export default EndScreen;
