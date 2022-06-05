import "./HomeTopFilters.css";

import { Navigate } from "react-router-dom";
import MyFilterText from "../../MyFilterText/MyFilterText";

const HomeTopFilters = () => {
	return (
		<div className="HomeTopFilters-external">
			<ul>
				<li><MyFilterText placeholder="Filter1" width="200"/></li>
				<li><MyFilterText placeholder="Filter2" width="200"/></li>
				<li><MyFilterText placeholder="Filter3" width="200"/></li>
			</ul>
		</div>
	);
};

export default HomeTopFilters;