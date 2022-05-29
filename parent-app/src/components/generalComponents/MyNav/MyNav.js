import "./MyNav.css";
import { useState } from "react";
import { Link } from "react-router-dom";
const MyNav = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="MyNav-external">
      <div className="MyNav-internal">
        <Link to="/">
          <div className="MyNav-Logo"></div>
        </Link>

        <div className="MyNav-items">
          <div className="MyNav-menu">
            <ul>
              <li>Σχετικά με εμάς</li>
              <li>
                <Link to="/Register">Εγγραφή</Link>
              </li>
              <li>
                <Link to="/Login">Σύνδεση</Link>
              </li>
            </ul>
          </div>
          <div className="MyNav-icon">
            <Link to="/my-profile">
              <span className="material-icons-outlined md-40">
                account_circle
              </span>
            </Link>
          </div>
        </div>
        <div
          className="MyNav-mobile"
          onClick={() => {
            setOpen(!open);
          }}
        >
          <span class="material-icons-outlined">menu</span>
          {open && (
            <div className="MyNav-mobile-menu">
              <ul className="MyNav-select-options">
                <li>
                  <Link to="/Register">Εγγραφή</Link>
                </li>
                <li>
                  <Link to="/Login">Σύνδεση</Link>
                </li>
                <li>
                  <Link to="/my-profile">Ο Λογαριασμός μου</Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyNav;
