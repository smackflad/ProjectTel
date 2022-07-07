import "./PopupSuccess.css";
import { useSelector } from "react-redux";

const PopupSuccess = ({}) => {	
    const state = useSelector((state) => state.event);
	return (
        <div className="EventPage-PopupSuccess-internal">
            <span className="EventPage-PopupSuccess-internal-title">Η πληρωμή έγινε επιτυχώς!</span>
            <div className="EventPage-PopupSuccess-internal-items">
                <div className="EventPage-PopupSuccess-internal-items-bot">
                    <div className="EventPage-PopupSuccess-internal-items-bot-inner">
                        <span>Τοποθεσία </span>
                        <span className="EventPage-PopupSuccess-internal-items-bot-inner-item"> 
                            <span className="material-icons-outlined">
                                location_on
                            </span>
                            {state.eventLocation}
                        </span>
                    </div>
                    <div className="EventPage-PopupSuccess-internal-items-bot-inner">
                        <span>Ημερομηνία/Ώρα </span>
                        <span className="EventPage-PopupSuccess-internal-items-bot-inner-item"> 
                            <span className="material-icons-outlined">
                                calendar_month
                            </span>
                            {state.eventDate}
                        </span>
                    </div>
                </div>
                <div className="EventPage-PopupSuccess-internal-items-qr">
                    
                </div>
            </div>
            <div className="EventPage-PopupSuccess-bottom">
                <span>Your reciept will download shortly, if it does not click here.</span>
            </div>
        </div>
	);
};

export default PopupSuccess;