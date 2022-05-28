import "./Event.css";
import { useState } from "react";

const Event = ({ title, venue }) => {
  return (
    <div className="Inside_Middle_Component-external">
      <a className="Inside_Middle_Component-elementClick" href="/">
        <img
          className="Inside-Middle-Component-image"
          src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
          alt=""
        ></img>
        <div className="Inside_Middle_Component-info">
          <span className="Inside_Middle_Component-date">25 MAY</span>
          <span className="Inside_Middle_Component-title">{title}</span>
          <span className="Inside_Middle_Component-venue">{venue}</span>
        </div>
      </a>
    </div>
  );
};

export default Event;
