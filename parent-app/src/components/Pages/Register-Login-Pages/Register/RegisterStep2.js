import "./RegisterStep2.css";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useCompleteParentRegistrationMutation } from "../../../../store/api/authApi";
import { useSelector, useDispatch } from "react-redux";
import { accountInitialized } from "../../../../store/globalSlice";
import { QueryStatus } from "@reduxjs/toolkit/query/react";

const RegisterStep2 = ({ changeLoadingState }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    phone: "",
  });
  let navigate = useNavigate();
  const dispatch = useDispatch();

  const { userId } = useSelector((state) => state.persistedReducer.global);

  const [completeRegistration, { data, isError, isLoading, error, status }] =
    useCompleteParentRegistrationMutation();

  useEffect(() => {
    if (status === QueryStatus.fulfilled) {
      dispatch(accountInitialized(data.userId));
      navigate("/", { replace: true });
    } else if (isError) {
      console.log(error.data.initialized);
      let errToastMessage = "";
      if (error.status === 422) {
        errToastMessage = `Αυτός ο χρήστης χρησιμοποιείται`;
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
    console.log(form);
    completeRegistration({ ...form, id: userId });
  };

  const handleChange = (e) => {
    if (!isLoading) setForm({ ...form, [e.target.id]: e.target.value });
  };

  return (
    <div className="RegisterStep2-external">
      <span className="Header-Register">Σχεδόν έτοιμος</span>
      <span className="simple-text">Ένα ακόμα βήμα πριν την ολοκλήρωση</span>
      <span className="simple-text">
        Συμπλήρωσε τις προσωπικές σας πληροφορίες
      </span>
      <span className="material-icons-outlined personal-datails">person</span>
      <div className="personal-details-fields">
        <form className="RegisterStep2-form" onSubmit={handleSubmit}>
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
          <input
            type="date"
            name="birthDate"
            id="birthDate"
            required={true}
            placeholder="dd-mm-yyyy"
            value={form.birthDate}
            onChange={handleChange}
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "Παρακαλώ συμπληρώστε σωστά την ημερομηνία γέννησης σας."
              )
            }
            onInput={(e) => e.target.setCustomValidity("")}
          ></input>
          <input
            type="tel"
            name="phone"
            id="phone"
            required={true}
            placeholder="Τηλέφωνο"
            pattern="[0-9]{10}"
            value={form.phone}
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "Παρακαλώ συμπληρώστε σωστά το τηλέφωνο σας."
              )
            }
            onInput={(e) => e.target.setCustomValidity("")}
            onChange={handleChange}
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
            Σύνδεση
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterStep2;
