import { useState } from 'react';
import './MyTextArea.css';

const MyTextArea = ({id, labelTxt, val, setVal=(a)=>{}, star=false, disabled=false, rows="5", cols="50"}) => 
{
    // const [id] = useState(() => `component-${Math.random().toString(16).slice(2)}`);
    return (
		<div className="myTextArea-external">
            <div className='myTextArea-internal'>
                <div className="myTextArea-top">
                    <span>{star && (<span id="star">*</span>)}<label htmlFor={id}>{labelTxt}</label></span>
                </div>
                <textarea id={id} onChange={(e)=>{setVal(e.target.value)}} defaultValue={val} rows={rows} cols={cols} disabled={disabled}></textarea>
            </div>
        </div>
	);
};

export default MyTextArea;