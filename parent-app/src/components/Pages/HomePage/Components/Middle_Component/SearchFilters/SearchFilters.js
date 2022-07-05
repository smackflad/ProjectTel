import "./SearchFilters.css";

import { Navigate } from "react-router-dom";
import EventCategoryFilter from "./EventCategoryFilter/EventCategoryFilter";
import AgeCategoryFilter from "./AgeCategoryFilter/AgeCategoryFilter";
import LocationFilter from "./LocationFilter/LocationFilter";
import DateFilter from "./DateFilter/DateFilter";
import { useState } from "react";

const SearchFilters = () => {
  return (
    <div className="SearchFilters-TopFilters-external">
      <EventCategoryFilter />
      <AgeCategoryFilter />
      <LocationFilter />
      <DateFilter />
    </div>
  );
};

export default SearchFilters;
