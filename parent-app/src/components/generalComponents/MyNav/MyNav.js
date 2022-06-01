import "./MyNav.css";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const MyNav = () => {
  const [open, setOpen] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.global);
  console.log(isLoggedIn);
  return (
    <div className="MyNav-external">
      <div className="MyNav-internal">
        <Link to="/">
          <div className="MyNav-Logo"></div>
        </Link>
        <div className="MyNav-items">
          <div className="MyNav-menu">
            <ul>
              <li>
                <Link to="/AboutUs">Σχετικά με εμάς</Link>
              </li>
              {isLoggedIn ? (
                <li>
                  <Link to="/Logout">Έξοδος</Link>
                </li>
              ) : (
                <>
                  <li>
                    <Link to="/Register">Εγγραφή</Link>
                  </li>
                  <li>
                    <Link to="/Login">Σύνδεση</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
          {isLoggedIn && (
            <div className="MyNav-icon">
              <Link to="/my-profile">
                <span className="material-icons-outlined md-40">
                  account_circle
                </span>
              </Link>
            </div>
          )}
        </div>
        <div
          className="MyNav-mobile"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span className="material-icons-outlined">menu</span>
          {open && (
            <div className="MyNav-mobile-menu">
              <ul className="MyNav-select-options">
                {isLoggedIn ? (
                  <>
                    <li>
                      <Link to="/Logout">Έξοδος</Link>
                    </li>
                    <li>
                      <Link to="/my-profile">Ο Λογαριασμός μου</Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li>
                      <Link to="/Register">Εγγραφή</Link>
                    </li>
                    <li>
                      <Link to="/Login">Σύνδεση</Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyNav;
