import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import questionsData from "../data/questions.json";
import { QuizScreen } from "../components";


const QuizScreenContainer = () => {
  const navigate = useNavigate();


  const [level, setLevel] = useState(() => localStorage.getItem("level") || "easy");
  const [currentIndex, setCurrentIndex] = useState(() => Number(localStorage.getItem("currentIndex")) || 0);
  const [score, setScore] = useState(() => Number(localStorage.getItem("score")) || 0);
  const [correctAnswers, setCorrectAnswers] = useState(() => Number(localStorage.getItem("correctAnswers")) || 0);
  const [timer, setTimer] = useState(30);

  const questions = questionsData[level];


  useEffect(() => {
    localStorage.setItem("level", level);
    localStorage.setItem("currentIndex", currentIndex);
    localStorage.setItem("score", score);
    localStorage.setItem("correctAnswers", correctAnswers);
  }, [level, currentIndex, score, correctAnswers]);


  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    if (timer === 0) handleAnswer("");

    return () => clearInterval(countdown);
  }, [timer]);



  const handleAnswer = (answer) => {
    const currentQuestion = questions[currentIndex];


    if (answer.toLowerCase() === currentQuestion.correctAnswer.toLowerCase()) {
      const points = level === "easy" ? 10 : level === "medium" ? 20 : 30;
      setScore(score + points);
      setCorrectAnswers(correctAnswers + 1);
    }


    if (currentIndex < questions.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setTimer(30);
    } else {

      if (correctAnswers + 1 >= 2) {
        if (level === "easy") setLevel("medium");
        else if (level === "medium") setLevel("hard");
        else navigate("/end", { state: { score } });


        setCurrentIndex(0);
        setCorrectAnswers(0);
        setTimer(30);
      } else {

        alert("You failed this level. Restarting the game.");
        resetGame();
      }
    }
  };


  const resetGame = () => {
    setLevel("easy");
    setCurrentIndex(0);
    setCorrectAnswers(0);
    setScore(0);
    setTimer(30);
    localStorage.clear();
  };

  return (
    <QuizScreen
      level={level}
      score={score}
      currentQuestion={questions[currentIndex]}
      currentIndex={currentIndex}
      totalQuestions={questions.length}
      timer={timer}
      onAnswer={handleAnswer}
    />
  );
};

export default QuizScreenContainer;
