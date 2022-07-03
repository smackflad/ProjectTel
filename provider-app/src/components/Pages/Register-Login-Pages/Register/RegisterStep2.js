import "./RegisterStep2.css";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch } from "react-redux";
import { registerStep2 } from "../../../../store/providerRegisterSlice";


const RegisterStep2 = ({ changeLoadingState }) => {
  const [passVisibility, setPassVisibility] = useState(false);
  const [form, setForm] = useState({ firstName: "", lastName: "" });
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    dispatch(registerStep2(form));
    navigate("/Register3", { replace: true });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };


  return (
    <>
      <div className="Register2-external">
        <span className="Header-Register2">Ποιός/ά είσαι</span>
        <span className="simple-text">
          Δώσε καποίες πληροφορίες για εσένα
        </span>
        <div className="personal-details-fields">
        <form className="RegisterStep3-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="firstName"
            id="firstName"
            required={true}
            placeholder="Όνομα"
            value={form.firstName}
            onChange={handleChange}
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "Παρακαλώ συμπληρώστε σωστά το όνομα σας."
              )
            }
            onInput={(e) => e.target.setCustomValidity("")}
          ></input>
          <input
            type="text"
            name="lastName"
            id="lastName"
            required={true}
            placeholder="Επώνυμο"
            value={form.lastName}
            onChange={handleChange}
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "Παρακαλώ συμπληρώστε σωστά το επώνυμο σας."
              )
            }
            onInput={(e) => e.target.setCustomValidity("")}
          ></input>
          <button
            className="reg-log-submit-button"
            type="submit"
            style={{
              backgroundColor: "#1AABBF",
              color: "#ffffff",
              fontSize: "16px",
            }}
          >
            Επόμενο βήμα
          </button>
        </form>
        </div>
      </div>
    </>
  );
};

export default RegisterStep2;
