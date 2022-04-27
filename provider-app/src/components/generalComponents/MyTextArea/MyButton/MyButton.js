import { useState } from 'react';
import './MyButton.css';

const MyButton = ({labelTxt, bgColor="#fafafa", ftColor="#000000", ftSize="16px", clicked=()=>{}}) => 
{
    return (
		<div className="MyButton-external" onClick={clicked} style={{backgroundColor:bgColor, color:ftSize, fontSize:ftSize}}>
            <span>{labelTxt}</span>
        </div>
	);
};

export default MyButton;