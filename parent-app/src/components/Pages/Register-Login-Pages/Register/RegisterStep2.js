import "./RegisterStep2.css";
import { useState } from "react";
import { http } from "../../../../util/http-common";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RegisterStep2 = ({ loading, setLoading }) => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    birthDate: "",
    phone: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
    setLoading(true);
    http
      .post("/register-step-2", { form })
      .then((res) => {
        setLoading(false);
        if (res.status == 201) {
          // alert successfull
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
                "Παρακαλώ συμπληρώστε σωστά την ημ. γέννησής σας."
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
            onChange={handleChange}
            onInvalid={(e) =>
              e.target.setCustomValidity(
                "Παρακαλώ συμπληρώστε σωστά το τηλέφωνό σας σας."
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
            Σύνδεση
          </button>
        </form>
      </div>
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

export default RegisterStep2;
