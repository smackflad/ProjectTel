import './MyNav.css';
import { useState } from "react";
import {
    Link
  } from "react-router-dom";
const MyNav = () => 
{
    return (
		<div className="MyNav-external">
            <div className="MyNav-internal">
                <div className="MyNav-Logo">
                </div>
                <div className="MyNav-items">
                    <div className="MyNav-menu">
                        <ul>
                            <li>About Us</li>
                            <li> <Link to="/Register">Register</Link></li>
                            <li><Link to="/Login">Login</Link></li>
                        </ul>
                    </div>
                    <div className="MyNav-icon">
                        <span className="material-icons-outlined md-40">
                            account_circle
                        </span>
                    </div>
                </div>
            </div>
        </div>
	);
};

export default MyNav;