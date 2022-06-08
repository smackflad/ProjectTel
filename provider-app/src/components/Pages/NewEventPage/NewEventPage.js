import "./NewEventPage.css";
import { Navigate } from "react-router-dom";
import MyTextBox from '../../sharedComponents/MyTextBox/MyTextBox'
import MyTextArea from "../../generalComponents/MyTextArea/MyTextArea";
import { useState } from "react";
import MyButton from "../../generalComponents/MyButton/MyButton";
const NewEventPage = () => {
	const [link, setLink] = useState();
	const [disabled, setDisabled] = useState();
	const [selectedFiles, setselectedFiles] = useState([]);
	const [tempImgs, settempImgs] = useState([]);
	const handleFileChange = (e)=>{
		setselectedFiles(e.target.files);
		settempImgs([]);
		Array.from(e.target.files).forEach(item=>{
			settempImgs(tempImgs => [...tempImgs, URL.createObjectURL(item)]);
		})
	}

	return (
		<div className="NewEventPage-external">
			<div className="NewEventPage-internal">
				<h1>New Event</h1>
				<form>
					<div className="NewEventPage-wrapper">
						<div className="NewEventPage-first">
							<MyTextBox id="title" labelTxt={"Event Title"}/>
							<MyTextBox id="price" labelTxt={"Price"} width={"50"}/>
						</div>
						<MyTextArea id="desc" labelTxt={"Description"} />
						<div className="NewEventPage-third">
							<MyTextBox id="date" labelTxt={"Date"} width={"200"}/>
							<MyTextBox id="time" labelTxt={"Time"} width={"75"}/>
							<MyTextBox id="location" labelTxt={"Location"}/>
						</div>
						<div className="NewEventPage-fourth">
							<div className="NewEventPage-fourth-left-FC">
								{/* {file_name && (<span className="fileName-FC"><a href={link} target="_blank">{file_name}</a></span>)} */}
								<div className="NewEventPage-file-FC">
									<input type="file" id="images" multiple accept='image/*' onChange={handleFileChange} id="NewEventPage-file-btn-FC" hidden disabled={disabled}></input>
									<label htmlFor="NewEventPage-file-btn-FC" className={(disabled ?' NewEventPage-disabled-file-input' : '')}>
										<i className={"material-icons-outlined NewEventPage-upload-icon"}> file_upload </i>
										<span>Επιλογή αρχείου</span>
									</label>
								</div>
							</div>
							<div className="NewEventPage-fourth-right">
								{
									tempImgs.map((item, index)=>(//TODO fix key
										<img className="NewEventPage-fourth-right-imgs" src={item} key={index}/>
									))
								}
							</div>
						</div>
						<div className="NewEventPage-fifth">
							<MyButton labelTxt={"Save/Edit"} />
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default NewEventPage;