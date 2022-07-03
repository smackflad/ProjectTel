import "./LocationFilter.css";
import "../MyFilter.css";
import { useEffect, useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import FilterMap from './FilterMap.js'
const LocationFilter = ({}) => {
  const [open, setOpen] = useState(false);
  const [checked, setChecked] = useState([]);

  const zoom = 13;

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

  return (
    <div ref={ref} className="MyFilter-txt-outter">
      <div className="MyFilter-txt-external LocationFilter-txt-external">
        <div
          onClick={() => {
            setOpen(!open);
          }}
          className="MyFilter-txt-internal LocationFilter-txt-internal"
        >
          <div className={`MyFilter-txt-internal-spans`}>
            <span
              className={`MyFilter-txt-span ${
                checked.length ? "MyFilter-txt-span-small" : ""
              }`}
            >
              Τοποθεσία
            </span>
            {checked.length > 0 && (
              <span className="MyFilter-txt-span-items"></span>
            )}
          </div>
          <span className="material-icons-outlined MyFilter-txt-icon">
            {open ? "close" : "expand_more"}
          </span>
        </div>
        {open && (
          <div className="LocationFilter-popup-external">
            <div className="LocationFilter-popup-internal">
              <span className="LocationFilter-popup-internal-title">
                Επιλογή
              </span>
              <div className="LocationFilter-popup-internal-items">
                <div className="LocationFilter-popup-internal-map">
                  <FilterMap lat={37.772} lng={-122.214} />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LocationFilter;
