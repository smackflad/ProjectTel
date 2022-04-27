import "./NewEventPage.css";
import { Navigate } from "react-router-dom";
import MyTextBox from '../../sharedComponents/MyTextBox/MyTextBox'
import MyTextArea from "../../generalComponents/MyTextArea/MyTextArea";
import { useState } from "react";
import MyButton from "../../generalComponents/MyTextArea/MyButton/MyButton";
const NewEventPage = () => {
	const [file_name, setFile_name] = useState("test");
	const [link, setLink] = useState();
	const [on_change_f, setOn_change_f] = useState();
	const [disabled, setDisabled] = useState();


	return (
		<div className="NewEventPage-external">
			<div className="NewEventPage-internal">
				<h1>New Event</h1>
				<div className="NewEventPage-wrapper">
					<div className="NewEventPage-first">
						<MyTextBox labelTxt={"Event Title"}/>
						<MyTextBox labelTxt={"Price"} width={"50"}/>
					</div>
					<MyTextArea labelTxt={"Description"} />
					<div className="NewEventPage-third">
						<MyTextBox labelTxt={"Date"} width={"200"}/>
						<MyTextBox labelTxt={"Time"} width={"75"}/>
						<MyTextBox labelTxt={"Location"}/>
					</div>
					<div className="NewEventPage-fourth">
						<div className="NewEventPage-fourth-left-FC">
							{/* {file_name && (<span className="fileName-FC"><a href={link} target="_blank">{file_name}</a></span>)} */}
							<div className="NewEventPage-file-FC">
								<input type="file" accept='image/*, application/pdf' onChange={on_change_f} id="NewEventPage-file-btn-FC" hidden disabled={disabled}></input>
								<label htmlFor="NewEventPage-file-btn-FC" className={(disabled ?' NewEventPage-disabled-file-input' : '')}>
									<i className={"material-icons-outlined NewEventPage-upload-icon"}> file_upload </i>
									<span>Επιλογή αρχείου</span>
								</label>
							</div>
						</div>
						<div className="NewEventPage-fourth-right">
							
						</div>
					</div>
					<div className="NewEventPage-fifth">
						<MyButton labelTxt={"Save/Edit"} />
					</div>
				</div>
			</div>
		</div>
	);
};

export default NewEventPage;