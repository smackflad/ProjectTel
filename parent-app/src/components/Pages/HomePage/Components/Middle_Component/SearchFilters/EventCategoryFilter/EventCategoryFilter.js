import "./EventCategoryFilter.css";
import "../MyFilter.css";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { update } from "../../../../../../../store/searchSlice";
import { useDispatch, useSelector } from "react-redux";

const eventCategoriesArr = [
  { id: 0, name: "Μουσική", checked: false, db: "Music" },
  { id: 1, name: "Αθλήματα", checked: false, db: "Sports" },
  { id: 2, name: "Σινεμά", checked: false, db: "Cinema" },
  { id: 3, name: "Escape Rooms", checked: false, db: "EscapeRooms" },
  { id: 4, name: "Μουσεία", checked: false, db: "Museum" },
  { id: 5, name: "Χορός", checked: false, db: "Dance" },
  { id: 6, name: "Ομαδικές Εκδρομές", checked: false, db: "GroupTrips" },
  {
    id: 7,
    name: "Υβριδικές Δραστηριότητες",
    checked: false,
    db: "HybridEvents",
  },
  { id: 8, name: "Θέατρο", checked: false, db: "Theater" },
  { id: 9, name: "Θερινός Κινηματογράφος", checked: false, db: "SummerCinema" },
];

const EventCategoryFilter = () => {
  const dispatch = useDispatch();
  const [eventCategories, setEventCategories] = useState(eventCategoriesArr);
  const [displayTxt, setDisplayTxt] = useState("");
  const [open, setOpen] = useState(false);

  const searchState = useSelector((state) => state.search);

  var checkedItems = () => {
    const selected = eventCategories.filter((c) => c.checked).length;

    if (selected > 1) {
      return selected + " Επιλεγμένα";
    } else if (selected === 1) {
      return eventCategories.find((c) => c.checked).name;
    } else {
      return "";
    }
  };

  const handleChange = (id) => {
    const updatedAgeCat = eventCategories.map((a) => {
      if (a.id === id) {
        a.checked = !a.checked;
      }
      return a;
    });
    setEventCategories(updatedAgeCat);
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
        onClickOutside();
      }
    };
    document.addEventListener("click", handleClickOutside, true);
    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, [onClickOutside]);

  useEffect(() => {
    setDisplayTxt(checkedItems());
    const selected = eventCategories.filter((c) => c.checked).map((c) => c.db);
    if(selected.length){
      dispatch(update((state) => (state.eventCategory = selected)));
    }else{
      dispatch(update((state) => (delete state.eventCategory)));
    }
    // console.log({...searchState, eventCategory: selected});
  }, [eventCategories]);

  return (
    <div ref={ref} className="MyFilter-txt-outter">
      <div className="MyFilter-txt-external">
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="MyFilter-txt-internal"
        >
          <div className={`MyFilter-txt-internal-spans`}>
            <span
              className={`MyFilter-txt-span ${
                displayTxt.length ? "MyFilter-txt-span-small" : ""
              }`}
            >
              Είδος/Κατηγορία
            </span>
            <span className="MyFilter-txt-span-items">{displayTxt}</span>
          </div>
          <span className="material-icons-outlined MyFilter-txt-icon">
            {open ? "close" : "expand_more"}
          </span>
        </div>
        {open && (
          <div className="EventCategoryFilter-popup-external">
            <div className="EventCategoryFilter-popup-internal">
              <span className="EventCategoryFilter-popup-internal-title">
                Επιλογή Κατηγοριών
              </span>
              <div className="EventCategoryFilter-popup-internal-items">
                <ul>
                  {eventCategories
                    .slice(0, eventCategories.length / 2)
                    .map((item) => (
                      <li key={uuidv4()}>
                        <label>
                          <input
                            type="checkbox"
                            value={item.name}
                            onChange={() => handleChange(item.id)}
                            checked={item.checked}
                          />
                          {item.name}
                        </label>
                      </li>
                    ))}
                </ul>
                <ul>
                  {eventCategories
                    .slice(eventCategories.length / 2, eventCategories.length)
                    .map((item) => (
                      <li key={uuidv4()}>
                        <label>
                          <input
                            type="checkbox"
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

export default EventCategoryFilter;
