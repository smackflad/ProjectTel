import "./DateFilter.css";
import "../MyFilter.css";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import DatePicker from "react-datepicker";
import { update } from "../../../../../../../store/searchSlice";

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

  const [open, setOpen] = useState(false);

  const onChange = (dates) => {
    const [start, end] = dates;
    const endTemp = new Date(end);
    endTemp.setHours(23, 59, 59, 999);

    setStartDate(start);
    setEndDate(end);
    setFinalStartDate(start);
    setFinalEndDate(endTemp);
    if (end !== "") {
      setCurr(3);
    } else {
      setCurr(0);
    }
  };

  const handleCheck = (event) => {
    if (event.target.checked) {
      setCurr(event.target.value);
      setEndDate("");
      setStartDate("");
      if(event.target.value == 1){
        const currDate = new Date();
        setFinalStartDate(currDate.toString());
        currDate.setHours(23, 59, 59, 999); //TODO remove this if want to print events that are still active
        setFinalEndDate(currDate.toString());
      }else if(event.target.value == 2){
        var today = new Date();//TODO remove this if want to print events that are still active
        var lastday = new Date();
        // today.setHours(23, 59, 59, 999);
        lastday.setHours(23, 59, 59, 999);
        while (lastday.getDay() !== 0) {
          lastday.setDate(lastday.getDate() + 1);
        }
        setFinalStartDate(today.toString());
        setFinalEndDate(lastday.toString());
      }else if(event.target.value == 0){
        setFinalStartDate("");
        setFinalEndDate("");
      }
    } else {
      if (endDate !== "") {
        setEndDate("");
        setFinalEndDate("");
      }
      setCurr(0);
    }
  };

  var checkedItems = () => {
    if (curr == 1) {
      const currDate = new Date();
      return currDate.getDate() + "/" + currDate.getMonth();
    } else if (curr == 2) {
      var today = new Date();
      var lastday = new Date();
      while (lastday.getDay() !== 0) {
        lastday.setDate(lastday.getDate() + 1);
      }
      return (
        today.getDate() +
        "/" +
        today.getMonth() +
        " - " +
        lastday.getDate() +
        "/" +
        lastday.getMonth()
      );
    } else if (curr == 3) {
      if (startDate && endDate)
        return (
          startDate.getDate() +
          "/" +
          startDate.getMonth() +
          " - " +
          endDate.getDate() +
          "/" +
          endDate.getMonth()
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
    dispatch(
      update((state) => {
        state.startDate = FinalstartDate;
        state.endDate = FinalendDate;
      })
    );
  }, [FinalstartDate, FinalendDate]);

  return (
    <div ref={ref} className="MyFilter-txt-outter">
      <div className="MyFilter-txt-external DateFilter-txt-external">
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="MyFilter-txt-internal DateFilter-txt-internal"
        >
          <div className={`MyFilter-txt-internal-spans`}>
            <span
              className={`MyFilter-txt-span ${
                curr != 0 ? "MyFilter-txt-span-small" : ""
              }`}
            >
              Ημερομηνία
            </span>
            {curr != 0 && (
              <span className="MyFilter-txt-span-items">{checkedItems()}</span>
            )}
          </div>
          <span className="material-icons-outlined MyFilter-txt-icon">
            {open ? "close" : "expand_more"}
          </span>
        </div>
        {open && (
          <div className="DateFilter-popup-external">
            <div className="DateFilter-popup-internal">
              <span className="DateFilter-popup-internal-title">Επιλογή</span>
              <div className="DateFilter-popup-internal-items">
                <div className="DateFilter-popup-internal-date">
                  <div className="DateFilter-popup-internal-date-datePicker">
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
                  </div>

                  {/* <DatePicker
                                    renderCustomHeader={({
                                        monthDate,
                                        customHeaderCount,
                                        decreaseMonth,
                                        increaseMonth,
                                        }) => (
                                            <div>
                                            <button
                                                aria-label="Previous Month"
                                                className={
                                                "react-datepicker__navigation react-datepicker__navigation--previous"
                                                }
                                                style={customHeaderCount === 1 ? { visibility: "hidden" } : null}
                                                onClick={decreaseMonth}
                                            >
                                                <span
                                                className={
                                                    "react-datepicker__navigation-icon react-datepicker__navigation-icon--previous"
                                                }
                                                >
                                                {"<"}
                                                </span>
                                            </button>
                                            <span className="react-datepicker__current-month">
                                                {monthDate.toLocaleString("en-US", {
                                                month: "long",
                                                year: "numeric",
                                                })}
                                            </span>
                                            <button
                                                aria-label="Next Month"
                                                className={
                                                "react-datepicker__navigation react-datepicker__navigation--next"
                                                }
                                                style={customHeaderCount === 0 ? { visibility: "hidden" } : null}
                                                onClick={increaseMonth}
                                            >
                                                <span
                                                className={
                                                    "react-datepicker__navigation-icon react-datepicker__navigation-icon--next"
                                                }
                                                >
                                                {">"}
                                                </span>
                                            </button>
                                            </div>
                                    )}
                                    onChange={(date) => setStartDate(date)}
                                    monthsShown={2}
                                    inline
                                    selected={null}
                                    startDate={startDate}
                                    endDate={endDate}
                                    selectsRange={true}
                                    isClearable={true}
                                /> */}

                  <ul>
                    {DateCategories.slice(0, DateCategories.length).map(
                      (item, index) => (
                        <li key={uuidv4()}>
                          <label>
                            <input
                              type="checkbox"
                              value={item.value}
                              onChange={handleCheck}
                              checked={index == curr}
                            />
                            {item.item}
                          </label>
                        </li>
                      )
                    )}
                  </ul>
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
