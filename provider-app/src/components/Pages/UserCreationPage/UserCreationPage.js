import "./UserCreationPage.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { QueryStatus } from "@reduxjs/toolkit/query/react";
import { useNavigate } from "react-router-dom";

const UserCreationPage = ({ changeLoadingState }) => {

  const [passVisibility, setPassVisibility] = useState(false);

  const [form, setForm] = useState({ firstName: "", lastName: "", password: "",passwordVer: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };


  return (
    <div className="UserCreationPage-external">
      <div className="container-selection">

        <h1>Εισαγωγή Νέου Χρήστη</h1>
        <form className="New-User-form" >
        <input
          className="UserCreationPage-inputs"
          type="text"
          placeholder="Όνομα"
          id="firstName"
          value={form.firstName}
             onChange={handleChange}
          required
          onInput={(e) => e.target.setCustomValidity("")}
        ></input>
        <input
          className="UserCreationPage-inputs"
          type="text"
          placeholder="Επίθετο"
          id="lastName"
          value={form.lastName}
          onChange={handleChange}
          required
          onInput={(e) => e.target.setCustomValidity("")}
        ></input>


        <input className="UserCreationPage-inputs"
          type="text"
          id="Role"
          name="Role"
          placeholder="Ρόλος"
          required
          list="roles" 
          value={form.Role}
          onChange={handleChange}
          onInput={(e) => e.target.setCustomValidity("")}
          />
        <datalist id="roles">
          <option value="companyAdmin">Χρήστης Διαχείρισης</option>
          <option value="companySupport">Χρήστης Υποστήριξης</option>
        </datalist>


       
        <div className="password-wrap">
          
            <input
              type={passVisibility ? "text" : "password"}
              id="password"
              name="password"
              required
              placeholder="Κωδικός πρόσβασης"
              value={form.password}
              onChange={handleChange}
              onInvalid={(e) =>
                e.target.setCustomValidity(
                  "Παρακαλώ συμπληρώστε σωστά τον κωδικό σας."
                )
              }
              onInput={(e) => e.target.setCustomValidity("")}
            ></input>
            <span
              className="material-icons-outlined show-icon"
              onClick={(e) => setPassVisibility(!passVisibility)}
            >
              {passVisibility ? "visibility" : "visibility_off"}
            </span>
          </div>
        
          <div className="password-wrap">
           
            <input
              type={passVisibility ? "text" : "passwordVer"}
              id="passwordVer"
              name="passwordVer"
              required
              placeholder="Επανάληψη Κωδικού πρόσβασης"
              value={form.passwordVer}
              onChange={handleChange}
              onInvalid={(e) =>
                e.target.setCustomValidity(
                  "Παρακαλώ συμπληρώστε σωστά τον κωδικό σας."
                )
              }
              onInput={(e) => e.target.setCustomValidity("")}
            ></input>
            <span
              className="material-icons-outlined show-icon"
              onClick={(e) => setPassVisibility(!passVisibility)}
            >
              {passVisibility ? "visibility" : "visibility_off"}
            </span>
          </div>
        <button
          className="UserCreationPage-inputs"
          type="submit"
          style={{
            backgroundColor: "#1AABBF",
            color: "#ffffff",
            fontSize: "16px",
          }}
        >
          Δημιουργία Χρήστη
        </button>



</form>

      </div>
    </div>


  );
};

export default UserCreationPage;
