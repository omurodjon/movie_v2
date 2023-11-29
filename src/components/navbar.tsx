import React from "react";
import {
  BrowserRouter as Router,
  Routes as Switch,
  Route,
  Navigate,
  Link
} from "react-router-dom";
export function Navbar(){ 
    return(
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Vidly</a>
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="" className="nav-link"><Link to='/login' className="nav-link">Login</Link></a>
            </li>
            <li className="nav-item">
            <a href="" className="nav-link"><Link to='/register' className="nav-link">Register</Link></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    )
}