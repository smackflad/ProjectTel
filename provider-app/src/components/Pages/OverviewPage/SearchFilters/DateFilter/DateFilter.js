import "./DateFilter.css";
import "../MyFilter.css";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import DatePicker, { Calendar } from "react-multi-date-picker";

const DateCategories = [
  { item: "Οποτεδήποτε", value: 0 },
  { item: "Σήμερα", value: 1 },
  { item: "Αυτή την Εβδομάδα", value: 2 },
];

const DateFilter = ({}) => {
  const dispatch = useDispatch();
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [FinalstartDate, setFinalStartDate] = useState("");
  const [FinalendDate, setFinalEndDate] = useState("");

  const [curr, setCurr] = useState(0);
  const [values, setValues] = useState();

  useEffect(() => {
    // console.log(values)
  }, [values]);


  const [open, setOpen] = useState(false);

  const searchState = useSelector((state) => state.search);

  const onChange = (dates) => {
    if(dates.length != 2){
      setStartDate("");
      setEndDate("");
      setFinalStartDate("");
      setFinalEndDate("");
      setCurr(0);
      return;
    }
    const start = dates[0];
    const end = dates[1];
    const endTemp = new Date(end);
    endTemp.setHours(23, 59, 59, 999);
    
    setStartDate(start);
    setEndDate(end);
    setFinalStartDate(start);
    setFinalEndDate(endTemp);
    setCurr(1);
    //TODO start, end has the dates we need to send to takis
  };

  var checkedItems = () => {
    if (curr == 1) {
      if (startDate && endDate)
        return (
          startDate.day +
          "/" +
          startDate.month.number +
          " - " +
          endDate.day +
          "/" +
          endDate.month.number
        );
    } else if (curr == 0) {

    }
    return "";
  };

  const ref = useRef(null);
  const onClickOutside = () => {
    if (open) {
      setOpen(!open);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  useEffect(() => {
    if(FinalendDate && FinalstartDate){
      let tempS = new Date(FinalstartDate).toISOString()
      let tempE = new Date(FinalendDate).toISOString()
      // let finS = tempS.substring(0, tempS.indexOf('T'));
      // let finE = tempE.substring(0, tempE.indexOf('T'));
      
      // console.log({...searchState, startDate: tempS, endDate: tempE});
    }else{
      
    }
  }, [FinalstartDate, FinalendDate]);

  return (
    <div ref={ref} className="Overview-MyFilter-txt-outter">
      <div className="Overview-MyFilter-txt-external Overview-DateFilter-txt-external">
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="Overview-MyFilter-txt-internal Overview-DateFilter-txt-internal"
        >
          <div className={`Overview-MyFilter-txt-internal-spans`}>
            <span
              className={`Overview-MyFilter-txt-span ${
                curr != 0 ? "Overview-MyFilter-txt-span-small" : ""
              }`}
            >
              Ημερομηνία
            </span>
            {curr != 0 && (
              <span className="Overview-MyFilter-txt-span-items">{checkedItems()}</span>
            )}
          </div>
          <span className="material-icons-outlined Overview-MyFilter-txt-icon">
            {open ? "close" : "expand_more"}
          </span>
        </div>
        {open && (
          <div className="Overview-DateFilter-popup-external">
            <div className="Overview-DateFilter-popup-internal">
              <span className="Overview-DateFilter-popup-internal-title">Επιλογή</span>
              <div className="Overview-DateFilter-popup-internal-items">
                <div className="Overview-DateFilter-popup-internal-date">
                  <div className="Overview-DateFilter-popup-internal-date-datePicker">
                  <Calendar 
                    value={values}
                    onChange={onChange}
                    // selected={null}
                    // onChange={onChange}
                    // startDate={startDate}
                    // endDate={endDate}
                    // selectsRange={true}
                    // isClearable={true}
                    // inline
                    range
                    numberOfMonths={2}
                    // value={new DateObject()} 
                    // disabled 
                  />
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default DateFilter;
