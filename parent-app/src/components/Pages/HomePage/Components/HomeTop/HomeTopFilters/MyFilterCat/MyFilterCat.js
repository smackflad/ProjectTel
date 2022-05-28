import './MyFilterCat.css';
import './../MyFilter.css';
import { useState } from "react";

const MyFilterCat = ({type="text", placeholder="",disabled=false}) => 
{
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState([]);
    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };

    var checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
    : "";


    return (
        <div className='MyFilter-txt-outter'>
        <div className="MyFilter-txt-external">
            <div onClick={()=>{setOpen(!open)}} className='MyFilter-txt-internal'>
                <div className={`MyFilter-txt-internal-spans`}>
                    <span className={`MyFilter-txt-span ${checked.length ? "MyFilter-txt-span-small":""}`}>Categories</span>
                    {checked.length >0 &&
                            <span className='MyFilter-txt-span-items'>{checkedItems}</span>
                    }
                </div>
                <span class="material-icons-outlined MyFilter-txt-icon">
                    {open ? 'close' : 'expand_more'}
                </span>
            </div>
            {open &&
                <div className='MyFilterCat-popup-external'>
                    <div className='MyFilterCat-popup-internal'>

                    </div>
                </div>
            }
        </div>
    </div>
	);
};

export default MyFilterCat;
