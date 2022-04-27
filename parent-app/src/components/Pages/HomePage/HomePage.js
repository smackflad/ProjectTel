import "./myHomePage.css";
import Middle_Component from "./Components/Middle_Component/Middle_Component";
import { Navigate } from "react-router-dom";

const HomePage = () => {	
	return (
		<div className="homePage-external">
			<Middle_Component />
		</div>		
	);
};

export default HomePage;