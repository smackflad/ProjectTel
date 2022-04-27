import "./NewEventPage.css";
import { Navigate } from "react-router-dom";
import MyTextBox from '../../sharedComponents/MyTextBox/MyTextBox'
import MyTextArea from "../../generalComponents/MyTextArea/MyTextArea";

const NewEventPage = () => {
	return (
		<div className="NewEventPage-external">
			<div className="NewEventPage-internal">
				<h1>New Event</h1>
				<div className="NewEventPage-wrapper">
					<div className="NewEventPage-first">
						<MyTextBox labelTxt={"Event Title"}/>
						<MyTextBox labelTxt={"Price"} width={"50"}/>
					</div>
					<MyTextArea />
					<div className="NewEventPage-third">
						<MyTextBox labelTxt={"Date"} width={"200"}/>
						<MyTextBox labelTxt={"Time"} width={"75"}/>
						<MyTextBox labelTxt={"Location"}/>
					</div>
					<div className="NewEventPage-fourth">

					</div>
					<div className="NewEventPage-fifth">
						<button>Save/Edit</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewEventPage;