import './Login.css';
import { useState } from "react";
import MyButton from "../../../SharedComponents/MyButton/MyButton"
const Login = () => 
{
    return (
		<div className="Login-external">
      <span className='Header-Register'>Σύνδεση</span>
      <span className='simple-text'>Καλώς ήρθες στην πλατφόρμα μας.</span>
      <span className='simple-text'>Συμπλήρωσε τα παρακάτω πεδία για να συνδεθείς!</span>
      <div className='email-wrap'>
        <span class="material-icons-outlined">
          mail
        </span>
        <input type="email" name='email' id='email' placeholder='Διεύθυνση ηλεκτρονικού ταχυδρομείου'></input>
      </div>
      <div className='password-wrap'>
        <span class="material-icons-outlined">
          lock
        </span>
        <input type="password" id='password' name='password' placeholder='Κωδικός πρόσβασης'></input>
      </div>
      <a className='already-registered' href='/Register'>Δεν έχεις λογαριασμό;</a>
      <div className='reg-log-submit-button'>
        <MyButton labelTxt='Σύνδεση' bgColor='#1AABBF' ftColor='#ffffff'/>
      </div>
    </div>
	);
};

export default Login;