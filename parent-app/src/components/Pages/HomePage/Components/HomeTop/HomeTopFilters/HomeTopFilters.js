import "./HomeTopFilters.css";

import { Navigate } from "react-router-dom";
import MyFilterCat from "./MyFilterCat/MyFilterCat";
import MyFilterAge from "./MyFilterAge/MyFilterAge";
import MyFilterLoc from "./MyFilterLoc/MyFilterLoc";
import MyFilterDate from "./MyFilterDate/MyFilterDate";

const HomeTopFilters = () => {
	return (
		<div className="HomeTopFilters-TopFilters-external">
			<MyFilterCat />
			<MyFilterAge />
			<MyFilterLoc />
			<MyFilterDate />
		</div>
	);
};

export default HomeTopFilters;