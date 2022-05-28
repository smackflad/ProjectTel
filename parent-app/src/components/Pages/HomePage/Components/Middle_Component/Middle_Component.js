import './Middle_Component.css';
import Inside_Middle_Component from '../Inside_Middle_Component/Inside_Middle_Component';
import { useState } from "react";
import HomeTopFilters from '../HomeTop/HomeTopFilters/HomeTopFilters';

const Middle_Component = () => 
{
    return (
		<div className="Middle_Component-external">
            <HomeTopFilters />
            <div className='Middle_Component-outsideContainer'>
                <Inside_Middle_Component/>
                <Inside_Middle_Component/>
                <Inside_Middle_Component/>
                <Inside_Middle_Component/>
                <Inside_Middle_Component/>
                <Inside_Middle_Component/>
                <Inside_Middle_Component/>
                <Inside_Middle_Component/>
                <Inside_Middle_Component/>
                <Inside_Middle_Component/>
                <Inside_Middle_Component/>
                <Inside_Middle_Component/>
                <Inside_Middle_Component/>
                <Inside_Middle_Component/>
                <Inside_Middle_Component/>
                <Inside_Middle_Component/>
                
            </div>
        </div>
	);
};

export default Middle_Component;