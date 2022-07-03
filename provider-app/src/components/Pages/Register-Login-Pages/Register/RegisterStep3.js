import "./RegisterStep3.css";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useRegisterCompanyMutation } from "../../../../store/api/authApi";
import { useSelector, useDispatch } from "react-redux";
import { QueryStatus } from "@reduxjs/toolkit/query/react";

const RegisterStep3 = ({ changeLoadingState }) => {
  let navigate = useNavigate();
  const dispatch = useDispatch();
  
  const prevInput = useSelector((state) => state.persistedReducer.register);
  const [form, setForm] = useState({
    admin: {
      email: prevInput.admin.email,
      password: prevInput.admin.password,
      firstName: prevInput.admin.firstName,
      lastName: prevInput.admin.lastName,
    },
    name: "",
    taxId: "",
    taxOffice: "",
    email: "",
    phone: "",
    iban: ""
  });

  const [location, setLocation] = useState({
    address: "",
    addressNum: "",
    city: "",
    state: "",
    country: "",
    postalCode: "",
  })


  const [registerCompany, { data, isError, isLoading, error, status }] =
  useRegisterCompanyMutation();

  useEffect(() => {
    if (status === QueryStatus.fulfilled) {
      navigate("/login", { replace: true });
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
    // console.log({ ...form, location: {...location} });
    registerCompany({ ...form, location: {...location} });
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };

  const handleLocationChange = (e) => {
    setLocation({ ...location, [e.target.id]: e.target.value });
  };

  return (
    <div className="RegisterStep3-external">
      <span className="Header-Register">Σχεδόν έτοιμος</span>
      <span className="simple-text">Ένα ακόμα βήμα πριν την ολοκλήρωση</span>
      <span className="simple-text">
        Συμπληρώστε τις πληροφορίες της εταιρίας σας
      </span>
      <div className="personal-details-fields">
        <form className="RegisterStep3-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            id="name"
            required={true}
            placeholder="Όνομα Εταιρίας"
            value={form.name}
            onChange={handleChange}
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "Παρακαλώ συμπληρώστε σωστά το όνομα της εταιρίας που εργάζεστε."
              )
            }
            onInput={(e) => e.target.setCustomValidity("")}
          ></input>
          <input
            type="text"
            name="taxId"
            id="taxId"
            required={true}
            placeholder="taxID"
            value={form.taxId}
            onChange={handleChange}
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "Παρακαλώ συμπληρώστε σωστά το taxID της εταιρίας."
              )
            }
            onInput={(e) => e.target.setCustomValidity("")}
          ></input>
          <input
            type="text"
            name="taxOffice"
            id="taxOffice"
            required={true}
            placeholder="taxOffice"
            value={form.taxOffice}
            onChange={handleChange}
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "Παρακαλώ συμπληρώστε σωστά το taxOffice της εταιρίας."
              )
            }
            onInput={(e) => e.target.setCustomValidity("")}
          ></input>
          <input
              type="email"
              name="email"
              id="email"
              required={true}
              placeholder="Διεύθυνση ηλεκτρονικού ταχυδρομείου της εταιρίας"
              value={form.email}
              onChange={handleChange}
              onInvalid={(e) =>
                e.target.setCustomValidity(
                  "Παρακαλώ συμπληρώστε σωστά το email της εταιρίας σας."
                )
              }
              onInput={(e) => e.target.setCustomValidity("")}
          ></input>
          <input
            type="tel"
            name="phone"
            id="phone"
            required={true}
            placeholder="Τηλέφωνο Επικοινωνίας"
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
          <input
            type="text"
            name="iban"
            id="iban"
            required={true}
            placeholder="Αριθμός IBan"
            value={form.iban}
            onChange={handleChange}
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "Παρακαλώ συμπληρώστε σωστά τον αριθμό IBan."
              )
            }
            onInput={(e) => e.target.setCustomValidity("")}
          ></input>
          {/* <input
            type="text"
            name="location"
            id="location"
            required={true}
            placeholder="location"
            value={form.location}
            onChange={handleChange}
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "Παρακαλώ συμπληρώστε σωστά το taxID της εταιρίας."
              )
            }
            onInput={(e) => e.target.setCustomValidity("")}
          ></input> */}
          <input
            type="text"
            name="address"
            id="address"
            required={true}
            placeholder="Διεύθυνση"
            value={form.address}
            onChange={handleLocationChange}
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "Παρακαλώ συμπληρώστε σωστά την διεύθυνση της εταιρίας."
              )
            }
            onInput={(e) => e.target.setCustomValidity("")}
          ></input>
          <input
            type="text"
            name="addressNum"
            id="addressNum"
            required={true}
            placeholder="Αριθμός Διεύθυνσης"
            value={form.addressNum}
            onChange={handleLocationChange}
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "Παρακαλώ συμπληρώστε σωστά τον αριθμό διεύθυνσης της εταιρίας."
              )
            }
            onInput={(e) => e.target.setCustomValidity("")}
          ></input>
          <input
            type="text"
            name="city"
            id="city"
            required={true}
            placeholder="Περιοχή"
            value={form.city}
            onChange={handleLocationChange}
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "Παρακαλώ συμπληρώστε σωστά την περιοχή της εταιρίας."
              )
            }
            onInput={(e) => e.target.setCustomValidity("")}
          ></input>
          <input
            type="text"
            name="state"
            id="state"
            required={true}
            placeholder="Πολιτεία"
            value={form.state}
            onChange={handleLocationChange}
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "Παρακαλώ συμπληρώστε σωστά την πολιτεία της εταιρίας."
              )
            }
            onInput={(e) => e.target.setCustomValidity("")}
          ></input>
          <input
            type="text"
            name="country"
            id="country"
            required={true}
            placeholder="Χώρα"
            value={form.country}
            onChange={handleLocationChange}
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "Παρακαλώ συμπληρώστε σωστά την χώρα της εταιρίας."
              )
            }
            onInput={(e) => e.target.setCustomValidity("")}
          ></input>
          <input
            type="text"
            name="postalCode"
            id="postalCode"
            required={true}
            placeholder="Ταχυδρομικός Κώδικας"
            pattern="[0-9]{5}"
            value={form.postalCode}
            onChange={handleLocationChange}
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "Παρακαλώ συμπληρώστε σωστά τον ταχυδρομικό κώδικα της εταιρίας."
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
            Εγγραφή
          </button>
        </form>
      </div>
    </div>
  );
};

export default RegisterStep3;
