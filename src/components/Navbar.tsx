import React from 'react';
import { Link } from 'react-router-dom';
import './site.css'; // Make sure to import your CSS file

const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
         <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/signin">Sign In</Link>
        </li>
        <li>
          <Link to="/register">Sign Up</Link>
        </li>
        <li>
          <Link to="/signout">Sign Out</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
