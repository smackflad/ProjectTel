import './MyFilterAge.css';
import '../MyFilter.css';
import { useState } from "react";

const MyFilterAge = ({}) => 
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
                    <span className={`MyFilter-txt-span ${checked.length ? "MyFilter-txt-span-small":""}`}>Age</span>
                    {checked.length >0 &&
                            <span className='MyFilter-txt-span-items'>{checkedItems}</span>
                    }
                </div>
                <span class="material-icons-outlined MyFilter-txt-icon">
                    {open ? 'close' : 'expand_more'}
                </span>
            </div>
            {open &&
                <div className='MyFilterAge-popup-external'>
                    <div className='MyFilterAge-popup-internal'>
                        <span className='MyFilterAge-popup-internal-title'>Choose Age</span>
                        <div className='MyFilterAge-popup-internal-items'>
                            <ul>
                                <li>
                                    <label>
                                        <input type="checkbox" value="Preschool" onChange={handleCheck} checked={checked.includes("Preschool")}/>
                                        Preschool
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" value="Elementary" onChange={handleCheck} checked={checked.includes("Elementary")}/>
                                        Elementary
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        Preschool
                                    </label>
                                </li>
                                <li>
                                    <label>
                                        <input type="checkbox" />
                                        Preschool
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            }
        </div>
    </div>
	);
};

export default MyFilterAge;
