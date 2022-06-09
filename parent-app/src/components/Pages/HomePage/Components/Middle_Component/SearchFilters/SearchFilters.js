import "./SearchFilters.css";

import { Navigate } from "react-router-dom";
import EventCategoryFilter from "./EventCategoryFilter/EventCategoryFilter";
import AgeCategoryFilter from "./AgeCategoryFilter/AgeCategoryFilter";
import LocationFilter from "./LocationFilter/LocationFilter";
import DateFilter from "./DateFilter/DateFilter";
import { useState } from "react";

const SearchFilters = () => {
  const [location, setLocation] = useState([]);
  const [dateStart, setDateStart] = useState();
  const [dateEnd, setDateEnd] = useState();
  console.log(location);
  console.log(dateStart);
  console.log(dateEnd);
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
