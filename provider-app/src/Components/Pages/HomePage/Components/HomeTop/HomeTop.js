import "./HomeTop.css";
import MySearchBar from "../../../../generalComponents/MySearchBar/MySearchBar";
import HomeTopFilters from "./HomeTopFilters/HomeTopFilters";

import { Navigate } from "react-router-dom";

const HomeTop = () => {
	return (
		<div className="HomeTop-external">
			<div className="HomeTop-searchBar">
				<MySearchBar />
			</div>
			<HomeTopFilters />
		</div>
	);
};

export default HomeTop;