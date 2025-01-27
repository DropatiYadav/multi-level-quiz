import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { EndScreen } from "../components";

const EndScreenContainer = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const score = location.state?.score ?? 0;

  const handleRestart = () => {
    localStorage.clear();
    navigate("/"); 
  };

  return <EndScreen score={score} onRestart={handleRestart} />;
};

export default EndScreenContainer;
