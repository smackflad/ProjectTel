import "./PopupComplete.css";

import MyButton from "../../../../SharedComponents/MyButton/MyButton";
import { setEvent } from "../../../../../store/eventSlice";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { useNavigate  } from "react-router-dom";


const PopupComplete = ({nextStep}) => {	
    const state = useSelector((state) => state.event);
    console.log(state)
    useEffect(() => {
    //   console.log(state.eventID)
    }, [state])
    const navigate = useNavigate()
	return (
        <div className="EventPage-PopupComplete-internal">
            <span className="EventPage-PopupComplete-internal-title">Complete Payment</span>
            <div className="EventPage-PopupComplete-internal-items">
                <div className="EventPage-PopupComplete-internal-items-bot">
                    <div className="EventPage-PopupComplete-internal-items-bot-inner">
                        <span>Τοποθεσία </span>
                        <span className="EventPage-PopupComplete-internal-items-bot-inner-item"> 
                            <span className="material-icons-outlined">
                                location_on
                            </span>
                            {state.eventLocation}
                        </span>
                    </div>
                    <div className="EventPage-PopupComplete-internal-items-bot-inner">
                        <span>Ημερομηνία </span>
                        <span className="EventPage-PopupComplete-internal-items-bot-inner-item"> 
                            <span className="material-icons-outlined">
                            calendar_month
                            </span>
                            {state.eventDate}
                        </span>
                    </div>
                </div>
                <div className="EventPage-PopupComplete-internal-items-bot">
                    <div className="EventPage-PopupComplete-internal-items-bot-inner">
                        <span>Υπόλοιπο Πορτοφολιού </span>
                        <span className="EventPage-PopupComplete-internal-items-bot-inner-item"> 
                            <span className="material-icons-outlined">
                            account_balance_wallet
                            </span>
                            Δημοτικό Θέατρο
                        </span>
                    </div>
                    <div className="EventPage-PopupComplete-internal-items-bot-inner">
                        <span>Κόστος </span>
                        <span className="EventPage-PopupComplete-internal-items-bot-inner-item"> 
                            <span className="material-symbols-outlined">
                            payments
                            </span>
                            {state.eventPrice}
                        </span>
                    </div>
                    <div className="EventPage-PopupComplete-internal-items-bot-inner">
                        <span>Κόστος Υπηρεσίας </span>
                        <span className="EventPage-PopupComplete-internal-items-bot-inner-item"> 
                            <span className="material-icons-outlined">
                            price_change
                            </span>
                            10%
                        </span>
                    </div>
                    <div className="EventPage-PopupComplete-internal-items-bot-inner">
                        <span>Υπόλοιπο μετά απο πληρωμή </span>
                        <span className="EventPage-PopupComplete-internal-items-bot-inner-item"> 
                            <span className="material-icons-outlined">
                                payments
                            </span>
                            Δημοτικό Θέατρο
                        </span>
                    </div>
                </div>
            </div>
            <div className="EventPage-PopupComplete-bottom">
                <span className="EventPage-PopupComplete-bottom-recharge" onClick={()=>{
                    navigate("/my-profile")
                }}>Επαναφόρτιση Πορτοφολιού</span>
                <MyButton labelTxt={"Πληρωμή!"} bgColor={"#a8ffaa"} clicked={nextStep} />
            </div>
        </div>
	);
};

export default PopupComplete;