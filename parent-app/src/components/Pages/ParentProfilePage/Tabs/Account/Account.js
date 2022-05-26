import "./Account.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUserAccount } from "./Account.slice";

const Account = () => {
  // console.log("ok");
  const { profile, loading } = useSelector((state) => state.userAccount);
  const dispatch = useDispatch();
  useEffect(() => {
    (async () => {
      try {
        const res = await dispatch(fetchUserAccount(2)).unwrap();
        console.log(`success user id: ${res.data.id}`);
      } catch (err) {
        console.error(err.message);
      }
      // console.log("hello");
    })();
  }, [dispatch]);
  console.log(loading);
  console.log(profile);
  return (
    <div className="Account-external">
      <div className="Account-info">
        <h4>Πληροφορίες Λογαριασμού</h4>
        <input
          className="Account-inputs"
          type="text"
          //   value={profile.firstName}
          //   onChange={handleChange}
          disabled
        />
        <input
          className="Account-inputs"
          type="text"
          //   value={profile.lastName}
          //   onChange={handleChange}
          disabled
        />
        <input
          className="Account-inputs"
          type="text"
          //   value={profile.email}
          //   onChange={handleChange}
          disabled
        />
        <input
          className="Account-inputs"
          type="text"
          //   value={profile.phone}
          //   onChange={handleChange}
          disabled
        />
        <input
          className="Account-inputs"
          type="date"
          //   value={profile.birthDate}
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
