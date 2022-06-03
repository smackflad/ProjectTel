import './MyFilterCat.css';
import './../MyFilter.css';
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const CatCategories = ["Προσχολική","Elementary","third","fourth", "Προσχολική","Elementary","third","fourth", "third","fourth"];


const MyFilterCat = ({checked, setChecked}) => 
{
    const [open, setOpen] = useState(false);
    // const [checked, setChecked] = useState([]);
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
    
    const ref = useRef(null);
    const onClickOutside = ()=>{
        if(open){setOpen(!open)};
    }

    useEffect(() => {
        const handleClickOutside = (event) => {
          if (ref.current && !ref.current.contains(event.target)) {
            onClickOutside && onClickOutside();
          }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
          document.removeEventListener('click', handleClickOutside, true);
        };
      }, [ onClickOutside ]);


    return (
        <div ref={ref} className='MyFilter-txt-outter'>
        <div className="MyFilter-txt-external">
            <div onClick={()=>{setOpen(!open)}} className='MyFilter-txt-internal'>
                <div className={`MyFilter-txt-internal-spans`}>
                    <span className={`MyFilter-txt-span ${checked.length ? "MyFilter-txt-span-small":""}`}>Είδος/Κατηγορία</span>
                    {checked.length >0 &&
                            <span className='MyFilter-txt-span-items'>{checkedItems()}</span>
                    }
                </div>
                <span className="material-icons-outlined MyFilter-txt-icon">
                    {open ? 'close' : 'expand_more'}
                </span>
            </div>
            {open &&
                <div className='MyFilterCat-popup-external'>
                    <div className='MyFilterCat-popup-internal'>
                        <span className='MyFilterCat-popup-internal-title'>Επιλογή Κατηγοριών</span>
                        <div className='MyFilterCat-popup-internal-items'>
                            <ul>
                                {
                                    CatCategories.slice(0,CatCategories.length/2).map((item)=>
                                        <li key={uuidv4()}>
                                            <label>
                                                <input type="checkbox" value={item} onChange={handleCheck} checked={checked.includes(item)}/>
                                                {item}
                                            </label>
                                        </li>
                                    )
                                }
                            </ul>
                            <ul>
                                {
                                    CatCategories.slice(CatCategories.length/2, CatCategories.length).map((item)=>
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

export default MyFilterCat;
