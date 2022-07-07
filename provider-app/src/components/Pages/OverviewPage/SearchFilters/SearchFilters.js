import "./SearchFilters.css";

import { Navigate } from "react-router-dom";
import AgeCategoryFilter from "./AgeCategoryFilter/AgeCategoryFilter";
import DateFilter from "./DateFilter/DateFilter";
import { useState } from "react";

const SearchFilters = () => {
  return (
    <div className="Overview-TopFilters-external">
      <DateFilter />
      <AgeCategoryFilter />
    </div>
  );
};

export default SearchFilters;
