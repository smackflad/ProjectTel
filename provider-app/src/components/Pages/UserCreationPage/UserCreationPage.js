import "./UserCreationPage.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import {useCreateUserMutation } from "../../../store/api/createUserApi";
import { QueryStatus } from "@reduxjs/toolkit/query/react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const UserCreationPage = ({ changeLoadingState }) => {

  const [passVisibility, setPassVisibility] = useState(false);
  
  const { userId, companyId } = useSelector((state) => state.persistedReducer.global);

  const [user, setUser] = useState({ firstName: "", lastName: "", email: "", password: ""});
  const [form, setForm] = useState("");

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [createUser, { data, isError, isLoading, error, status }] =
  useCreateUserMutation();


  const loggedin = useSelector(
    (state) => state.persistedReducer.global.isLoggedIn
  );
  useEffect(() => {
    if (!loggedin) {
      navigate("/");
    }
  }, [loggedin]);


  useEffect(() => {
    if(status === QueryStatus.uninitialized){
      
    }else if(status === QueryStatus.fulfilled){
      toast.success("Ο χρήστης δημιουργήθηκε επιτυχώς", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setForm("");
      setUser({ firstName: "", lastName: "", email: "", password: ""});
    }else if (isError) {
      console.log(error.data);
      let errToastMessage = "";
      if (error.status === 400) {
        errToastMessage = `ERROR: 400 BAD REQUEST`;
      } else if (error.status === 500) {
        errToastMessage = `ERROR: 500 INTERNAL SERVER ERROR`;
      }
      if (errToastMessage !== "")
        toast.error(errToastMessage, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
    }
  }, [data, isError, isLoading, error, status]);



  const [passVer, setPassVer] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    if(passVer === user.password){
      // console.log({role: form, user:{...user}, companyId: companyId})
      // console.log({user:{...user}, ...form, companyId: companyId});
      createUser({role: form, user:{...user}, companyId: companyId});
    }else{
      toast.error("Οι κωδικοί δεν ταιριάζουν", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  const handleChangeUser = (e) => {
    setUser({ ...user, [e.target.id]: e.target.value });
  };


  return (
    <div className="UserCreationPage-external">
      <div className="container-selection">

        <h1>Εισαγωγή Νέου Χρήστη</h1>
        <form className="New-User-form" onSubmit={handleSubmit}>
        <input
          className="UserCreationPage-inputs"
          type="text"
          placeholder="Όνομα"
          id="firstName"
          value={user.firstName}
             onChange={handleChangeUser}
          required
          onInput={(e) => e.target.setCustomValidity("")}
        ></input>
        <input
          className="UserCreationPage-inputs"
          type="text"
          placeholder="Επίθετο"
          id="lastName"
          value={user.lastName}
          onChange={handleChangeUser}
          required
          onInput={(e) => e.target.setCustomValidity("")}
        ></input>
        <input
          className="UserCreationPage-inputs"
          type="text"
          placeholder="Email"
          id="email"
          value={user.email}
          onChange={handleChangeUser}
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
          value={form.role}
          onChange={(e)=>{console.log(e.target);setForm(e.target.value)}}
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
              value={user.password}
              onChange={handleChangeUser}
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
           
        <input className="password-wrap-inputs"
           
              type={passVisibility ? "text" : "passwordVer"}
              id="passwordVer"
              name="passwordVer"
              required
              placeholder="Επανάληψη Κωδικού πρόσβασης"
              value={passVer}
              onChange={(e)=>{setPassVer(e.target.value)}}
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
