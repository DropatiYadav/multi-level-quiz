import React from "react";
import { useNavigate } from "react-router-dom";
import { StartScreen } from "../components";


const StartScreenContainer = () => {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate("/quiz");
  };

  return <StartScreen onStart={handleStart} />;
};

export default StartScreenContainer;
