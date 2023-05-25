import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      {/* Container wrapper */}
      <div className="container">
        {/* Toggle button */}
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>
        {/* Collapsible wrapper */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Navbar brand */}
          <a className="navbar-brand mt-2 mt-lg-0" href="#">
            <img
              src="https://cdni.autocarindia.com/utils/imageresizer.ashx?n=http://img.haymarketsac.in/autocarpro/dfeb0f3b-abc4-40fb-a3a9-8e1371d6e39e.jpg&w=750&h=490&q=75&c=1"
              height={45}
              alt="MDB Logo"
              loading="lazy"
            />
          </a>
          {/* Left links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/main/Home">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/main/About">
                AboutUs
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/main/contact">
                Contact
              </NavLink>
            </li>
          </ul>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item me-2">
              <NavLink className="btn btn-outline-white" to="/main/signup">
                Create Account
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="btn btn-outline-white" to="/main/signin">
                Signin
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
      {/* Container wrapper */}
    </nav>
  );
};

export default Header;