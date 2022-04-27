import './Inside_Middle_Component.css';
import { useState } from "react";

const Inside_Middle_Component = () => 
{
    return (
		<div className="Inside_Middle_Component-external" >
            <a className='Inside_Middle_Component-elementClick'>
                <img className='Inside_Middle_Component-image' src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg'></img>
                <div className='Inside_Middle_Component-info'>
                    <span className='Inside_Middle_Component-date'>25 MAY</span>
                    <span className='Inside_Middle_Component-title'>PANATHINAIKOS</span>
                    <span className='Inside_Middle_Component-venue'>OAKA</span>
                </div>
            </a>
        </div>
	);
};

export default Inside_Middle_Component;