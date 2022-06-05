import { useState } from 'react';
import './MySelectBox.css';

const MySelectBox = ({labelTxt, bgColor="#fafafa", ftColor="#000000", ftSize="16px", clicked=()=>{}, disabled=false}) => 
{
    const items = ["test", "Test2", "Test3", "Test4"];
    const domItem = [];
    for(const [index, value] of items.entries()){
        domItem.push(<option value={index} >{value}</option>)
    }
    return (
		<div className="MySelectBox-external">
            <div className="MySelectBox-wrapper">
                <div className="MySelectBox-select">
                    <select>
                        
                        {domItem}
                    </select>
                </div>
            </div>
        </div>
	);
};

export default MySelectBox;