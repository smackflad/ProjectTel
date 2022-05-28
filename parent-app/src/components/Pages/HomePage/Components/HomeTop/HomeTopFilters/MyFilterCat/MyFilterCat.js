import './MyFilterCat.css';
import { useState } from "react";

const MyFilterCat = ({type="text", placeholder="",disabled=false}) => 
{
	const [id] = useState(() => `component-${Math.random().toString(16).slice(2)}`);
    return (
		<div className="MyFilterCat-txt-external">
            <div className='MyFilterCat-txt-internal'>
                {/* <input type={type} onChange={(e)=>{}} disabled={disabled} placeholder={placeholder}/> */}
                <span className='MyFilterCat-txt-span'>Category</span>
                <span class="material-icons-outlined MyFilterCat-txt-icon">
                    expand_more
                </span>
            </div>
        </div>
	);
};

export default MyFilterCat;
