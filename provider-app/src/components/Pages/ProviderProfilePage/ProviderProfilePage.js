import "./providerProfilePage.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchUserAccount } from "./ProviderProfilePage.slice";

const ProviderProfilePage = () => {
  // // console.log("ok");      
  // const { profile, loading } = useSelector((state) => state.userAccount);
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const res = await dispatch(fetchUserAccount(2)).unwrap();
  //       console.log(`success user id: ${res.data.id}`);
  //     } catch (err) {
  //       console.error(err.message);
  //     }
  //     // console.log("hello");
  //   })();
  // }, [dispatch]);
  // console.log(loading);
  // console.log(profile);
  return (
    <div className="ProviderProfilePage-external">
      <div className="container-selection">
        <div className="ProviderProfilePage-info">
          <h4>Πληροφορίες Εταιρικού Λογαριασμού</h4>

          <input
            className="ProviderProfilePage-inputs"
            type="text"
            //   value={profile.firstName}
            //   onChange={handleChange}
            disabled
          ></input>
          <input
            className="ProviderProfilePage-inputs"
            type="text"
            //   value={profile.companyName}
            //   onChange={handleChange}
            disabled
          ></input>


          <input
            className="ProviderProfilePage-inputs"
            type="text"
            //   value={profile.lastName}
            //   onChange={handleChange}
            disabled
          ></input>

          <input
            className="ProviderProfilePage-inputs"
            type="text"
            //   value={profile.companyID}
            //   onChange={handleChange}
            disabled
          ></input>

          <input
            className="ProviderProfilePage-inputs"
            type="text"
            //   value={profile.email}
            //   onChange={handleChange}
            disabled
          ></input>

          <input
            className="ProviderProfilePage-inputs"
            type="text"
            //   value={profile.taxOffice}
            //   onChange={handleChange}
            disabled
          ></input>

          <input
            className="ProviderProfilePage-inputs"
            type="text"
            //   value={profile.companyEmailAddress}
            //   onChange={handleChange}
            disabled
          ></input>

          <input
            className="ProviderProfilePage-inputs"
            type="text"
            //   value={profile.companyAdress}
            //   onChange={handleChange}
            disabled
          ></input>

          <input
            className="ProviderProfilePage-inputs"
            type="text"
            //   value={profile.companyPhoneNumber}
            //   onChange={handleChange}
            disabled
          ></input>
        
         <input
            className="ProviderProfilePage-inputs"
            type="text"
            //   value={profile.companyCity}
            //   onChange={handleChange}
            disabled
          ></input>

          <input
            className="ProviderProfilePage-inputs"
            type="text"
            //   value={profile.companyPostalCode}
            //   onChange={handleChange}
            disabled
          ></input>

        </div>

        <div className="ProviderProfilePage-password">
          <h4>Αλλαγή κωδικού</h4>
          <form className="password-change">
            <input
              type="password"
              id="Oldpassword"
              name="Oldpassword"
              required
              // value={form.password}
              // onChange={handleChange}
              placeholder="Τωρινός κωδικός πρόσβασης" />
            <input
              type="password"
              id="NewPassword"
              name="NewPassword"
              required
              // value={form.password}
              // onChange={handleChange}
              placeholder="Νέος κωδικός πρόσβασης" />
            <input
              type="password"
              id="NewPasswordVer"
              name="NewPasswordVer"
              required
              // value={form.password}
              // onChange={handleChange}
              placeholder="Επανάληψη νέου κωδικού πρόσβασης" />
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
              // value={form.iban}
              // onChange={handleChange}
              placeholder="Τωρινό IBAN" />
            <input
              type="Iban"
              id="NewIban"
              name="NewIban"
              required
              // value={form.iban}
              // onChange={handleChange}
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
