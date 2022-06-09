import "./Event.css";
import { useState } from "react";

var monthNames = [ "Jan", "Feb", "Mar", "Apr", "May", "Jun",
"Jul", "Aug", "Sept", "Oct", "Nov", "Dec" ];

const Event = ({ id, title, venue, img, date }) => {
  const datee = new Date(date);
  // console.log(datee.getDate()+" "+monthNames[datee.getMonth()]);
  // {datee.getDate()+" "+monthNames[datee.getMonth()]}
  console.log(id);
  return (
    <div className="Inside_Middle_Component-external">
      <a className="Inside_Middle_Component-elementClick" href={"/event/"+id}>
        <img
          className="Inside-Middle-Component-image"
          src={img}
          alt=""
        ></img>
        <div className="Inside_Middle_Component-info">
          <span className="Inside_Middle_Component-date">{datee.getDate()+" "+monthNames[datee.getMonth()]}</span>
          <span className="Inside_Middle_Component-title">{title}</span>
          <span className="Inside_Middle_Component-venue">{venue}</span>
        </div>
      </a>
    </div>
  );
};

export default Event;
