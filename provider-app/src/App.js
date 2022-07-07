import "./App.css";
import HomePage from "./components/Pages/HomePage/HomePage";

import ProviderProfilePage from "./components/Pages/ProviderProfilePage/ProviderProfilePage";
import ErrorPage from "./components/Pages/ErrorPage/ErrorPage";
import NewEventPage from "./components/Pages/NewEventPage/NewEventPage";
import OverviewPage from "./components/Pages/OverviewPage/OverviewPage";
import MyNav from "./components/sharedComponents/MyNav/MyNav";
import EventsPage from "./components/Pages/EventsPage/EventsPage";
import EventsPageAdmin from "./components/Pages/EventsPageAdmin/EventsPageAdmin";
import UsersPageAdmin from "./components/Pages/UsersPageAdmin/UsersPageAdmin";
import { ToastContainer } from "react-toastify";
import UserCreationPage from "./components/Pages/UserCreationPage/UserCreationPage";
import EventsOverviewPage from "./components/Pages/EventsOverviewPage/EventsOverviewPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Pages/Register-Login-Pages/Login/Login";
import CommonLogReg from "./components/Pages/Register-Login-Pages/CommonLogReg/CommonLogReg";
import Register from "./components/Pages/Register-Login-Pages/Register/Register";
import RegisterStep2 from "./components/Pages/Register-Login-Pages/Register/RegisterStep2";
import RegisterStep3 from "./components/Pages/Register-Login-Pages/Register/RegisterStep3";
import Logout from "../src/components/Pages/Register-Login-Pages/Logout/Logout";
import AboutUs from "./components/Pages/AboutUs/AboutUs";

function App() {
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
              path="/Register3"
              element={
                <CommonLogReg>
                  <RegisterStep3 />
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
            <Route path="/newEvent" element={<NewEventPage />} />
            <Route path="/overview" element={<OverviewPage />} />
            <Route path="/eventsPage" element={<EventsPage />} />
            <Route path="/eventsPageAdmin" element={<EventsPageAdmin />} />
            <Route path="/usersPageAdmin" element={<UsersPageAdmin />} />
            <Route path="/profile" element={<ProviderProfilePage />} />
            <Route path="/*" element={<ErrorPage />} />
            <Route path="/userCreationPage" element={<UserCreationPage />} />
            <Route
              path="/eventsOverviewPage"
              element={<EventsOverviewPage />}
            />
            <Route path="/AboutUs" element={<AboutUs />} />
          </Routes>
        </div>
        <div className="Footer">Footer</div>
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
