import "./HomePage.css";
import { Navigate } from "react-router-dom";
import myGif from '../../../images/eikona.gif';

const HomePage = () => {
	return (
		<div className="HomePage-external">
		<span className="HomePage-title">Καλως ήρθατε στην πλατφόρμα για providers!</span>
		<img src={myGif} alt=''></img>
		<div className="HomePage-text"> Εδώ μπορείτε να δημιουργήσετε εταιρικό λογαριασμό και να διαχειριστείτε τα event της επιχείρησής σας!</div>
		</div>
	);
};

export default HomePage;