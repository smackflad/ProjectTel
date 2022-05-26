import "./providerProfilePage.css";
import { Navigate } from "react-router-dom";

const ProviderProfilePage = () => {
  return (
    <div className="ProviderProfilePage -external">
      <body>
        <div className="container">
          <header>Company Profile</header>

          <div className="details personal">
            <div className="fields">
              <div className="input-field">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="Enter first name"
                  required
                ></input>
                <button className="changeNameBtn">
                  <span className="btnText">change name</span>
                  <i className="uil uil-navigator"></i>
                </button>
              </div>

              <div className="input-field">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Enter last name"
                  required
                ></input>
              </div>

              <div className="input-field">
                <label>Company Name</label>
                <input type="text" placeholder="My company name"></input>
              </div>

              <div className="input-field">
                <label>Contact Phone Number</label>
                <input type="number" placeholder="2100000000000"></input>
              </div>

              <div className="input-field">
                <label>Company ID</label>
                <input type="text" placeholder="My company ID"></input>
              </div>

              <div className="input-field">
                <label>Company Email Address</label>
                <input type="text" placeholder="companyemail@mail.com"></input>
              </div>

              <div className="input-field">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="myemail@mail.com"
                  required
                ></input>
              </div>

              <div className="input-field">
                <label>Tax Office</label>
                <input type="text" placeholder="My tax office"></input>
              </div>

              <div className="input-field">
                <label>IBAN</label>
                <input
                  type="text"
                  placeholder="GR00000000000000000000000"
                ></input>
                <button className="changeIbanBtn">
                  <span className="btnText">change IBAN</span>
                  <i className="uil uil-navigator"></i>
                </button>
              </div>

              <div className="input-field">
                <label>Old Password</label>
                <input type="text"></input>
              </div>

              <div className="input-field">
                <label>Company Address</label>
                <input type="text" placeholder="My company address"></input>
              </div>

              <div className="input-field"></div>

              <div className="input-field">
                <label>New Password</label>
                <input type="text"></input>
                <button className="changePassBtn">
                  <span className="btnText">change password</span>
                  <i className="uil uil-navigator"></i>
                </button>
              </div>

              <div className="input-field">
                <label>Company Postal Code</label>
                <input type="text" placeholder="0000"></input>
              </div>

              <div className="input-field">
                <label>Company City</label>
                <input type="text" placeholder="My city"></input>
              </div>
            </div>
          </div>
        </div>
      </body>
    </div>
  );
};

export default ProviderProfilePage;
