import React from "react";
import {useNavigate} from "react-router-dom";

function Generate () {
  const navigate = useNavigate();
  return (
    <div id="Generate" className="generatepage">
      <h1>Choose category to generate in: </h1>
    </div>
  );
}; 

export default Generate;
