import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import app_config from "../../config";
import { useUserContext } from "../../context/UserProvider";

const Header = () => {
  const { loggedin, setLoggedin, logout } = useUserContext();
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(sessionStorage.getItem("user"))
  );
  const url = app_config.apiurl;

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"black"}} >
        {/* Container wrapper */}
        <div className="container" >
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
                <NavLink className="nav-link" to="/main/home">
                  Home
                </NavLink>
              </li>
              {loggedin && (
                <>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/main/signup">
                      Signup
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to="/main/login">
                      Login
                    </NavLink>
                  </li>
                </>
              )}
              <li className="nav-item">
                <NavLink className="nav-link" to="/main/browse">
                  Browse
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/user/manageorders">
                  ManageOrders
                </NavLink>
              </li>
            </ul>
            {/* Left links */}
          </div>
          {/* Collapsible wrapper */}
          {/* Right elements */}
          <div className="d-flex align-items-center">
            {/* Avatar */}
            <div className="dropdown">
              <a
                className="dropdown-toggle d-flex align-items-center hidden-arrow"
                href="#"
                id="navbarDropdownMenuAvatar"
                role="button"
                data-mdb-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://th.bing.com/th/id/OIP.JOTwRZHJceewS0s-polP4gHaFo?w=276&h=210&c=7&r=0&o=5&pid=1.7"
                  class="rounded-circle"
                  height="45"
                  alt="Avatar"
                  loading="lazy"
                />
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="navbarDropdownMenuAvatar"
              >
                <li>
                  <NavLink className="dropdown-item" to="/user/profile">
                    My profile
                  </NavLink>
                </li>

                <li>
                  <button onClick={logout} className="dropdown-item" href="#">
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
          {/* Right elements */}
        </div>
        {/* Container wrapper */}
      </nav>
      {/* Navbar */}
    </>
  );
};

export default Header;
