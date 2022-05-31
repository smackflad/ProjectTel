import "./HomeTopFilters.css";

import { Navigate } from "react-router-dom";
import MyFilterCat from "./MyFilterCat/MyFilterCat";
import MyFilterAge from "./MyFilterAge/MyFilterAge";
import MyFilterLoc from "./MyFilterLoc/MyFilterLoc";
import MyFilterDate from "./MyFilterDate/MyFilterDate";
import { useState } from "react";

const HomeTopFilters = () => {
	const [category, setCategory] = useState([])
	const [age, setAge] = useState([])
	const [location, setLocation] = useState([])
	const [dateStart, setDateStart] = useState()
	const [dateEnd, setDateEnd] = useState()
	return (
		<div className="HomeTopFilters-TopFilters-external">
			<MyFilterCat checked={category} setChecked={setCategory} />
			<MyFilterAge checked={age} setChecked={setAge} />
			<MyFilterLoc />
			<MyFilterDate />
		</div>
	);
};

export default HomeTopFilters;