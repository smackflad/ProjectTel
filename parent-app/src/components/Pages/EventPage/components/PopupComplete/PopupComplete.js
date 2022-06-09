import MyButton from "../../../../SharedComponents/MyButton/MyButton";
import "./PopupComplete.css";

const PopupComplete = ({nextStep}) => {	
	return (
        <div className="EventPage-PopupComplete-internal">
            <span className="EventPage-PopupComplete-internal-title">Complete Payment</span>
            <div className="EventPage-PopupComplete-internal-items">
                <div className="EventPage-PopupComplete-internal-items-bot">
                    <div className="EventPage-PopupComplete-internal-items-bot-inner">
                        <span>Location </span>
                        <span className="EventPage-PopupComplete-internal-items-bot-inner-item"> 
                            <span className="material-icons-outlined">
                                location_on
                            </span>
                            Δημοτικό Θέατρο
                        </span>
                    </div>
                    <div className="EventPage-PopupComplete-internal-items-bot-inner">
                        <span>Date </span>
                        <span className="EventPage-PopupComplete-internal-items-bot-inner-item"> 
                            <span className="material-icons-outlined">
                                location_on
                            </span>
                            Δημοτικό Θέατρο
                        </span>
                    </div>
                </div>
                <div className="EventPage-PopupComplete-internal-items-bot">
                    <div className="EventPage-PopupComplete-internal-items-bot-inner">
                        <span>Wallet Balance </span>
                        <span className="EventPage-PopupComplete-internal-items-bot-inner-item"> 
                            <span className="material-icons-outlined">
                                location_on
                            </span>
                            Δημοτικό Θέατρο
                        </span>
                    </div>
                    <div className="EventPage-PopupComplete-internal-items-bot-inner">
                        <span>Price </span>
                        <span className="EventPage-PopupComplete-internal-items-bot-inner-item"> 
                            <span className="material-icons-outlined">
                                location_on
                            </span>
                            Δημοτικό Θέατρο
                        </span>
                    </div>
                    <div className="EventPage-PopupComplete-internal-items-bot-inner">
                        <span>Service fee </span>
                        <span className="EventPage-PopupComplete-internal-items-bot-inner-item"> 
                            <span className="material-icons-outlined">
                                location_on
                            </span>
                            Δημοτικό Θέατρο
                        </span>
                    </div>
                    <div className="EventPage-PopupComplete-internal-items-bot-inner">
                        <span>Balance after transaction </span>
                        <span className="EventPage-PopupComplete-internal-items-bot-inner-item"> 
                            <span className="material-icons-outlined">
                                location_on
                            </span>
                            Δημοτικό Θέατρο
                        </span>
                    </div>
                </div>
            </div>
            <div className="EventPage-PopupComplete-bottom">
                <span className="EventPage-PopupComplete-bottom-recharge">Recharge Wallet</span>
                <MyButton labelTxt={"Pay Now!"} bgColor={"#a8ffaa"} clicked={nextStep} />
            </div>
        </div>
	);
};

export default PopupComplete;