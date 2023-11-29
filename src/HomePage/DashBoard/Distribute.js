// Distribute.js
import React from "react";
import { useNavigate } from "react-router-dom";

const Distribute = () => {
  const navigate = useNavigate();

  const handleDistributeClick = () => {
    // Navigate to the "/dashboard" route when the button is clicked
    navigate("/dashboard");
  };

  return (
    <div>
      <h1>Distribute Page</h1>
      <button onClick={handleDistributeClick}>Distribute</button>
    </div>
  );
};

export default Distribute;
