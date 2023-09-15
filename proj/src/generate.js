import React from "react";
import {useNavigate} from "react-router-dom";
const Generate = () => {
    const navigate=useNavigate();
  return (
    <div id="Generate" className="generatepage">
      <h1>Choose category to generate in: </h1>
      <button
        onClick={() => {navigate("/garnir");
        }}
      > Garnir
      </button>
      <button>Meats</button>
      <button>Random</button>
    </div>
  );
};

export default Generate;
