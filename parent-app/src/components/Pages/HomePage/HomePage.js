import "./myHomePage.css";
import HomeTop from "./components/HomeTop/HomeTop";

import { Navigate } from "react-router-dom";

const HomePage = () => {
	return (
		<div className="HomeTop-external">
			<HomeTop />
		</div>
	);
};

export default HomePage;