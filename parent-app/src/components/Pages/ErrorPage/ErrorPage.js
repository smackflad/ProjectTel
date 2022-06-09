import "./ErrorPage.css";
import Monkey from "../../../images/404img.png";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  let navigate = useNavigate();
  const errorRedirect = () => navigate("/", { replace: true });

  return (
    <div className="ErrorPage-external">
      <div className="error404Page">
        <img className="error404Image" src={Monkey}></img>
        <div className="error404-text-wrap">
          <h1>OOPS...</h1>
          <span>Η σελίδα δε βρέθηκε!</span>
          <button className="error-redirect-button" onClick={errorRedirect}>
            Επιστροφή στην Αρχική
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
