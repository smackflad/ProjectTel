import './App.css';
import HomePage from './components/Pages/HomePage/HomePage';
import MyNav from './components/generalComponents/MyNav/MyNav';
import CommonLogReg from './components/Pages/Register-Login-Pages/CommonLogReg/CommonLogReg';
import Register from './components/Pages/Register-Login-Pages/Register/Register';
import Login from './components/Pages/Register-Login-Pages/Login/Login';
import RegisterStep2 from './components/Pages/Register-Login-Pages/Register/RegisterStep2';

import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
        <MyNav />
      <div className="Body">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Register" element={<CommonLogReg><Register/></CommonLogReg> }/>
          <Route path="/Register2" element={<CommonLogReg><RegisterStep2/></CommonLogReg> }/>
          <Route path="/Login" element={<CommonLogReg><Login/></CommonLogReg> }/>
        </Routes>
      </div>
      <div className="Footer">
        Footer
      </div>
    </Router>
  );
}

export default App;
