import "./App.css";
import HomePage from "./components/Pages/HomePage/HomePage";

import ProviderProfilePage from "./components/Pages/ProviderProfilePage/ProviderProfilePage";
import ErrorPage from "./components/Pages/ErrorPage/ErrorPage";
import NewEventPage from './components/Pages/NewEventPage/NewEventPage';
import OverviewPage from './components/Pages/OverviewPage/OverviewPage';
import MyNav from "./components/sharedComponents/MyNav/MyNav";
import EventsPage from "./components/Pages/EventsPage/EventsPage";
import EventsPageAdmin from "./components/Pages/EventsPageAdmin/EventsPageAdmin";
import UsersPageAdmin from "./components/Pages/UsersPageAdmin/UsersPageAdmin";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Pages/Register-Login-Pages/Login/Login";
import Register from "./components/Pages/Register-Login-Pages/Register/Register";

function App() {
  return (
    <Router>
      <MyNav />
      <div className="Body">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<Register />} />
          <Route path='/newEvent' element={<NewEventPage />} />
          <Route path='/overview' element={<OverviewPage />} />
          <Route path="/eventsPage" element={<EventsPage />} />
          <Route path="/eventsPageAdmin" element={<EventsPageAdmin />} />
          <Route path="/usersPageAdmin" element={<UsersPageAdmin />} />
          <Route path="/profile" element={<ProviderProfilePage />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
      <div className="Footer">
        Footer
      </div>
    </Router>
  );
}

export default App;
