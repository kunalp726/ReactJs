import React from 'react';
import {NavLink,Link} from 'react-router-dom';

const Navbar = () => {

    return(<nav className="navbar navbar-expand-lg navbar-light nav-parent">
    <Link className="navbar-brand" to="/">AlphaOne</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <NavLink className="nav-link" to="/">Home</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/users">Users</NavLink>
        </li>
        <li className="nav-item">
        <NavLink className="nav-link" to="/about">About</NavLink>
        </li>
      </ul>
    </div>
  </nav>)
  

}

export default Navbar;

