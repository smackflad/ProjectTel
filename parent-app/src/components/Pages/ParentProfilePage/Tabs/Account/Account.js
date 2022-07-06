import "./Account.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useGetProfileMutation } from "../../../../../store/api/parentApi";
import { QueryStatus } from "@reduxjs/toolkit/query/react";
import CircleLoader from "react-spinners/CircleLoader";
import { toast } from "react-toastify";
import { useResetPasswordMutation } from "../../../../../store/api/authApi";

const Account = () => {
  const [passVisibility, setPassVisibility] = useState(false);
  const { userId } = useSelector((state) => state.persistedReducer.global);
  const [getProfile, { data, status, isLoading }] = useGetProfileMutation();
  const [form, setForm] = useState({
    oldPassword: "",
    newPassword: "",
    newPassword2: "",
  });

  const [
    resetPassword,
    {
      data: dataReset,
      isLoading: isResetLoading,
      error,
      status: ResetPassstatus,
    },
  ] = useResetPasswordMutation();
  useEffect(() => {
    if (status === QueryStatus.uninitialized) getProfile(userId);
    else if (status === QueryStatus.fulfilled) {
      console.log(data);
    }
    if (ResetPassstatus === QueryStatus.fulfilled) {
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
    } else if (ResetPassstatus === QueryStatus.rejected) {
      toast.error("Ο κωδικός πού δώσατε είναι λανθασμένος", {
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
        newPassword: form.newPassword,
        newPassword2: form.newPassword2,
      });
    }
  }, [getProfile, data, status, userId, dataReset, ResetPassstatus]);

  if (isLoading || status === QueryStatus.uninitialized) {
    return (
      <div className="Account-external">
        <CircleLoader />
      </div>
    );
  }
  const handleSubmit = (e) => {
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
        oldPassword: form.oldPassword,
        newPassword: "",
        newPassword2: "",
      });
      return;
    }
    resetPassword({
      email: data.email,
      oldPassword: form.oldPassword,
      newPassword: form.newPassword,
      id: userId,
    });
  };

  const handleChange = (e) => {
    if (!isLoading) setForm({ ...form, [e.target.id]: e.target.value });
  };
  return (
    <div className="Account-external">
      <div className="Account-info">
        <h4>Πληροφορίες Λογαριασμού</h4>
        <input
          className="Account-inputs"
          type="text"
          value={data.firstName}
          // onChange={handleChange}
          disabled
        />
        <input
          className="Account-inputs"
          type="text"
          value={data.lastName}
          // onChange={handleChange}
          disabled
        />
        <input
          className="Account-inputs"
          type="text"
          value={data.email}
          //   onChange={handleChange}
          disabled
        />
        <input
          className="Account-inputs"
          type="text"
          value={data.phone}
          //   onChange={handleChange}
          disabled
        />
        <input
          className="Account-inputs"
          type="date"
          value={data.birthDate}
          //   onChange={handleChange}
          disabled
        />
      </div>
      <div className="Account-password">
        <h4>Αλλαγή κωδικού</h4>
        <form className="password-change" onSubmit={handleSubmit}>
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
      </div>
    </div>
  );
};

export default Account;
