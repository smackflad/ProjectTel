import "./myHomePage.css";
import HomeTop from "./Components/HomeTop/HomeTop";
import HomeBot from "./Components/HomeBot/HomeBot";
import Middle_Component from "./Components/Middle_Component/Middle_Component";

import { Navigate } from "react-router-dom";

const HomePage = () => {	
	return (
		<div className="homePage-external">
			<HomeTop />
			<Middle_Component />
			<HomeBot />
		</div>	
	);
};

export default HomePage;