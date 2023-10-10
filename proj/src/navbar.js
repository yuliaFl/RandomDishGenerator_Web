import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom for navigation

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/generate">Generate</Link>
        </li>
        <li>
          <Link to="/garnish">Garnish</Link>
        </li>
        <li>
          <Link to="/meat">Meat</Link>
        </li>
        <li>
          <Link to="/dishes">Dishes</Link>
        </li>
        <li>
          <Link to="/add">Add</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
