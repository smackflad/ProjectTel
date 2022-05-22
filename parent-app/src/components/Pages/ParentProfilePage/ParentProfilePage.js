import "./ParentProfilePage.css";
import Account from "./Account";
const ParentProfilePage = () => {
  return (
    <div className="ParentProfilePage-external">
      <div className="mini-profile-menu">
        <h4>Ο Λογαριασμός μου</h4>
        <div className="profile-selections">
          <ul>
            <li>
              <span class="material-icons-outlined">manage_accounts</span>
              <span>Προσωπικά στοιχεία</span>
            </li>
            <li>
              <span class="material-icons-outlined">history</span>
              <span>Ιστορικό παραγγελιών</span>
            </li>
            <li>
              <span class="material-icons-outlined">
                account_balance_wallet
              </span>
              <span>Πορτοφόλι</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-selection">
        <Account />
      </div>
    </div>
  );
};

export default ParentProfilePage;
