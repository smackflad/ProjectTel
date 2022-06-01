import "./CommonLogReg.css";
import logo from "../../../../images/TEL-LOGO.svg";

const CommonLogReg = (props) => {
  return (
    <>
      <div className="CommonLogReg-external">
        <div className="CommonLogReg-wrapper">
          <div className="Logo-panel">
            <img className="site-logo" src={logo}></img>
          </div>
          <div>{props.children}</div>
        </div>
      </div>
    </>
  );
};

export default CommonLogReg;
