import React from "react";
import ProgressBar from "../progressBar/ProgressBar";
import Question from "../question/Question";


const QuizScreen = ({ level, score, currentQuestion, currentIndex, totalQuestions, timer, onAnswer }) => {
  return (
    <div className="flex flex-col items-center p-6 bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 h-screen">
    <div className="flex items-center justify-center h-screen">
      <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-lg">
        <div className="mb-6">
          <h1 className="text-4xl font-bold text-center text-gray-800 mb-2">Level {level}</h1>
          <h2 className="text-2xl text-center text-gray-600">Score: {score}</h2>
          <div className="text-xl text-center text-red-500">Time Left: {timer}s</div>
        </div>

        <div className="mb-8">
          <ProgressBar current={currentIndex} total={totalQuestions} />
        </div>

        <div className="mb-8">
          <Question question={currentQuestion} onSubmit={onAnswer} />
        </div>
      </div>
      </div>
    </div>
  );
};

export default QuizScreen;
