import './RegisterStep2.css';
import { useState } from "react";

const RegisterStep2 = () => 
{
    return (
		<div className="RegisterStep2-external">
      <span className='Header-Register'>Σχεδόν έτοιμος</span>
      <span className='simple-text'>Ένα ακόμα βήμα πριν την ολοκλήρωση</span>
      <span className='simple-text'>Συμπλήρωσε τις προσωπικές σας πληροφορίες</span>
      <span class="material-icons-outlined personal-datails">
        person
      </span>
      <div className='personal-details-fiels'>
      <form action="/action_page.php">
        <input type="text" name='Fname' id='Fname' placeholder='Όνομα'></input>
        <input type="text" name='Lname' id='Lname' placeholder='Επώνυμο'></input>
        <input type="date" name='BirthDate' id='BirthDate' placeholder="dd-mm-yyyy"></input>
        <input type="tel" name='phone' id='phone' placeholder='Τηλέφωνο' pattern='[0-9]'></input>
        <input type="submit" ></input>
        </form>
      </div>
    </div>
	);
};

export default RegisterStep2;