import "./PopupSuccess.css";

const PopupSuccess = ({}) => {	
	return (
        <div className="EventPage-PopupSuccess-internal">
            <span className="EventPage-PopupSuccess-internal-title">Successful Payment!</span>
            <div className="EventPage-PopupSuccess-internal-items">
                <div className="EventPage-PopupSuccess-internal-items-bot">
                    <div className="EventPage-PopupSuccess-internal-items-bot-inner">
                        <span>Location </span>
                        <span className="EventPage-PopupSuccess-internal-items-bot-inner-item"> 
                            <span className="material-icons-outlined">
                                location_on
                            </span>
                            Δημοτικό Θέατρο
                        </span>
                    </div>
                    <div className="EventPage-PopupSuccess-internal-items-bot-inner">
                        <span>Date </span>
                        <span className="EventPage-PopupSuccess-internal-items-bot-inner-item"> 
                            <span className="material-icons-outlined">
                                location_on
                            </span>
                            Δημοτικό Θέατρο
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