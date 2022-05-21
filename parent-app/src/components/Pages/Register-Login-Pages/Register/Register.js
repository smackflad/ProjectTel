import './Register.css';
import { useState } from "react";

const Register = () => 
{
    return (
		<div className="Register-external">
      <span className='Header-Register'>Εγγραφή</span>
      <span className='simple-text'>Καλώς ήρθες στην πλατφόρμα μας.</span>
      <span className='simple-text'>Συμπλήρωσε τα παρακάτω πεδία για να ξεκινήσεις!</span>
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
      <div className='terms'>
        <span className='chkTerms'>
          <input type='checkbox'/>
        </span>
        <span className='termsLabel'>Αποδέχομαι τους </span>
        <a className='termsLink' href='/'>Όρους Χρήσης</a>       
      </div>
      <a className='already-registered' href='/Login'>Έχεις ήδη λογαριασμό;</a>
    </div>
	);
};

export default Register;