import "./Login.css";
import { useState, useEffect } from "react";
import { http } from "../../../../util/http-common";
import { toast } from "react-toastify";
import { QueryStatus } from "@reduxjs/toolkit/query/react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../../../store/globalSlice";
import { useLoginEmployeeMutation } from "../../../../store/api/authApi";

const Login = ({ changeLoadingState }) => {
  const [passVisibility, setPassVisibility] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  let navigate = useNavigate();
  const dispatch = useDispatch();

  const [loginEmployee, { data, isError, isLoading, error, status }] =
    useLoginEmployeeMutation();

    // changeLoadingState(isLoading);
    useEffect(() => {
    if (status === QueryStatus.fulfilled) {
      dispatch(login(data));
      navigate("/", { replace: true });
    } else if (isError) {
      console.log(error.data.initialized);
      let errToastMessage = "";
      if (error.status === 401) {
        errToastMessage = `Δώσατε λάθος στοιχεία`;
      } else if (error.status === 400) {
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
  }, [dispatch, status, error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginEmployee(form);
  };

  const handleChange = (e) => {
    if (!isLoading) setForm({ ...form, [e.target.id]: e.target.value });
  };

  return (
    <div className="Login-external">
      <span className="Header-Register">Σύνδεση</span>
      <span className="simple-text">Καλώς ήρθες στην πλατφόρμα μας.</span>
      <span className="simple-text">
        Συμπλήρωσε τα παρακάτω πεδία για να συνδεθείς!
      </span>
      <form className="Register-Login-form" onSubmit={handleSubmit}>
        <div className="email-wrap">
          <span className="material-icons-outlined">mail</span>
          <input
            type="email"
            name="email"
            id="email"
            required={true}
            value={form.email}
            onChange={handleChange}
            placeholder="Διεύθυνση ηλεκτρονικού ταχυδρομείου"
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "Παρακαλώ συμπληρώστε σωστά το email σας."
              )
            }
            onInput={(e) => e.target.setCustomValidity("")}
          ></input>
        </div>
        <div className="password-wrap">
          <span className="material-icons-outlined">lock</span>
          <input
            type={passVisibility ? "text" : "password"}
            id="password"
            name="password"
            required={true}
            value={form.password}
            onChange={handleChange}
            placeholder="Κωδικός πρόσβασης"
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
        <a className="already-registered" href="/Register">
          Δεν έχεις λογαριασμό;
        </a>
        <button
          className="reg-log-submit-button"
          type="submit"
          style={{
            backgroundColor: "#1AABBF",
            color: "#ffffff",
            fontSize: "16px",
          }}
        >
          Σύνδεση
        </button>
      </form>
    </div>
  );
};

export default Login;
