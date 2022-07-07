import "./App.css";
import HomePage from "./components/Pages/HomePage/HomePage";
import MyNav from "./components/generalComponents/MyNav/MyNav";
import CommonLogReg from "./components/Pages/Register-Login-Pages/CommonLogReg/CommonLogReg";
import Register from "./components/Pages/Register-Login-Pages/Register/Register";
import Login from "./components/Pages/Register-Login-Pages/Login/Login";
import Logout from "./components/Pages/Register-Login-Pages/Logout/Logout";
import RegisterStep2 from "./components/Pages/Register-Login-Pages/Register/RegisterStep2";
import ParentProfilePage from "./components/Pages/ParentProfilePage/ParentProfilePage";
import ErrorPage from "./components/Pages/ErrorPage/ErrorPage";
import AboutUsPage from "./components/Pages/AboutUs/AboutUs";
import { ToastContainer } from "react-toastify";
import { useSelectovr } from "react-redux";
// import './App.css';
// import HomePage from './components/Pages/HomePage/HomePage';
import EventPage from "./components/Pages/EventPage/EventPage";
// import MyNav from './components/generalComponents/MyNav/MyNav';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./components/Pages/AboutUs/AboutUs";

function App() {
  // const { loggedIn } = useSelector((state) => state.persistedReducer.global);

  return (
    <>
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
              path="/Login"
              element={
                <CommonLogReg>
                  <Login />
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
              path="/Logout"
              element={
                <CommonLogReg>
                  <Logout />
                </CommonLogReg>
              }
            />
            <Route path="/event/:id" element={<EventPage />} />
            <Route path="/my-profile" element={<ParentProfilePage />} />
            <Route path="/aboutUs" element={<AboutUsPage />} />
            <Route path="/*" element={<ErrorPage />} />
          </Routes>
        </div>
        <div className="Footer">TEL © 2022</div>
      </Router>

      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
