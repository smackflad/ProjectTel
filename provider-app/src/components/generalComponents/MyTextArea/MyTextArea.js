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
                <textarea name={id} id={id} 
                // onChange={(e)=>{setVal(e.target.value)}}
                onChange={setVal}
                 defaultValue={val} rows={rows} disabled={disabled}></textarea>
            </div>
        </div>
	);
};

export default MyTextArea;