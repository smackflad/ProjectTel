import "./AgeCategoryFilter.css";
import "../MyFilter.css";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useDispatch, useSelector } from "react-redux";
import { useGetEventsMutation } from "../../../../../store/api/providerApi";
import { QueryStatus } from "@reduxjs/toolkit/query/react";

const ageCategoriesArr = [
  { id: 0, name: "Όλα", checked: true, db: "all" },
  { id: 1, name: "Νηπειαγωγείο", checked: false, db: "kindergarten" },
  { id: 2, name: "Δημοτικό", checked: false, db: "elementary" },
  { id: 3, name: "Γυμνάσιο", checked: false, db: "middleSchool" },
  { id: 4, name: "Λύκειο", checked: false, db: "highSchool" },
  { id: 5, name: "Φοιτητές", checked: false, db: "university" },
];

const AgeCategoryFilter = () => {
  const dispatch = useDispatch();
  const {companyId, userId} = useSelector((state) => state.persistedReducer.global);
  
  
  const [getEvents, { data, isError, isLoading, error, status }] =
  useGetEventsMutation();
  const [ageCategories, setAgeCategories] = useState(ageCategoriesArr);
  useEffect(() => {
    if(status === QueryStatus.uninitialized){
      getEvents({cID: companyId, eID: userId});
    }else if(status === QueryStatus.fulfilled){
      // console.log(data);
      // setAgeCategories(data);//TODO when takis fixes get company events
    }else if (isError) {
      console.log(error.data);
      let errToastMessage = "";
      if (error.status === 400) {
        errToastMessage = `ERROR: 400 BAD REQUEST`;
      } else if (error.status === 500) {
        errToastMessage = `ERROR: 500 INTERNAL SERVER ERROR`;
      }
      console.log(errToastMessage);
    }
  }, [data, isError, isLoading, error, status]);
  const [displayTxt, setDisplayTxt] = useState("");
  const [open, setOpen] = useState(false);

  var checkedItems = () => {
    const selected = ageCategories.filter((c) => c.checked).length;
    if (selected === 1) {
      return ageCategories.find((c) => c.checked).name;
    } else {
      return "";
    }
  };

  const ref = useRef(null);
  const onClickOutside = () => {
    if (open) {
      setOpen(!open);
    }
  };

  const handleChange = (id) => {
    const updatedAgeCat = ageCategories.map((a) => {
      if (a.id === id) {
        a.checked = true;
      }else{
        a.checked = false;
      }
      return a;
    });
    setAgeCategories(updatedAgeCat);
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
    setDisplayTxt(checkedItems());

  }, [ageCategories]);

  return (
    <div ref={ref} className="Overview-MyFilter-txt-outter">
      {/* {checked} */}
      <div className="Overview-MyFilter-txt-external">
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="Overview-MyFilter-txt-internal"
        >
          <div className={`Overview-MyFilter-txt-internal-spans`}>
            <span
              className={`Overview-MyFilter-txt-span ${
                displayTxt.length ? "Overview-MyFilter-txt-span-small" : ""
              }`}
            >
              Δραστηριότητες
            </span>
            <span className="Overview-MyFilter-txt-span-items">{displayTxt}</span>
          </div>
          <span className="material-icons-outlined Overview-MyFilter-txt-icon">
            {open ? "close" : "expand_more"}
          </span>
        </div>
        {open && (
          <div className="Overview-AgeCategoryFilter-popup-external">
            <div className="Overview-AgeCategoryFilter-popup-internal">
              <span className="Overview-AgeCategoryFilter-popup-internal-title">
                Επιλογή
              </span>
              <div className="Overview-AgeCategoryFilter-popup-internal-items">
                <ul>
                  {ageCategories.map((item) => (
                    <li key={uuidv4()}>
                      <label>
                        <input
                          type="radio"
                          name="overview-events"
                          value={item.name}
                          onChange={() => handleChange(item.id)}
                          checked={item.checked}
                        />
                        {item.name}
                      </label>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AgeCategoryFilter;
