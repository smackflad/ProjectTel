import "./Login.css";
import { useState } from "react";
import { http } from "../../../../util/http-common";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = ({ loading, setLoading }) => {
  const [passVisibility, setPassVisibility] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setLoading(true);
    http
      .post("/login", { form })
      .then((res) => {
        setLoading(false);
        if (res.status == 200) {
          // alert successfull
        } else if (res.status == 403) {
          toast.warn("Το email ή ο κωδικός σας είναι λάθος. Δοκιμάστε ξανά!", {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          });
          // alert un auth
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
    if (!loading) setForm({ ...form, [e.target.id]: e.target.value });
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
  );
};

export default Login;
