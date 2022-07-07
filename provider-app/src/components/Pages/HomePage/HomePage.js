import "./HomePage.css";
import { Navigate } from "react-router-dom";
import myGif from '../../../images/eikona.gif';

const HomePage = () => {
	return (
		<div className="HomePage-external">
		<span className="HomePage-title">Welcome to our Provider Platform!</span>
		<img src={myGif} alt=''></img>
		<div className="HomePage-text"> Here you can set up your provider profile and manage your company's events.</div>
		</div>
	);
};

export default HomePage;