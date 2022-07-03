import "./providerProfilePage.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { useGetProfileMutation } from "../../../store/api/providerApi";
import { useGetEmployeeMutation } from "../../../store/api/providerApi";//TODO
import { QueryStatus } from "@reduxjs/toolkit/query/react";
import { toast } from "react-toastify";
import CircleLoader from "react-spinners/CircleLoader";
import {useResetPasswordMutation} from "../../../store/api/authApi";//TODO

const ProviderProfilePage = () => {

  const [passVisibility, setPassVisibility] = useState(false);
  const companyId = useSelector((state) => state.persistedReducer.global.companyId);
  const id = useSelector((state) => state.persistedReducer.global.userId);

  const [getProfile, { data, status, isLoading }] = useGetProfileMutation();
  const [getEmployee, { data: dataE, status: statusE, isLoading: isLoadingE }] = useGetEmployeeMutation();
  
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    newPassword2: "",
  });
  
  useEffect(() => {
    if (statusE === QueryStatus.uninitialized) {
      getEmployee(id);
    }
  }, [statusE]);

  useEffect(() => {
    if (status === QueryStatus.uninitialized) {
      getProfile(companyId);
    }
  }, [companyId, status]);
  
  const [resetPassword, { data: dataR, isError: isErrorR, isLoading: isLoadingR, error: errorR, status: statusR }] = useResetPasswordMutation();
  
  useEffect(() => {
    if (statusR === QueryStatus.fulfilled) {
      console.log(dataR);
      toast.success("Ο κωδικός σας άλλαξε επιτυχώς", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setForm({
        oldPassword: "",
        newPassword: "",
        newPassword2: "",
      });
    } else if (isErrorR) {
      let errToastMessage = "";
      if (errorR.status === 401) {
        errToastMessage = `Δώσατε λάθος στοιχεία`;
      } else if (errorR.status === 400) {
        errToastMessage = `ERROR: 400 BAD REQUEST`;
      } else if (errorR.status === 500) {
        errToastMessage = `ERROR: 500 INTERNAL SERVER ERROR`;
      }
        console.log(errToastMessage)
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
  }, [statusR, errorR, isErrorR]);

  if (isLoading || status === QueryStatus.uninitialized || isLoadingE || statusE === QueryStatus.uninitialized) {
    return (
      <div className="Account-external">
        <CircleLoader />
      </div>
    );
  }
  const handleSubmitPass = (e) => {
    e.preventDefault();
    if (form.newPassword !== form.newPassword2) {
      toast.error("Οι νέοι κωδικοί δεν είναι ίδιοι", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setForm({
        oldPassword: "",
        newPassword: "",
        newPassword2: "",
      });
      return;
    }else{
      resetPassword({
        email: data.email,
        oldPassword: form.oldPassword,
        newPassword: form.newPassword,
        id: id,
      });
    }

  };

  const handleChange = (e) => {
    if (!isLoading) setForm({ ...form, [e.target.id]: e.target.value });
  };
  return (
    <div className="ProviderProfilePage-external">
      <div className="container-selection">
        <div className="ProviderProfilePage-info">
          <h4>Πληροφορίες Εταιρικού Λογαριασμού</h4>

          <input
            className="ProviderProfilePage-inputs"
            type="text"
            placeholder="firstname"
            // value={dataE.firstName}
            disabled
          ></input>

          <input
            className="ProviderProfilePage-inputs"
            type="text"

            placeholder="lastName"
            // value={dataE.lastName}
            disabled
          ></input>

          <input
            className="ProviderProfilePage-inputs"
            type="text"
            placeholder="AdminEmail"
            // value={dataE.email}
            disabled
          ></input>

          <input
            className="ProviderProfilePage-inputs"
            type="text"
            placeholder="companyName"
            value={data.name}
            disabled
          ></input>

          <input
            className="ProviderProfilePage-inputs"
            type="text"
            placeholder="taxOffice"
            value={data.taxOffice}
            disabled
          ></input>

          <input
            className="ProviderProfilePage-inputs"
            type="text"
            placeholder="companyEmailAddress"
            value={data.email}
            disabled
          ></input>

          <input
            className="ProviderProfilePage-inputs"
            type="text"
            placeholder="companyAdress"
            value={data.location.address}
            disabled
          ></input>

          <input
            className="ProviderProfilePage-inputs"
            type="text"
            placeholder="companyPhoneNumber"
            value={data.phone}
            disabled
          ></input>

          <input
            className="ProviderProfilePage-inputs"
            type="text"
            placeholder="companyCity"
            value={data.location.city}
            disabled
          ></input>

          <input
            className="ProviderProfilePage-inputs"
            type="text"
            placeholder="companyPostalCode"
            value={data.location.postalCode}
            disabled
          ></input>

        </div>

        <div className="ProviderProfilePage-password">
          <h4>Αλλαγή κωδικού</h4>
          <form className="password-change" onSubmit={handleSubmitPass}>
            <input
              type={passVisibility ? "text" : "password"}
              id="oldPassword"
              name="oldPassword"
              required
              value={form.oldPassword}
              onChange={handleChange}
              placeholder="Τωρινός κωδικός πρόσβασης"
            />

            <input
              type={passVisibility ? "text" : "password"}
              id="newPassword"
              name="newPassword"
              required
              value={form.newPassword}
              onChange={handleChange}
              placeholder="Νέος κωδικός πρόσβασης"
            />
            <input
              type={passVisibility ? "text" : "password"}
              id="newPassword2"
              name="newPassword2"
              required
              value={form.newPassword2}
              onChange={handleChange}
              placeholder="Επανάληψη νέου κωδικού πρόσβασης"
            />
            <span
              className="material-icons-outlined show-icon"
              onClick={(e) => setPassVisibility(!passVisibility)}
            >
              {passVisibility ? "visibility" : "visibility_off"}
            </span>
            <button
              type="submit"
              style={{
                backgroundColor: "#1AABBF",
                color: "#ffffff",
                fontSize: "16px",
              }}
            >
              Αλλαγή κωδικού
            </button>
          </form>

          <h4>Αλλαγή IBAN</h4>
          <form className="Iban-change">
            <input
              type="Iban"
              id="OldIban"
              name="OldIban"
              required
              value={data.iban}
              // onChange={handleChange}
              placeholder="Τωρινό IBAN" 
              disabled
            />
            <input
              type="Iban"
              id="NewIban"
              name="NewIban"
              required
              value={data.iban}
              onChange={handleChange}
              placeholder="Νέο IBAN" />


            <button
              type="submit"
              style={{
                backgroundColor: "#1AABBF",
                color: "#ffffff",
                fontSize: "16px",
              }}
            >
              Αλλαγή IBAN
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProviderProfilePage;