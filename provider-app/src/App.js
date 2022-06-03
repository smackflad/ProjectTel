import './App.css';
import EventsPage from "./components/Pages/EventsPage/EventsPage";
import EventsPageAdmin from "./components/Pages/EventsPageAdmin/EventsPageAdmin";
import UsersPageAdmin from "./components/Pages/UsersPageAdmin/UsersPageAdmin";
// import EventPage from "./components/Pages/EventPage/EventPage";
import MyNav from './components/GeneralComponents/MyNav/MyNav';
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";

function App() {
  return (
    
    <Router>
      <MyNav />
      <div className="Body">
        <Routes>
          <Route path="/" element={<EventsPage />} />
          {/* <Route path="/event" element={<EventPage />} /> */}
        </Routes>
      </div>
      <div className="Footer">
        Footer
      </div>
    </Router>
  );
}

export default App;
