import "./myHomePage.css";
import HomeTop from "./components/HomeTop/HomeTop";
import HomeBot from "./components/HomeBot/HomeBot";

import { Navigate } from "react-router-dom";

const HomePage = () => {
	return (
		<div className="HomeTop-external">
			<HomeTop />
			<HomeBot />
		</div>
	);
};

export default HomePage;