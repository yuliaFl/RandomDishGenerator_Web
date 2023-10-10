import React from "react";
import { useNavigate } from "react-router-dom";

const Meat = () => {
  const navigate = useNavigate();
  return (
    <div id="Meat" className="meatpage">
      <h1>Generate meat</h1>
    </div>
  );
};

export default Meat;
