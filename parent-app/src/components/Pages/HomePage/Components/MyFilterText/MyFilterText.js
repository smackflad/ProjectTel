import './MyFilterText.css';
import { useState } from "react";

const MyFilterText = ({type="text", placeholder="",disabled=false, width="330"}) => 
{
	const [id] = useState(() => `component-${Math.random().toString(16).slice(2)}`);
    return (
		<div className="MyFilterText-txt-external">
            <div className='MyFilterText-txt-internal'>
                <input type={type} style={{width:width+"px"}} onChange={(e)=>{}} disabled={disabled} placeholder={placeholder}/>
            </div>
        </div>
	);
};

export default MyFilterText;
