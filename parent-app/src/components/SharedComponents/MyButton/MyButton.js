import { useState } from 'react';
import './MyButton.css';

const MyButton = ({labelTxt, bgColor="#fafafa", ftColor="#000000", ftSize="16px", clicked=()=>{}, disabled=false}) => 
{
    return (
		<div className={"MyButton-external"+(disabled ? ' MyButton-disabled' :'')} onClick={()=>{if(!disabled){clicked()}}} style={{backgroundColor:bgColor, color:ftColor, fontSize:ftSize}}>
            <span>{labelTxt}</span>
        </div>
	);
};

export default MyButton;