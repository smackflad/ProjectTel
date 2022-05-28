import './MyFilterDate.css';
import { useState } from "react";

const MyFilterDate = ({type="text", placeholder="",disabled=false}) => 
{
	const [id] = useState(() => `component-${Math.random().toString(16).slice(2)}`);
    return (
		<div className="MyFilterDate-txt-external">
            <div className='MyFilterDate-txt-internal'>
                {/* <input type={type} onChange={(e)=>{}} disabled={disabled} placeholder={placeholder}/> */}
                <span className='MyFilterDate-txt-span'>Date</span>
                <span class="material-icons-outlined MyFilterDate-txt-icon">
                    expand_more
                </span>
            </div>
        </div>
	);
};

export default MyFilterDate;
