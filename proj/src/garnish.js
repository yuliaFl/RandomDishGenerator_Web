import React from "react";
import { useNavigate } from "react-router-dom";

const Garnish = () => {
  const navigate = useNavigate();
  return (
    <div id="Garnish" className="garnish">
      <h1>Generate garnish</h1>
    </div>
  );
};

export default Garnish;
