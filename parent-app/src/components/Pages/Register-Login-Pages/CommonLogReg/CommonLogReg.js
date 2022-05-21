import './CommonLogReg.css';
import logo from '../../../../images/TEL-LOGO.svg'
import { useState } from "react";

const CommonLogReg = (props) => 
{
    return (
		<div className="CommonLogReg-external">
            <div className='CommonLogReg-wrapper'>
                <div className='Logo-panel'>  
                    <img className='site-logo' src={logo} ></img>           
                </div>
                {props.children}
            </div>
        </div>
	);
};

export default CommonLogReg;