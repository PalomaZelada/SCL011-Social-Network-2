import React from 'react';
import './App.css';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav>
      <ul>
        <Link to='/signup'>
          <li>Signup</li>
        </Link>
        <Link to='/home'>
          <li>Home</li>
        </Link>
        <Link to='/profile'>
          <li>Profile</li>
        </Link>
      </ul>
    </nav>
  );
}

export default Navigation;
