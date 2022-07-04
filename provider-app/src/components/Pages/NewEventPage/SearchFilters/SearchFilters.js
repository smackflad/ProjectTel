import "./SearchFilters.css";

import EventCategoryFilter from "./EventCategoryFilter/EventCategoryFilter";
import AgeCategoryFilter from "./AgeCategoryFilter/AgeCategoryFilter";

const SearchFilters = ({setFinA}) => {
  return (
    <div className="SearchFilters-TopFilters-external">
      <EventCategoryFilter />
      <AgeCategoryFilter setFin={setFinA} />
    </div>
  );
};

export default SearchFilters;
