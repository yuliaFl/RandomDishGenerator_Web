import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div id="Home" className="homepage">
      <h1>This is a random meal generator website</h1>
      <button
        onClick={() => {
          navigate("/generate");
        }}
      >
        Generate
      </button>
      <button
        onClick={() => {
          navigate("/add");
        }}
      >
        Add dish
      </button>
    </div>
  );
};

export default Home;
