import "./AgeCategoryFilter.css";
import "../MyFilter.css";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { ageUpdate } from "../../../../../store/providerNewEventSlice";
import { useSelector, useDispatch } from "react-redux";

const ageCategoriesArr = [
  { id: 1, name: "Νηπειαγωγείο", checked: false, db: "kindergarten" },
  { id: 2, name: "Δημοτικό", checked: false, db: "elementary" },
  { id: 3, name: "Γυμνάσιο", checked: false, db: "middleSchool" },
  { id: 4, name: "Λύκειο", checked: false, db: "highSchool" },
  { id: 5, name: "Φοιτητές", checked: false, db: "university" },
];

const AgeCategoryFilter = () => {
  const dispatch = useDispatch();
  const prev = useSelector(
    (state) => state.persistedReducer.newEvent.ageCategory
  );
  const [ageCategories, setAgeCategories] = useState(
    ageCategoriesArr.map((x) => {
      if (prev.includes(x.db)) {
        x.checked = true;
      }
      return x;
    })
  );
  const [displayTxt, setDisplayTxt] = useState("");
  const [open, setOpen] = useState(false);

  var checkedItems = () => {
    const selected = ageCategories.filter((c) => c.checked).length;

    if (selected > 1) {
      return selected + " Επιλεγμένα";
    } else if (selected === 1) {
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
      } else {
        a.checked = false;
      }
      return a;
    });
    setAgeCategories(updatedAgeCat);
    // console.log(ageCategories.filter(x => x.checked).map(x => x.db))
    dispatch(
      ageUpdate(ageCategories.filter((x) => x.checked).map((x) => x.db))
    );
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
    const selected = ageCategories.filter((c) => c.checked).map((c) => c.db);
    // dispatch(update((state) => (state.ageCategories = selected)));
  }, [ageCategories]);

  return (
    <div ref={ref} className="MyFilter-txt-outter">
      {/* {checked} */}
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
              Ηλικία
            </span>
            <span className="MyFilter-txt-span-items">{displayTxt}</span>
          </div>
          <span className="material-icons-outlined MyFilter-txt-icon">
            {open ? "close" : "expand_more"}
          </span>
        </div>
        {open && (
          <div className="AgeCategoryFilter-popup-external">
            <div className="AgeCategoryFilter-popup-internal">
              <span className="AgeCategoryFilter-popup-internal-title">
                Επιλογή
              </span>
              <div className="AgeCategoryFilter-popup-internal-items">
                <ul>
                  {ageCategories.map((item) => (
                    <li key={uuidv4()}>
                      <label>
                        <input
                          type="radio"
                          name="age-category"
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
