import "./UserCreationPage.css";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

const UserCreationPage = () => {
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
    <div className="UserCreationPage-external">
      <div className="container-selection">

        <h1>Εισαγωγή Νέου Χρήστη</h1>
       
        <input
          className="UserCreationPage-inputs"
          type="text"
          placeholder="Όνομα"
          id="firstName"
         // value={form.firstName}
          //   onChange={handleChange}
          required
        ></input>
        <input
          className="UserCreationPage-inputs"
          type="text"
          placeholder="Επίθετο"
          id="lastName"
         // value={form.lastName}
          //   onChange={handleChange}
          required
        ></input>


        <input className="UserCreationPage-inputs"
          type="text"
          id="Role"
          name="Role"
          placeholder="Ρόλος"
          required
          list="roles" 
          //value={form.Role}
          />
        <datalist id="roles">
          <option value="companyAdmin">Χρήστης Διαχείρισης</option>
          <option value="companyupport">Χρήστης Υποστήριξης</option>
        </datalist>


        <input
          className="UserCreationPage-inputs"
          type="text"
          id="Password"
          name="Password"
          required
          //value={form.Password}
          // onChange={handleChange}
          placeholder="Κωδικός πρόσβασης"
        ></input>
        <input
          className="UserCreationPage-inputs"
          type="text"
          id="PasswordVer"
          name="PasswordVer"
          required
          //value={form.PasswordVer}
          // onChange={handleChange}
          placeholder="Επανάληψη κωδικού πρόσβασης"
        ></input>
        <button
          className="UserCreationPage-inputs"
          type="submit"
          style={{
            backgroundColor: "#1AABBF",
            color: "#ffffff",
            fontSize: "16px",
          }}
        >
          Δημιουργία Χρήστη
        </button>


      </div>
    </div>


  );
};

export default ProviderProfilePage;
