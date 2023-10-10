import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent the default form submission behavior
    // Add your code to handle the form submission here
    console.log("Form submitted with selected option:", selectedOption);
  };

  return (
    <div id="Add" className="addpage">
      <h1>What would you like to add?</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="text-input"
          placeholder="Type here..."
          className="custom-input"
        />
        <div className="choices">
          <label className="radio-label">
            <input
              type="radio"
              name="choices"
              value="Garnish"
              checked={selectedOption === "Garnish"}
              onChange={handleOptionChange}
            />
            Garnish
          </label>
        </div>
        <br/>
        <div className="choices">
          <label className="radio-label">
            <input
              type="radio"
              name="choices"
              value="Meat"
              checked={selectedOption === "Meat"}
              onChange={handleOptionChange}
            />
            Meat
          </label>
        </div>
        <br/>
        <div className="choices">
          <label className="radio-label">
            <input
              type="radio"
              name="choices"
              value="Meals"
              checked={selectedOption === "Meals"}
              onChange={handleOptionChange}
            />
            Meals
          </label>
        </div>
        <br/>
        <button type="submit" className="button">Submit</button>
      </form>
    </div>
  );
};

export default Add;
