import './MyFilterAge.css';
import '../MyFilter.css';
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const ageCategories = ["Προσχολική","Elementary","third","fourth"];

const MyFilterAge = ({checked, setChecked}) => 
{
	const [open, setOpen] = useState(false);
    const handleCheck = (event) => {
        var updatedList = [...checked];
        if (event.target.checked) {
            updatedList = [...checked, event.target.value];
        } else {
            updatedList.splice(checked.indexOf(event.target.value), 1);
        }
        setChecked(updatedList);
    };

    var checkedItems = ()=>{
        if(checked.length > 1){
            return checked.length+" Επιλεγμένα"
        }else if(checked.length === 1){
            return checked[0];
        }else{
            return "";
        }
    }


    return (
        <div className='MyFilter-txt-outter'>
            {/* {checked} */}
        <div className="MyFilter-txt-external">
            <div onClick={()=>{setOpen(!open)}} className='MyFilter-txt-internal'>
                <div className={`MyFilter-txt-internal-spans`}>
                    <span className={`MyFilter-txt-span ${checked.length ? "MyFilter-txt-span-small":""}`}>Ηλικία</span>
                    {checked.length >0 &&
                            <span className='MyFilter-txt-span-items'>{checkedItems()}</span>
                    }
                </div>
                <span className="material-icons-outlined MyFilter-txt-icon">
                    {open ? 'close' : 'expand_more'}
                </span>
            </div>
            {open &&
                <div className='MyFilterAge-popup-external'>
                    <div className='MyFilterAge-popup-internal'>
                        <span className='MyFilterAge-popup-internal-title'>Επιλογή</span>
                        <div className='MyFilterAge-popup-internal-items'>
                            <ul>
                                {
                                    ageCategories.map((item)=>
                                        <li key={uuidv4()}>
                                            <label>
                                                <input type="checkbox" value={item} onChange={handleCheck} checked={checked.includes(item)}/>
                                                {item}
                                            </label>
                                        </li>
                                    )
                                }
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
