import "./EventPage.css";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import MyButton from "../../SharedComponents/MyButton/MyButton";

const EventPage = () => {	
	const [startDate, setStartDate] = useState(new Date());
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
						<span className="EventPage-top-right-btns-price">price <span className="EventPage-top-right-btns-price-num">10€</span></span>
						<MyButton labelTxt={"Save/Edit"} bgColor={"#a8ffaa"} />
					</div>
				</div>
			</div>
			<div className="EventPage-bot">
				<span>Description</span>
				<span>Map</span>
			</div>
		</div>	
	);
};

export default EventPage;