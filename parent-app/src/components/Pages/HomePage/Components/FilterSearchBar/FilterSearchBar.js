import "./FilterSearchBar.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../../../../store/searchSlice";

const FilterSearchBar = () => {
  const dispatch = useDispatch();
  const searchState = useSelector((state) => state.search);
  const [tempVal, setTempVal] = useState(searchState.title)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(tempVal !== ""){
      dispatch(
        update((state) => {
          state.title = tempVal;
          state.description = tempVal;
        })
      )
    }else{
      dispatch(update((state) => {
        delete state.title;
        delete state.description;
      }));

    }
  };

  return (
    <form className="FilterSearchBar-external" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Αναζήτηση"
        value={tempVal}
        onChange={(e) =>
          setTempVal(e.target.value)
        }
      />
      <span
        className="material-symbols-outlined FilterSearchBar-icon"
        onClick={handleSubmit}
      >
        search
      </span>
    </form>
  );
};

export default FilterSearchBar;
