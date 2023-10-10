import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Add from "./add";
import Home from "./home";
import Generate from "./generate";
import Meat from "./meat";
import Garnish from "./garnish";
import Dishes from "./dishes";
import Navbar from "./navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar /> {/* Include the Navbar component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/garnish" element={<Garnish />} />
          <Route path="/meat" element={<Meat />} />
          <Route path="/dishes" element={<Dishes />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
