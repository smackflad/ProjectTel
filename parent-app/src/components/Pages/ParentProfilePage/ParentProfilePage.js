import "./ParentProfilePage.css";
import tabs from "./Tabs";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const ParentProfilePage = () => {
  const [tabIndex, setTabIndex] = useState(2);

  return (
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
            {/* <li className="mini-menu-selected">
              <span className="material-icons-outlined">manage_accounts</span>
              <span>Προσωπικά στοιχεία</span>
            </li>
            <li>
              <span className="material-icons-outlined">history</span>
              <span>Ιστορικό παραγγελιών</span>
            </li>
            <li>
              <span className="material-icons-outlined">
                account_balance_wallet
              </span>
              <span>Πορτοφόλι</span>
            </li> */}
          </ul>
        </div>
      </div>
      <div className="container-selection">{tabs[tabIndex].component}</div>
    </div>
  );
};

export default ParentProfilePage;
