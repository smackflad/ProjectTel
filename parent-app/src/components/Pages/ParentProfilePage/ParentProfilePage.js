import "./ParentProfilePage.css";
import tabs from "./Tabs";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ParentProfilePage = () => {
  const [tabIndex, setTabIndex] = useState(1);
  const { accountInitialized, isLoggedIn } = useSelector(
    (state) => state.global
  );
  let navigate = useNavigate();
  useEffect(() => {
    if (isLoggedIn && !accountInitialized) navigate("/Register2");
  }, [accountInitialized]);

  return (
    <>
      <div className="ParentProfilePage-external">
        <div className="mini-profile-menu">
          <h4>Ο Λογαριασμός μου</h4>
          <div className="profile-selections">
            <ul>
              {tabs.map((tab, i) => {
                return (
                  <li
                    key={uuidv4()}
                    onClick={() => setTabIndex(i)}
                    className={tabIndex === i ? "mini-menu-selected" : ""}
                  >
                    {tab.display}
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="container-selection">{tabs[tabIndex].component}</div>
      </div>
    </>
  );
};

export default ParentProfilePage;
