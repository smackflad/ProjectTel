import "./FilterSearchBar.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../../../../store/searchSlice";

const FilterSearchBar = () => {
  const dispatch = useDispatch();
  const searchState = useSelector((state) => state.search);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchState);
  };

  return (
    <div className="FilterSearchBar-external" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Αναζήτηση"
        value={searchState.search}
        onChange={(e) =>
          dispatch(
            update((state) => {
              state.search = e.target.value;
            })
          )
        }
      />
      <span
        className="material-symbols-outlined FilterSearchBar-icon"
        onClick={handleSubmit}
      >
        search
      </span>
    </div>
  );
};

export default FilterSearchBar;
