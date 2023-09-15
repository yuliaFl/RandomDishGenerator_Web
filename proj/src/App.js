import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Add from './add';
import Home from './home';
import Generate from './generate';
import Meat from './meat';
import Garnir from './garnir';
import Random from './random';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element ={<Home/>}/>
          <Route path="/generate" element ={<Generate/>}/>
          <Route path="/add" element ={<Add/>}/>
          <Route path="/meat" element ={<Meat/>}/>
          <Route path="/garnir" element ={<Garnir/>}/>
          <Route path="/random" element ={<Random/>}/>
        </Routes>
      </Router>
      </div>
  );
}

export default App;
