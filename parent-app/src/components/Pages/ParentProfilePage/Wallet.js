import "./Wallet.css";

const Wallet = () => {
  return (
    <div className="Wallet-external">
      <div className="Wallet-balance-container">
        <h4>Διαθέσιμο υπόλοιπο :</h4>
        <span className="Wallet-balance-text">15 $</span>
        {/* get value from db  */}
      </div>
      <div className="Wallet-recharge">
        <h4>Προσθήκη χρημάτων</h4>
        <h5>Επιλέξτε ποσό</h5>
        <div className="Wallet-wrap-amounts">
          <span>10 $</span>
          <button type="submit">
            <span class="material-icons-outlined">add</span>
          </button>
          <button type="submit">
            <span class="material-icons-outlined">remove</span>
          </button>
        </div>
        <div className="Wallet-wrap-amounts">
          <span>25 $</span>
          <button type="submit">
            <span class="material-icons-outlined">add</span>
          </button>
          <button type="submit">
            <span class="material-icons-outlined">remove</span>
          </button>
        </div>
        <div className="Wallet-wrap-amounts">
          <span>50 $</span>
          <button type="submit">
            <span class="material-icons-outlined">add</span>
          </button>
          <button type="submit">
            <span class="material-icons-outlined">remove</span>
          </button>
        </div>
        <div className="Wallet-wrap-amounts">
          <span>100 $</span>
          <button type="submit">
            <span class="material-icons-outlined">add</span>
          </button>
          <button type="submit">
            <span class="material-icons-outlined">remove</span>
          </button>
        </div>
        <div className="Wallet-total">
          <h4>Σύνολο :</h4>
          <span className="total-amount">30 $</span>
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
