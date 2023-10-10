import React from "react";
import { useNavigate } from "react-router-dom";

const Dishes = () => {
  const navigate = useNavigate();
  return (
    <div id="Dishes" className="dishespage">
      <h1>Generate set dishes</h1>
    </div>
  );
};

export default Dishes;
