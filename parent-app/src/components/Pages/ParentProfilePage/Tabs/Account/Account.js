import "./Account.css";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { useGetProfileMutation } from "../../../../../store/api/parentApi";
import { QueryStatus } from "@reduxjs/toolkit/query/react";
import CircleLoader from "react-spinners/CircleLoader";

const Account = () => {
  const { userId } = useSelector((state) => state.global);
  const [getProfile, { data, status, isLoading }] = useGetProfileMutation();

  useEffect(() => {
    if (status === QueryStatus.uninitialized) getProfile(userId);
    else if (status === QueryStatus.fulfilled) {
      console.log(data);
    }
  }, [getProfile, data, status, userId]);

  if (isLoading || status === QueryStatus.uninitialized) {
    return (
      <div className="Account-external">
        <CircleLoader />
      </div>
    );
  }

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
          value={data.user.email}
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
        <form className="password-change">
          <input
            type="password"
            id="Oldpassword"
            name="Oldpassword"
            required
            // value={form.password}
            // onChange={handleChange}
            placeholder="Τωρινός κωδικός πρόσβασης"
          />
          <input
            type="password"
            id="NewPassword"
            name="NewPassword"
            required
            // value={form.password}
            // onChange={handleChange}
            placeholder="Νέος κωδικός πρόσβασης"
          />
          <input
            type="password"
            id="NewPasswordVer"
            name="NewPasswordVer"
            required
            // value={form.password}
            // onChange={handleChange}
            placeholder="Επανάληψη νέου κωδικού πρόσβασης"
          />
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
