import React, { useState } from "react";

const Question = ({ question, onSubmit }) => {
  const [selectedAnswer, setSelectedAnswer] = useState("");

  const handleSubmit = () => {
    if (selectedAnswer) {
      onSubmit(selectedAnswer);
      setSelectedAnswer(""); 
    }
  };

  return (
    <div>
  
      <h3 className="text-xl font-bold mb-4">{question.question}</h3>

   
      {question.type === "multiple-choice" && (
        <div className="mb-4">
          {question.options.map((option, index) => (
            <label key={index} className="block mb-2 cursor-pointer">
              <input
                type="radio"
                name="answer"
                value={option}
                checked={selectedAnswer === option}
                onChange={(e) => setSelectedAnswer(e.target.value)}
                className="mr-2"
                aria-label={`Option ${option}`}
              />
              {option}
            </label>
          ))}
        </div>
      )}

      {question.type === "true-false" && (
        <div className="mb-4 flex space-x-4">
          {["True", "False"].map((option) => (
            <button
              key={option}
              onClick={() => setSelectedAnswer(option.toLowerCase())}
              className={`px-4 py-2 rounded-lg ${
                selectedAnswer === option.toLowerCase()
                  ? "bg-green-500 text-white"
                  : "bg-gray-300"
              } hover:bg-green-600 transition`}
            >
              {option}
            </button>
          ))}
        </div>
      )}

      {question.type === "text-input" && (
        <div className="mb-4">
          <input
            type="text"
            value={selectedAnswer}
            onChange={(e) => setSelectedAnswer(e.target.value)}
            placeholder="Type your answer here"
            className="w-full px-4 py-2 border rounded-lg"
            aria-label="Text input for answer"
          />
        </div>
      )}

  
      <button
        className={`px-4 py-2 ${
          selectedAnswer
            ? "bg-blue-500 text-white hover:bg-blue-600"
            : "bg-gray-300 text-gray-600 cursor-not-allowed"
        } rounded-lg transition`}
        onClick={handleSubmit}
        disabled={!selectedAnswer}
      >
        Submit
      </button>
    </div>
  );
};

export default Question;
