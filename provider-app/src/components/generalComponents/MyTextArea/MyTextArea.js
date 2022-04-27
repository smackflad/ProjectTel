import { useState } from 'react';
import './MyTextArea.css';

const MyTextArea = ({labelTxt, val, setVal=(a)=>{}, star=false, disabled=false, rows="100", cols="50"}) => 
{
    const [id] = useState(() => `component-${Math.random().toString(16).slice(2)}`);
    return (
		<div className="txt-area-external">
            <div className='txt-area-internal'>
                <div className="txt-area-top">
                    <span>{star && (<span id="star">*</span>)}<label htmlFor={id}>{labelTxt}</label></span>
                </div>
                <textarea id={id} onChange={(e)=>{setVal(e.target.value)}} defaultValue={val} rows={rows} cols={cols} disabled={disabled}></textarea>
            </div>
        </div>
	);
};

export default MyTextArea;