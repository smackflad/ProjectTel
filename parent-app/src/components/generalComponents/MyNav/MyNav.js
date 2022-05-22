import "./MyNav.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const MyNav = () => {
  return (
    <div className="MyNav-external">
      <div className="MyNav-internal">
        <Link to="/">
          <div className="MyNav-Logo"></div>
        </Link>

        <div className="MyNav-items">
          <div className="MyNav-menu">
            <ul>
              <li>About Us</li>
              <li>
                <Link to="/Register">Register</Link>
              </li>
              <li>
                <Link to="/Login">Login</Link>
              </li>
            </ul>
          </div>
          <div className="MyNav-icon">
            <Link to="/my-profile">
              <span className="material-icons-outlined md-40">
                account_circle
              </span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyNav;
