import './MyFilterLoc.css';
import { useState } from "react";

const MyFilterLoc = ({type="text", placeholder="",disabled=false}) => 
{
    const [open, setOpen] = useState(false);
	const [id] = useState(() => `component-${Math.random().toString(16).slice(2)}`);
    return (
        <div className='MyFilterLoc-txt-outter'>
            <div className="MyFilterLoc-txt-external">
                <div onClick={()=>{setOpen(!open)}} className='MyFilterLoc-txt-internal'>
                    {/* <input type={type} onChange={(e)=>{}} disabled={disabled} placeholder={placeholder}/> */}
                    <span className='MyFilterLoc-txt-span'>Location</span>
                    <span class="material-icons-outlined MyFilterLoc-txt-icon">
                        {open ? 'close' : 'expand_more'}
                    </span>
                </div>
            </div>
            {open &&
                <div className='MyFilterLoc-popup-external'>
                    
                </div>
            }
        </div>
	);
};

export default MyFilterLoc;
