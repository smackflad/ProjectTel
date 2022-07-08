import "./OrderHistory.css";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { useSelector } from "react-redux";

const Order = ({ name, date, price }) => {
  return (
    <div className="OrderHistory-item">
      <div className="OrderHistory-item-wrapper">
        <span className="OrderHistory-eventName">{name}</span>
        <span className="OrderHistory-date">
          {date.slice(0, date.indexOf("T"))}
        </span>
        <span className="OrderHistory-totalCost add-token-icon">
          {price}
          <span className="my-coin-icon"></span>
        </span>
        <span className="material-icons-outlined">file_download</span>
      </div>
    </div>
  );
};

const OrdersList = ({ orders }) => {
  return (
    <>
      {orders.map((ord) => {
        return (
          <Order
            name={ord.eventTitle}
            date={ord.date}
            price={ord.pricePaid}
            key={uuidv4()}
          />
        );
      })}
    </>
  );
};
const OrderHistory = () => {
  const { userId } = useSelector((state) => state.persistedReducer.global);
  console.log(userId);

  const [currentItems, setCurrentItems] = useState([
    { name: "", date: "", price: "" },
  ]);
  useEffect(() => {
    fetch(`http://localhost:3001/api/v1/parents/${userId}/orders/history`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
        const items = response.items;
        setCurrentItems(items);
      })
      .catch((err) => console.error(err));
  }, []);
  return (
    <div className="OrderHistory-external">
      <OrdersList orders={currentItems} />
    </div>
  );
};

export default OrderHistory;
