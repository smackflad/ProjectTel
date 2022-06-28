import "./NewEventPage.css";
import { Navigate } from "react-router-dom";
import MyTextBox from '../../sharedComponents/MyTextBox/MyTextBox'
import MyTextArea from "../../generalComponents/MyTextArea/MyTextArea";
import { useEffect, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import MyButton from "../../generalComponents/MyButton/MyButton";
import '../../sharedComponents/MyTextBox/MyTextBox.css'
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
const NewEventPage = () => {
	const [link, setLink] = useState();
	const [disabled, setDisabled] = useState();

	const [values, setValues] = useState(new DateObject());

	const [selectedFiles, setselectedFiles] = useState([]);
	const [tempImgs, settempImgs] = useState([]);
	const handleFileChange = (e)=>{
		setselectedFiles(e.target.files);
		settempImgs([]);
		Array.from(e.target.files).forEach(item=>{
			settempImgs(tempImgs => [...tempImgs, URL.createObjectURL(item)]);
		})
	}

	useEffect(() => {
		console.log(selectedFiles);
	}, [selectedFiles]);

	const handleImgDelClick = (i) =>{
		console.log(i);
		// settempImgs(tempImgs => [...tempImgs.splice(index, 1)]);
		settempImgs((tempImgs) => tempImgs.filter((_, index) => index !== i));
		// setselectedFiles((selectedFiles) => selectedFiles.filter((_, index) => index !== i));
		
	}

	function CustomDate({id="", type="text", labelTxt, star=false, disabled=false, width="330", openCalendar, value, handleValueChange }) {
		return (
		<div className="myTextBox-txt-external">
				<div className={'myTextBox-txt-internal'}>
					<div className="myTextBox-txt-top">
						<span>{star && (<span id="star">*</span>)}<label htmlFor={id}>{labelTxt}</label></span>
					</div>
					<input 
						type={type}
						style={{width:width+"px"}} 
						id={id} 
						onFocus={openCalendar}
						onChange={handleValueChange} 
						value={value} 
						disabled={disabled}/>
				</div>
			</div>
		)
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
							<DatePicker
								value={values} 
								onChange={setValues}
								format="DD/MM HH:mm"
								multiple
								plugins={[
									<TimePicker position="bottom" hideSeconds={true}/>,
									<DatePanel markFocused />
								]}
								render={<CustomDate id="date" labelTxt={"Date"} />}
							/>
						</div>
						<div className="NewEventPage-fourth">
							<div className="NewEventPage-fourth-top">
								<MyTextBox id="address" labelTxt={"Οδός"}/>
								<MyTextBox id="addressNum" type="number" labelTxt={"Αριθμός Οδού"} width={"70"}/>
							</div>
							<div className="NewEventPage-fourth-mid">
								<MyTextBox id="city" labelTxt={"Πόλη"}/>
								<MyTextBox id="postalCode" type="tel" labelTxt={"Τ.Κ."} width={"70"} pattern="[0-9]{5}"/>
							</div>
							<div className="NewEventPage-fourth-bot">
								<MyTextBox id="state" labelTxt={"Νομός"}/>
								<MyTextBox id="country" labelTxt={"Χώρα"}/>
							</div>
						</div>
						<div className="NewEventPage-fifth">
							<div className="NewEventPage-fifth-left-FC">
								{/* {file_name && (<span className="fileName-FC"><a href={link} target="_blank">{file_name}</a></span>)} */}
								<div className="NewEventPage-file-FC">
									<input type="file" multiple accept='image/*' onChange={handleFileChange} id="NewEventPage-file-btn-FC" hidden disabled={disabled}></input>
									<label htmlFor="NewEventPage-file-btn-FC" className={(disabled ?' NewEventPage-disabled-file-input' : '')}>
										<i className={"material-icons-outlined NewEventPage-upload-icon"}> file_upload </i>
										<span>Επιλογή αρχείου</span>
									</label>
								</div>
							</div>
							<div className="NewEventPage-fifth-right">
								{
									tempImgs.map((item, index)=>(//TODO fix key
										<div className="NewEventPage-fifth-right-imgs" key={index}>
											<img className="NewEventPage-fifth-right-img" src={item}/>
											<span className="material-symbols-outlined NewEventPage-fifth-right-img-close" onClick={()=>{handleImgDelClick(index)}}>
												close
											</span>
										</div>
									))
								}
							</div>
						</div>
						<div className="NewEventPage-sixth">
							<button
								// className="reg-log-submit-button"
								className="NewEventPage-sixth-button"
								type="submit"
								style={{
								backgroundColor: "#fafafa",
								color: "#000000",
								fontSize: "16px",
								}}
							>
								Save/Edit
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default NewEventPage;