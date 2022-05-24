import "./Middle_Component.css";
import InsideMiddleComponent from "../InsideMiddleComponent/InsideMiddleComponent";
import { useState } from "react";

const Middle_Component = () => {
  return (
    <div className="Middle_Component-external">
      <div className="Middle_Component-outsideContainer">
        <InsideMiddleComponent />
        <InsideMiddleComponent />
        <InsideMiddleComponent />
        <InsideMiddleComponent />
        <InsideMiddleComponent />
        <InsideMiddleComponent />
        <InsideMiddleComponent />
        <InsideMiddleComponent />
        <InsideMiddleComponent />
        <InsideMiddleComponent />
        <InsideMiddleComponent />
        <InsideMiddleComponent />
        <InsideMiddleComponent />
        <InsideMiddleComponent />
        <InsideMiddleComponent />
        <InsideMiddleComponent />
      </div>
    </div>
  );
};

export default Middle_Component;
