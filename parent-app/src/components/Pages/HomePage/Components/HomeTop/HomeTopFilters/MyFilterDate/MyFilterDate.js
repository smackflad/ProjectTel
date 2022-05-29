import './MyFilterDate.css';
import '../MyFilter.css';
import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import DatePicker from "react-datepicker";

const DateCategories = [{item: "Οποτεδήποτε", value:0}, {item: "Σήμερα", value:1},{item: "Αυτή την Εβδομάδα", value:2}];

const MyFilterDate = ({}) => 
{
	const [startDate, setStartDate] = useState();
	const [endDate, setEndDate] = useState();
    
    const [curr, setCurr] = useState(0);

	const [open, setOpen] = useState(false);

    const onChange = (dates) => {
        const [start, end] = dates;
        setStartDate(start);
        setEndDate(end);
        if(end != null){
            setCurr(3);
        }else{
            setCurr(0);
        }
    };

    const handleCheck = (event) => {
        if (event.target.checked) {
            setCurr(event.target.value);
            // setStartDate(null);
            setEndDate(null);
            setStartDate(null);
        } else {
            if(endDate != null)endDate.setDate(null);
            setCurr(0);
        }
    };

    var checkedItems = ()=>{
        if(curr == 1){
            const currDate = new Date();
            return currDate.getDate() + '/' + currDate.getMonth();
        }else if(curr == 2){
            var today = new Date();
            var lastday = new Date();
            while(lastday.getDay() != 0){
                lastday.setDate(lastday.getDate()+1);
            }
            return today.getDate() + '/' + today.getMonth() + ' - ' + lastday.getDate() + '/' + lastday.getMonth();
        }else if(curr == 3){
            if(startDate && endDate)
            return startDate.getDate() + '/' + startDate.getMonth() + ' - ' + endDate.getDate() + '/' + endDate.getMonth();
        }else if(curr == 0){
        }
        return '';
    }

    return (
        <div className='MyFilter-txt-outter'>
        <div className="MyFilter-txt-external MyFilterDate-txt-external">
            <div onClick={()=>{setOpen(!open)}} className='MyFilter-txt-internal MyFilterDate-txt-internal'>
                <div className={`MyFilter-txt-internal-spans`}>
                    <span className={`MyFilter-txt-span ${curr != 0 ? "MyFilter-txt-span-small":""}`}>Ημερομηνία</span>
                    {curr != 0 &&
                            <span className='MyFilter-txt-span-items'>{checkedItems()}</span>
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
                                    selected={null}
                                    onChange={onChange}
                                    startDate={startDate}
                                    endDate={endDate}
                                    selectsRange={true}
                                    isClearable={true}
                                    inline
                                    monthsShown={2}
                                />
                                <ul>
                                    {
                                        DateCategories.slice(0,DateCategories.length).map((item, index)=>
                                            <li key={uuidv4()}>
                                                <label>
                                                    <input type="checkbox" value={item.value} onChange={handleCheck} checked={index == curr}/>
                                                    {item.item}
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
