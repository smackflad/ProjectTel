import './MyTextBox.css';
import { useState } from "react";

const MyTextBox = ({type="text", labelTxt, val, setVal, validate=()=>{}, error, setError, star=false, disabled=false, width="330"}) => 
{
	const [id] = useState(() => `component-${Math.random().toString(16).slice(2)}`);
    validate(val, setError);
    return (
		<div className="myTextBox-txt-external">
            <div className={'myTextBox-txt-internal'+(error ? ' myTextBox-error_internal_txt' : '')}>
                <div className="myTextBox-txt-top">
                   <span>{star && (<span id="star">*</span>)}<label htmlFor={id}>{labelTxt}</label></span>
                </div>
                <input type={type} style={{width:width+"px"}} id={id} onChange={(e)=>{setVal(e.target.value);if(validate){validate(e.target.value, setError)}}} value={val} disabled={disabled}/>
                <span className={'myTextBox-error_span_txt'+(error ? ' myTextBox-error_msg_txt' : '')}>*{error}</span>
            </div>
        </div>
	);
};

export default MyTextBox;

{/*
You need to import MyTextBox
const [email, setEmail] = useState("test"); //useState is used to make it updatable, this is used in react. (import: import { useEffect, useState } from "react";)
const [errorEmail, setErrorEmail] = useState("");
<MyTextBox 
    type="text" //(optional) type of input tag(text, pass etc)
    labelTxt="Email Address"
    val={email} //value
    setVal={setEmail} //change the value
    validate={(value, setError) => { //(optional) sets error message based on the specific function, arguments must be as follows
        var validRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (value.match(validRegex)) {
            setError("");
        } else {
            setError("You have entered an invalid email address!")
        }
    }}
    error={errorEmail} //error message
    setError={setErrorEmail} //change the error message
    star={false} //(optional) make it mandatory
    disabled={false} //(optional) disable the textbox
    width="330" //(optional) change the size of the text box to a fixed size
/>
*/}