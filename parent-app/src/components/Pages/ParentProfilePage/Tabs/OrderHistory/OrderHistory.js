import "./OrderHistory.css";
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const items = [
  { name: "test", date: "20/01/2002", price: "15" },
  { name: "test", date: "20/01/2002", price: "15" },
  { name: "123123testw21", date: "25/06/2022", price: "40" },
  { name: "test", date: "20/01/2022", price: "56" },
];

const Order = ({ name, date, price }) => {
  return (
    <div className="OrderHistory-item">
      <div className="OrderHistory-item-wrapper">
        <span className="OrderHistory-eventName">{name}</span>
        <span className="OrderHistory-date">{date}</span>
        <span className="OrderHistory-totalCost">{price}$</span>
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
            name={ord.name}
            date={ord.date}
            price={ord.price}
            key={uuidv4()}
          />
        );
      })}
    </>
  );
};
const OrderHistory = () => {
  const [currentItems, setCurrentItems] = useState([
    { name: "", date: "", price: "" },
  ]);
  useEffect(() => {
    setCurrentItems(items);
  }, []);
  return (
    <div className="OrderHistory-external">
      <OrdersList orders={currentItems} />
    </div>
  );
};

export default OrderHistory;
