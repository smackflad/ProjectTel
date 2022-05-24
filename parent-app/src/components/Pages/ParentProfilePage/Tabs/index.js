import Account from "./Account/Account";
import Wallet from "./Wallet/Wallet";
import OrderHistory from "./OrderHistory/OrderHistory";
import react from "react";

const tabs = [
  {
    display: (
      <>
        <span class="material-icons-outlined">manage_accounts</span>
        <span>Προσωπικά στοιχεία</span>
      </>
    ),
    component: <Account />,
  },
  {
    display: (
      <>
        <span class="material-icons-outlined">history</span>
        <span>Ιστορικό παραγγελιών</span>
      </>
    ),
    component: <OrderHistory />,
  },
  {
    display: (
      <>
        <span class="material-icons-outlined">account_balance_wallet</span>
        <span>Πορτοφόλι</span>
      </>
    ),
    component: <Wallet />,
  },
];

export default tabs;
