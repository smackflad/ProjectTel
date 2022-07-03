import "./Register.css";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { registerStep1 } from "../../../../store/providerRegisterSlice";

const Register = ({ changeLoadingState }) => {
  const [passVisibility, setPassVisibility] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerStep1(form));
    navigate("/Register2", { replace: true });
  };

  const handleChange = (e) => {
    console.log(form);
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  return (
    <>
      <div className="Register-external">
        <span className="Header-Register">Εγγραφή</span>
        <span className="simple-text">Καλώς ήρθες στην πλατφόρμα μας.</span>
        <span className="simple-text">
          Συμπλήρωσε τα παρακάτω πεδία για να ξεκινήσεις!
        </span>
        <form className="Register-Login-form" onSubmit={handleSubmit}>
          <div className="email-wrap">
            <span className="material-icons-outlined">mail</span>
            <input
              type="email"
              name="email"
              id="email"
              required={true}
              placeholder="Διεύθυνση ηλεκτρονικού ταχυδρομείου"
              value={form.email}
              onChange={handleChange}
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
          <div className="terms">
            <span className="chkTerms">
              <input
                type="checkbox"
                required={true}
                onInvalid={(e) =>
                  e.target.setCustomValidity(
                    "Παρακαλώ αποδεχθείτε τους όρους χρήσης"
                  )
                }
                onInput={(e) => e.target.setCustomValidity("")}
              />
            </span>
            <span className="termsLabel">Αποδέχομαι τους </span>
            <a className="termsLink" target="_blank" href="/terms.pdf">
              Όρους Χρήσης
            </a>
          </div>
          <a className="already-registered" href="/Login">
            Έχεις ήδη λογαριασμό;
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
            Εγγραφή
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
