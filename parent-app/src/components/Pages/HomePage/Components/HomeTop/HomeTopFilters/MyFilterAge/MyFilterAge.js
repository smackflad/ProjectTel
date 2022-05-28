import './MyFilterAge.css';
import { useState } from "react";

const MyFilterAge = ({type="text", placeholder="",disabled=false}) => 
{
	const [id] = useState(() => `component-${Math.random().toString(16).slice(2)}`);
    return (
		<div className="MyFilterAge-txt-external">
            <div className='MyFilterAge-txt-internal'>
                {/* <input type={type} onChange={(e)=>{}} disabled={disabled} placeholder={placeholder}/> */}
                <span className='MyFilterAge-txt-span'>Age</span>
                <span class="material-icons-outlined MyFilterAge-txt-icon">
                    expand_more
                </span>
            </div>
        </div>
	);
};

export default MyFilterAge;
