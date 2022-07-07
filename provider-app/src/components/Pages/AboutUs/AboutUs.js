import "./AboutUs.css";
import { useNavigate } from "react-router-dom";
import kidsPic from '../../../images/kids.jpg';
import internetPic from '../../../images/internet.jpg';

const AboutUs = () => {
  return (
    <div className="AboutUsPage-external">      
          <span className="AboutUsPage-title"> Σχετικά με εμάς </span>

          <span className="AboutUsPage-paragraph">- Ποιοί είμαστε? </span>

          <span className="AboutUsPage-text"> Είμαστε μια ομάδα πέντε φοιτητών της σχολής Πληροφορικής Και Τηλεπικοινωνιών που αποφασίσαμε να κάνουμε την επιλογή 
          δραστηριοτήτων για τα παιδιά πιο εύκολη και γρήγορη απο ποτέ!  </span>

          <img classname="AboutUsPage-image" src={kidsPic} alt=""></img>

          <span className="AboutUsPage-paragraph">- Τί κάνουμε? </span>

          <span className="AboutUsPage-text"> Προσφέρουμε μια πλατφόρμα για εύκολη εξυπηρέτηση των εταιριών που παρέχουν δραστηριότητες για παιδιά και νέους με 
          πλήρεις δυνατότητες αγοραπωλησίας εικoνικών εισητηρίων.</span>

          <img classname="AboutUsPage-image" src={internetPic} alt=""></img>

          <span className="AboutUsPage-paragraph">- Γιατί να χρησιμοποιήσετε τις υπηρεσίες μας? </span>

          <span className="AboutUsPage-text"> Γιατί με τις προηγμένες τεχνικές marketing, παίρνουμε το πιο ανταγωνιστικό ποσοστό απο τις αγορές των
          εισητηρίων σας, μεγιστοποιόντας τα δικά σας κέρδη! </span>


    </div>
  );
};

export default AboutUs;
