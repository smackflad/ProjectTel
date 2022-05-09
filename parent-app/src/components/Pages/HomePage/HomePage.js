import "./myHomePage.css";
import HomeTop from "./components/HomeTop/HomeTop";
import HomeBot from "./components/HomeBot/HomeBot";

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