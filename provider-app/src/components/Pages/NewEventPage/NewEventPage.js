import "./NewEventPage.css";
import { Navigate } from "react-router-dom";
import MyTextBox from '../../sharedComponents/MyTextBox/MyTextBox'
import MyTextArea from "../../generalComponents/MyTextArea/MyTextArea";
import { useEffect, useState } from "react";
import DatePicker, { DateObject } from "react-multi-date-picker";
import '../../sharedComponents/MyTextBox/MyTextBox.css'
import TimePicker from "react-multi-date-picker/plugins/time_picker";
import DatePanel from "react-multi-date-picker/plugins/date_panel";
import { useNewEventCompanyMutation } from "../../../store/api/newEventApi";

const NewEventPage = () => {
	const [link, setLink] = useState();
	const [disabled, setDisabled] = useState();
	const [form, setForm] = useState({
		title: "",
		price: "",
		desc: "",		
	});

	const [location, setLocation] = useState({
		address: "",
		addressNum: "",
		city: "",
		state: "",
		country: "",
		postalCode: "",
	})

	const [values, setValues] = useState(new DateObject());

	const [filesFinale, setfilesFinale] = useState([]);

	const [selectedFiles, setselectedFiles] = useState([]);
	const [tempImgs, settempImgs] = useState([]);
	const handleFileChange = (e)=>{
		// console.log("Test")
		setselectedFiles(e.target.files);
		settempImgs([]);
		Array.from(e.target.files).forEach(item=>{
			settempImgs(tempImgs => [...tempImgs, URL.createObjectURL(item)]);
		})
		setfilesFinale([...e.target.files]);
	}

	const [newEventCompany, { data, isError, isLoading, error, status }] =
		useNewEventCompanyMutation();

	const handleChange = (e) => {
		if (!isLoading) setForm({ ...form, [e.target.id]: e.target.value });
	};
	
	const handleLocationChange = (e) => {
		setLocation({ ...location, [e.target.id]: e.target.value });
		// if (!isLoading) setForm({ ...form, [e.target.id]: e.target.value });
	};

	// useEffect(() => {
	// 	console.log(selectedFiles);
	// }, [selectedFiles]);

	const handleImgDelClick = (i) =>{
		// setselectedFiles([]);
		// console.log(i);
		// settempImgs(tempImgs => [...tempImgs.splice(index, 1)]);
		settempImgs((tempImgs) => tempImgs.filter((_, index) => index !== i));
		setfilesFinale((filesFinale) => filesFinale.filter((_, index) => index !== i));
		// var temp = selectedFiles.filter((_, index) => index !== i);
	}

	function CustomDate({id="", type="text", labelTxt, star=false, disabled=false, width="330px", openCalendar, value, handleValueChange }) {
		return (
		<div className="myTextBox-txt-external"
			style={{width:width}}>
				<div className={'myTextBox-txt-internal'}>
					<div className="myTextBox-txt-top">
						<span>{star && (<span id="star">*</span>)}<label htmlFor={id}>{labelTxt}</label></span>
					</div>
					<input 
						type={type}
						 
						id={id} 
						onFocus={openCalendar}
						onChange={handleValueChange} 
						value={value} 
						disabled={disabled}/>
				</div>
			</div>
		)
	  }

	  const handleSubmit = (e) => {
		e.preventDefault();
		console.log(tempImgs);
		console.log({...form, location: {...location}});
		// newEventCompany({ ...form, id: userId });
	};


	return (
		<div className="NewEventPage-external">
			<div className="NewEventPage-internal">
				<h1>New Event</h1>
				<form onSubmit={handleSubmit}>
					<div className="NewEventPage-wrapper">
						<div className="NewEventPage-first">
							<MyTextBox id="title" setVal={handleChange} labelTxt={"Event Title"} width={"100%"}/>
							<MyTextBox id="price" setVal={handleChange} labelTxt={"Price"} width={"50px"}/>
						</div>
						 <MyTextArea id="desc" setVal={handleChange}  labelTxt={"Description"} />
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
								render={<CustomDate id="date" labelTxt={"Date"} width={"100%"} />}
							/>
						</div>
						<div className="NewEventPage-fourth">
							<div className="NewEventPage-fourth-top">
								<MyTextBox id="address" setVal={handleLocationChange} labelTxt={"Οδός"} width={"50%"} />
								<MyTextBox id="addressNum" setVal={handleLocationChange} type="number" labelTxt={"Αριθμός Οδού"} width={"83px"}/>
							</div>
							<div className="NewEventPage-fourth-mid">
								<MyTextBox id="city" setVal={handleLocationChange} labelTxt={"Πόλη"} width={"50%"}/>
								<MyTextBox id="postalCode" setVal={handleLocationChange} type="tel" labelTxt={"Τ.Κ."} width={"83px"} pattern="[0-9]{5}"/>
							</div>
							<div className="NewEventPage-fourth-bot">
								<MyTextBox id="state" setVal={handleLocationChange} labelTxt={"Νομός"} width={"50%"}/>
								<MyTextBox id="country" setVal={handleLocationChange} labelTxt={"Χώρα"} width={"50%"}/>
							</div>
						</div>
						<div className="NewEventPage-fifth">
							<div className="NewEventPage-fifth-left-FC">
								<div className="NewEventPage-file-FC">
									<input type="file" multiple accept='image/*' onChange={handleFileChange} id="NewEventPage-file-btn-FC" onClick={(e)=>{e.target.value=null}} hidden disabled={disabled}></input>
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