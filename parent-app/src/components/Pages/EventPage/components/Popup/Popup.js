import { useState } from "react";
import PopupComplete from "../PopupComplete/PopupComplete";
import PopupSuccess from "../PopupSuccess/PopupSuccess";
import "./Popup.css";

const Popup = ({handleClose}) => {	
    const [curr, setCurr] = useState(0)
	return (
		<div className="EventPage-Popup-external">
            <div className="EventPage-Popup-internal">
                {curr === 0 ? <PopupComplete nextStep={()=>{setCurr(1);}} /> : <PopupSuccess /> }
                <a onClick={handleClose} className="EventPage-Popup-close"/>
            </div>
        </div>	
	);
};

export default Popup;