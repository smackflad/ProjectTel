import './MyNav.css';
import { useState } from "react";

const MyNav = () => 
{
    return (
		<div className="MyNav-external">
            <div className="MyNav-internal">
                <div className="MyNav-Logo">
                    LOGO
                </div>
                <div className="MyNav-items">
                    <div className="MyNav-menu">
                        <ul>
                            <li>About Us</li>
                            <li>Register</li>
                            <li>Login</li>
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