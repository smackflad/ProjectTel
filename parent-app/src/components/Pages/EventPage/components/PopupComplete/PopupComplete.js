import "./PopupComplete.css";

import MyButton from "../../../../SharedComponents/MyButton/MyButton";
import { setEvent } from "../../../../../store/eventSlice";
import { useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { useNavigate  } from "react-router-dom";
import { useGetWalletMutation } from "../../../../../store/api/eventApi";
import { QueryStatus } from "@reduxjs/toolkit/query/react";
import { useCreateOrderMutation } from "../../../../../store/api/eventApi";
import CircleLoader from "react-spinners/CircleLoader";

const PopupComplete = ({nextStep}) => {	
    const state = useSelector((state) => state.event);
    console.log(state)
    useEffect(() => {
    //   console.log(state.eventID)
    }, [state])
    const userState = useSelector((state) => state.persistedReducer.global);

    const [wallet, setWallet] = useState({
        cardExists: "",
        card: "",
        balance: ""
    })
    const [getWallet, { data, isError, isLoading, error, status }] =
    useGetWalletMutation();
    useEffect(() => {
		if (status === QueryStatus.uninitialized) {
            console.log(userState);
			getWallet(userState.userId);
		}else if (status === QueryStatus.fulfilled) {
			console.log(data);
            setWallet(data);
		}else if (isError) {
			console.log(error.data);
			let errToastMessage = "";
			if (error.status === 400) {
			  errToastMessage = `ERROR: 400 BAD REQUEST`;
			} else if (error.status === 500) {
			  errToastMessage = `ERROR: 500 INTERNAL SERVER ERROR`;
			}else if(error.status === 404){
				errToastMessage = `ERROR: 404 no route found`;
			}
			if(errToastMessage)console.log(errToastMessage);
		  }
	  }, [status, isError, error]);


    const navigate = useNavigate()

    const [createOrder, { data: dataO, isError: isErrorO, isLoading: isLoadingO, error: errorO, status: statusO }] =
    useCreateOrderMutation();

    useEffect(() => {
		if (statusO === QueryStatus.uninitialized) {

		}else if (statusO === QueryStatus.fulfilled) {
            nextStep();
		}else if (isErrorO) {
			console.log(errorO);
			let errToastMessage = "";
			if (errorO.status === 400) {
			  errToastMessage = `ERROR: 400 BAD REQUEST`;
			} else if (errorO.status === 500) {
			  errToastMessage = `ERROR: 500 INTERNAL SERVER ERROR`;
			}else if(errorO.status === 404){
				errToastMessage = `ERROR: 404 no route found`;
			}
			if(errToastMessage)console.log(errToastMessage);
		  }
	  }, [statusO, isErrorO, errorO]);

    const handleContinue = ()=>{
        createOrder({ammount: 1, eventId: state.eventID, id: userState.userId})
    }

    if (
		isLoading
	  ) {
		return (
		  <div className="Account-external">
			<CircleLoader />
		  </div>
		);
	  }

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
                        <span>Ημερομηνία/Ώρα </span>
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
                            {wallet.balance}
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
                            {wallet.balance-state.eventPrice}
                        </span>
                    </div>
                </div>
            </div>
            {wallet.balance-state.eventPrice < 0 && <span>Δεν εχετε αρκετό υπόλοιπο στον λογαριασμό σας</span>}
            <div className="EventPage-PopupComplete-bottom">
                <span className="EventPage-PopupComplete-bottom-recharge" onClick={()=>{
                    navigate("/my-profile")
                }}>Επαναφόρτιση Πορτοφολιού</span>
                <MyButton labelTxt={"Πληρωμή!"} bgColor={"#a8ffaa"} clicked={handleContinue} disabled={!(wallet.balance-state.eventPrice >= 0)} />
            </div>
        </div>
	);
};

export default PopupComplete;