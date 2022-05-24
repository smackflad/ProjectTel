import "./EventPage.css";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MyButton from "../../SharedComponents/MyButton/MyButton";
import Popup from "./components/Popup/Popup";

const EventPage = () => {	
	const [startDate, setStartDate] = useState(new Date());
	const [isOpen, setIsOpen] = useState(false);
	const togglePopup = () => {
		setIsOpen(!isOpen);
		if(isOpen){
			document.body.style.overflow = 'unset';
		}else{
			document.body.style.overflow = 'hidden';
		}
	  }
	return (
		<div className="EventPage-external">
			<div className="EventPage-top">
				<div className="EventPage-top-left">
					<div className="EventPage-top-left-image">
						
					</div>
					<div className="EventPage-top-left-image-select">
						<div className="EventPage-top-left-image-inside">
							
						</div>
						<div className="EventPage-top-left-image-inside">
							
						</div>
						<div className="EventPage-top-left-image-inside">
							
						</div>
					</div>
				</div>
				<div className="EventPage-top-right">
					<div className="EventPage-top-right-txt">
						<span className="EventPage-title">ΤΟ ΜΙΝΟΡΕ</span>
						<span className="EventPage-location">
							<span className="material-icons-outlined">
								location_on
							</span>
							Δημοτικό Θέατρο
						</span>
					</div>
					<DatePicker
					selected={startDate}
					onChange={(date) => setStartDate(date)}
					monthsShown={2}
					inline
					/>
					<div className="EventPage-top-right-btns">
						<span className="EventPage-top-right-btns-price">from <span className="EventPage-top-right-btns-price-num">10€</span></span>
						<MyButton labelTxt={"Save/Edit"} bgColor={"#a8ffaa"} clicked={togglePopup}/>
					</div>
				</div>
			</div>
			<div className="EventPage-bot">
				<div className="EventPage-bot-desc">
					<span className="EventPage-bot-title">Description</span>
					<span className="EventPage-bot-txt">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
				</div>
				<div className="EventPage-bot-map">
					<span className="EventPage-bot-title">Map</span>
					<iframe width="100%" height="350" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://www.openstreetmap.org/export/embed.html?bbox=23.720753788948063%2C37.97448116251526%2C23.729712367057804%2C37.97838413928298&amp;layer=mapnik" style={{border: "1px solid black"}}></iframe>
				</div>
			</div>
			{isOpen && <Popup
			handleClose={togglePopup}
			/>}
		</div>	
	);
};

export default EventPage;