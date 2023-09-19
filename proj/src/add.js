import React from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  return (
    <div id="Add" className="add">
      <h1>Add your choice of dish</h1>
    </div>
  );
};

export default Add;
