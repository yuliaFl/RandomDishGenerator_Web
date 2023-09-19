import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Add from "./add";
import Home from "./home";
import Generate from "./generate";
import Meat from "./meat";
import Garnish from "./garnish";
import Dishes from "./dishes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/add" element={<Add/>} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/garnish" element ={<Garnish/>}/>
          <Route path="/meat" element ={<Meat/>}/>
          <Route path="/dishes" element ={<Dishes/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
