import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "mdb-ui-kit"; // lib
import "mdb-ui-kit"; // module
import { Link } from "react-router-dom";
import "../css/NavBar.css"

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light mb-4">
        <div className="container-fluid">
          <span className="navbar-brand" href="#">
            Test StockRadars
          </span>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars" />
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <span className="nav-link active" aria-current="page">
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    <span className="link-text">Home</span>
                  </Link>
                </span>
              </li>
              <li className="nav-item">
                <span className="nav-link">
                  <Link
                    to="/register?ref=stockradars&email=example@siamsquared.com"
                    style={{ textDecoration: "none", color: "gray" }}
                  >
                    <span className="link-text">Register</span>
                  </Link>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
