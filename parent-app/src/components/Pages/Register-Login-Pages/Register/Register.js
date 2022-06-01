import "./Register.css";
import { useState } from "react";
import { http } from "../../../../util/http-common";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Register = ({ loading, setLoading }) => {
  const [passVisibility, setPassVisibility] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setLoading(true);
    http
      .post("/register", { form })
      .then((res) => {
        setLoading(false);
        if (res.status == 201) {
          // alert successfull
        } else if (res.status == 409) {
          // alert email is taken
        }
      })
      .catch((err) => {
        toast.error(`Error message: ${err.message}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setLoading(false);
        //alert server error
      });
  };

  const handleChange = (e) => {
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
                    "Παρακαλώ αποδεχτείτε τους όρους χρήσης."
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
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    </>
  );
};

export default Register;
