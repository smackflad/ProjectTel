import './MyFilterDate.css';
import '../MyFilter.css';
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import DatePicker from "react-datepicker";

const DateCategories = ["Σήμερα","Αυτή την Εβδομάδα"];

const MyFilterDate = ({}) => 
{
	const [startDate, setStartDate] = useState(new Date());
	const [endDate, setEndDate] = useState(new Date());
    

	const [open, setOpen] = useState(true);
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
        <div className="MyFilter-txt-external MyFilterDate-txt-external">
            <div onClick={()=>{setOpen(!open)}} className='MyFilter-txt-internal MyFilterDate-txt-internal'>
                <div className={`MyFilter-txt-internal-spans`}>
                    <span className={`MyFilter-txt-span ${checked.length ? "MyFilter-txt-span-small":""}`}>Ημερομηνία</span>
                    {checked.length >0 &&
                            <span className='MyFilter-txt-span-items'>{checkedItems}</span>
                    }
                </div>
                <span className="material-icons-outlined MyFilter-txt-icon">
                    {open ? 'close' : 'expand_more'}
                </span>
            </div>
            {open &&
                <div className='MyFilterDate-popup-external'>
                    <div className='MyFilterDate-popup-internal'>
                        <span className='MyFilterDate-popup-internal-title'>Επιλογή</span>
                        <div className='MyFilterDate-popup-internal-items'>
                            <div className="MyFilterDate-popup-internal-map">
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}
                                    monthsShown={2}
                                    inline
                                />
                                <ul>
                                    {
                                        DateCategories.slice(0,DateCategories.length).map((item)=>
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
                </div>
            }
        </div>
    </div>
	);
};

export default MyFilterDate;
