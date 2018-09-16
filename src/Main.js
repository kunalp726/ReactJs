import React, { Component,Fragment } from 'react';
import './App.css';
import {BrowserRouter as Router,NavLink,Link} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Users from './users/Users';
import About from './About/about';
import Home from './Home';

class Main extends Component {
  render() {
    return (
      <div className="main-parent">
        <div className="background"></div>
      
        <Router>
          <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light nav-parent">
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
</nav>

        <Route path="/" exact  component={Home}></Route>
        <Route path="/users" exact strict component={Users}></Route>
        <Route path="/about" exact strict component={About}></Route>
        </Fragment>
      </Router>
      </div>
    )
  }
}

export default Main;
