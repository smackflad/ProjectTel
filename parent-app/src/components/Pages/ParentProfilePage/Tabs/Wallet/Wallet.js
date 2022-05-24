import { v4 as uuidv4 } from "uuid";
import "./Wallet.css";
import { useState } from "react";

const rechargePrices = [10, 25, 50, 100];

const Wallet = () => {
  const [balance, setBalance] = useState(0);
  const [rechargeAmmount, setRechargeAmmount] = useState(0);

  const increaseRechargeAmmount = (increaseAmmount) => {
    setRechargeAmmount(rechargeAmmount + increaseAmmount);
  };

  const decreaseRechargeAmmount = (decreaseAmmount) => {
    let newRechargeAmmount = balance - rechargeAmmount;
    newRechargeAmmount = newRechargeAmmount < 0 ? 0 : newRechargeAmmount;
    setRechargeAmmount(newRechargeAmmount);
  };

  const rechargeWallet = () => {
    // do something
    setBalance(rechargeAmmount);
    setRechargeAmmount(0);
  };

  return (
    <div className="Wallet-external">
      <div className="Wallet-balance-container">
        <h4>Διαθέσιμο υπόλοιπο :</h4>
        <span className="Wallet-balance-text">{`$${balance}`}</span>
        {/* get value from db  */}
      </div>
      <div className="Wallet-recharge">
        <h4>Προσθήκη χρημάτων</h4>
        <h5>Επιλέξτε ποσό:</h5>
        {rechargePrices.map((rechargePrice) => {
          return (
            <div className="Wallet-wrap-amounts" key={uuidv4()}>
              <span>{`$${rechargePrice}`}</span>
              <div className="Wallet-plus-minus-wrap">
                <button onClick={() => decreaseRechargeAmmount(rechargePrice)}>
                  <span class="material-icons-outlined">remove</span>
                </button>
                <button onClick={() => increaseRechargeAmmount(rechargePrice)}>
                  <span class="material-icons-outlined">add</span>
                </button>
              </div>
            </div>
          );
        })}
        <div className="Wallet-recharge-total">
          <div>
            <h4>Σύνολο :</h4>
            <span className="total-amount">{`$${rechargeAmmount}`}</span>
          </div>
          <button className="Wallet-card-button" onClick={rechargeWallet}>
            Προσθήκη χρημάτων
          </button>
          {/*   Dynamicly change and class wallet total is displayed if a button is  from parent class is pressed (+ or -)*/}
        </div>
      </div>
      <div className="Wallet-cards">
        <h4>Η κάρτα μου</h4>
        <div className="Wallet-card-change">
          <input
            className="Wallet-myCard"
            type="text"
            id="card"
            name="card"
            placeholder="Δεν έχετε αποθηκευμένη κάρτα"
          ></input>
          <button className="Wallet-card-button" type="submit">
            {/*addClass button-disabled if card doesnt exist in DB and make it disabled and makes Wallet-AddCard class visible */}
            Αλλαγή κάρτας
          </button>
        </div>
        <div className="Wallet-AddCard">
          <input
            className="Wallet-myCard"
            type="text"
            id="CardNumber"
            name="CardNumber"
            placeholder="Προσθήκη κάρτας "
          ></input>
          <div className="Wallet-newCard-details">
            <input
              type="month"
              id="CardDate"
              name="CardDate"
              placeholder="Ημερομηνία λήξης "
            ></input>
            <input
              type="text"
              id="CardCvv"
              name="CardCvv"
              placeholder="CVV "
            ></input>
          </div>
          <div className="Wallet-add-button-wrap">
            <button className="Wallet-card-button" type="submit">
              {/*when this button pressed class Wallet-AddCard is hidden and the card number goes on  Wallet-myCard input*/}
              Προσθήκη
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
{
  /*in general when bottom class is visible change card button is disabled*/
}
export default Wallet;
