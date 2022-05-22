import "./CommonLogReg.css";
import logo from "../../../../images/TEL-LOGO.svg";
import { useState, cloneElement } from "react";
import CircleLoader from "react-spinners/CircleLoader";

const CommonLogReg = (props) => {
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className={"CommonLogReg-external " + (loading ? "blur" : "")}>
        <div className="CommonLogReg-wrapper">
          <div className="Logo-panel">
            <img className="site-logo" src={logo}></img>
          </div>
          <div>{cloneElement(props.children, { loading, setLoading })}</div>
        </div>
      </div>
      {loading && (
        <div className="spinner">
          <CircleLoader />
        </div>
      )}
    </>
  );
};

export default CommonLogReg;
