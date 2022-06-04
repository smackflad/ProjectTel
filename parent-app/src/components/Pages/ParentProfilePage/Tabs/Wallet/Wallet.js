import { v4 as uuidv4 } from "uuid";
import "./Wallet.css";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { QueryStatus } from "@reduxjs/toolkit/query/react";
import CircleLoader from "react-spinners/CircleLoader";
import { useGetWalletMutation } from "../../../../../store/api/parentApi";
import { useUpdateWalletMutation } from "../../../../../store/api/parentApi";

const rechargePrices = [10, 25, 50, 100];

const Wallet = () => {
  const [myCard, setMyCard] = useState("");
  const [showCreate, setShowCreate] = useState(false);
  const { userId } = useSelector((state) => state.global);
  const [getWallet, { data, status, isLoading }] = useGetWalletMutation();
  const [form, setForm] = useState({
    card: "",
    balance: 0,
  });
  const [
    updateWallet,
    { data: updateData, status: updateStatus, isLoading: updateIsLoading },
  ] = useUpdateWalletMutation();

  const handleSubmit = (e) => {
    e.preventDefault();

    updateWallet({ ...form, id: userId });
  };

  const [balance, setBalance] = useState(0);
  const [rechargeAmmount, setRechargeAmmount] = useState(0);
  console.log("ok");
  const increaseRechargeAmmount = (increaseAmmount) => {
    setRechargeAmmount(rechargeAmmount + increaseAmmount);
  };

  const decreaseRechargeAmmount = (decreaseAmmount) => {
    let newRechargeAmmount = rechargeAmmount - decreaseAmmount;
    newRechargeAmmount = newRechargeAmmount < 0 ? 0 : newRechargeAmmount;
    setRechargeAmmount(newRechargeAmmount);
  };

  const rechargeWallet = () => {
    if (myCard === "") {
      toast.error(
        "Παρακαλώ προσθέστε μία κάρτα για να φορτίσετε το πορτοφόλι σας !",
        {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      return;
    }
    if (rechargeAmmount <= 0) {
      toast.warn("Παρακαλώ, επιλέξτε ένα ποσό για να προσθέσετε στην κάρτα", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    updateWallet({
      id: userId,
      balance: balance + rechargeAmmount,
      card: myCard,
    });
    setRechargeAmmount(0);
  };
  useEffect(() => {
    if (updateStatus === QueryStatus.fulfilled) {
      if (balance !== updateData.balance) {
        toast.success("Το υπόλοιπό σας ενημερώθηκε με επιτυχία!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } else {
        toast.success("Η κάρτα σας ενημερώθηκε με επιτυχία!", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      setBalance(updateData.balance);
      setMyCard(updateData.card);
      setShowCreate(false);
    } else if (updateStatus === QueryStatus.rejected) {
      toast.error("Κάτι πήγε στραβά!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  }, [updateWallet, updateData, updateStatus]);

  useEffect(() => {
    if (status === QueryStatus.uninitialized) getWallet(userId);
    else if (status === QueryStatus.fulfilled) {
      if (data.cardExists) {
        setMyCard(data.card);
        setBalance(data.balance);
      } else {
        setShowCreate(!data.cardExists);
      }
    }
  }, [getWallet, data, status, userId]);

  if (isLoading || status === QueryStatus.uninitialized) {
    return (
      <div className="Wallet-external">
        <CircleLoader />
      </div>
    );
  }
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
                  <span className="material-icons-outlined">remove</span>
                </button>
                <button onClick={() => increaseRechargeAmmount(rechargePrice)}>
                  <span className="material-icons-outlined">add</span>
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
        {myCard !== "" && (
          <div className="Wallet-card-change">
            <input
              className="Wallet-myCard"
              type="text"
              id="card"
              name="card"
              value={myCard}
              disabled={true}
              placeholder="Δεν έχετε αποθηκευμένη κάρτα"
            ></input>
            <button
              className="Wallet-card-button"
              onClick={(e) => {
                e.preventDefault();
                setShowCreate(true);
              }}
            >
              {/*addClass button-disabled if card doesnt exist in DB and make it disabled and makes Wallet-AddCard class visible */}
              Αλλαγή κάρτας
            </button>
          </div>
        )}
        {showCreate && (
          <form className="Wallet-AddCard" onSubmit={handleSubmit}>
            <input
              className="Wallet-myCard"
              type="text"
              id="CardNumber"
              name="CardNumber"
              placeholder="Προσθήκη κάρτας "
              pattern="[1-9]{16}"
              required={true}
              onInvalid={(e) =>
                e.target.setCustomValidity(
                  "Παρακαλώ συμπληρώστε σωστά τον αριθμό της κάρτας σας."
                )
              }
              onInput={(e) => e.target.setCustomValidity("")}
              value={form.card}
              onChange={(e) =>
                setForm({ balance: balance, card: e.target.value })
              }
            ></input>
            <div className="Wallet-newCard-details">
              <input
                type="month"
                id="CardDate"
                name="CardDate"
                required={true}
                placeholder="Ημερομηνία λήξης "
                onInvalid={(e) =>
                  e.target.setCustomValidity(
                    "Παρακαλώ συμπληρώστε σωστά την ημερομηνία της κάρτας σας."
                  )
                }
                onInput={(e) => e.target.setCustomValidity("")}
              ></input>
              <input
                type="text"
                id="CardCvv"
                name="CardCvv"
                required={true}
                pattern="[1-9]{3}"
                placeholder="CVV "
                onInvalid={(e) =>
                  e.target.setCustomValidity(
                    "Παρακαλώ συμπληρώστε σωστά το CVV σας."
                  )
                }
                onInput={(e) => e.target.setCustomValidity("")}
              ></input>
            </div>
            <div className="Wallet-add-button-wrap">
              <button className="Wallet-card-button" type="submit">
                {/*when this button pressed class Wallet-AddCard is hidden and the card number goes on  Wallet-myCard input*/}
                {!data.cardExists ? "Προσθήκη" : "Αλλαγή"}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
{
  /*in general when bottom class is visible change card button is disabled*/
}
export default Wallet;
