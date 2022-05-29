import "./App.css";
import HomePage from "./components/Pages/HomePage/HomePage";
import MyNav from "./components/generalComponents/MyNav/MyNav";
import CommonLogReg from "./components/Pages/Register-Login-Pages/CommonLogReg/CommonLogReg";
import Register from "./components/Pages/Register-Login-Pages/Register/Register";
import Login from "./components/Pages/Register-Login-Pages/Login/Login";
import RegisterStep2 from "./components/Pages/Register-Login-Pages/Register/RegisterStep2";
import ParentProfilePage from "./components/Pages/ParentProfilePage/ParentProfilePage";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <MyNav />
      <div className="Body">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/Register"
            element={
              <CommonLogReg>
                <Register />
              </CommonLogReg>
            }
          />
          <Route
            path="/Register2"
            element={
              <CommonLogReg>
                <RegisterStep2 />
              </CommonLogReg>
            }
          />
          <Route
            path="/Login"
            element={
              <CommonLogReg>
                <Login />
              </CommonLogReg>
            }
          />
          <Route path="/my-profile" element={<ParentProfilePage />} />
        </Routes>
      </div>
      <div className="Footer">TEL © 2022</div>
    </Router>
  );
}

export default App;
