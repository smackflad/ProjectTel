import "./AboutUs.css";
import Monkey from "../../../images/404img.png";
import { useNavigate } from "react-router-dom";

const AboutUs = () => {
  return (
    <div className="AboutUsPage-external">      
          <span className="AboutUsPage-title"> Σχετικά με εμάς </span>

          <span className="AboutUsPage-text"> Είμαστε μια ομάδα φοιτητών της σχολής Πληροφορικής Και Τηλεπικοινωνιών που αποφασίσαμε να κάνουμε την επιλογή 
          δραστηριοτήτων για τα παιδιά πιο εύκολη και γρήγορη απο ποτέ!  </span>
    </div>
  );
};

export default AboutUs;
