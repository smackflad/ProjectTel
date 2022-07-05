import "./FilterSearchBar.css";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../../../../../store/searchSlice";
import { useGetSearchMutation } from "../../../../../store/api/searchApi"
import { QueryStatus } from "@reduxjs/toolkit/query/react";



const FilterSearchBar = ({val, setVal}) => {
  const dispatch = useDispatch();
  const searchState = useSelector((state) => state.search);

  const [getSearch, { data, status, isLoading, isError, error }] =
  useGetSearchMutation();

  useEffect(() => {
    if (status === QueryStatus.fulfilled) {
      console.log(searchState);
    } else if (isError) {
      let errToastMessage = "";
      if (error.status === 401) {
        console.log(`Δώσατε λάθος στοιχεία`)
      } else if (error.status === 400) {
        console.log(`ERROR: 400 BAD REQUEST`)
      } else if (error.status === 500) {
        console.log(`ERROR: 500 INTERNAL SERVER ERROR`)
      }
    }
  }, [status, error, isError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(searchState);
    getSearch(searchState)
  };

  return (
    <form className="FilterSearchBar-external" onSubmit={handleSubmit}>
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
    </form>
  );
};

export default FilterSearchBar;
