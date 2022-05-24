import './App.css';
import EventsPage from './Components/GeneralComponents/Pages/EventsPage/EventsPage';
// import MyNav from './components/generalComponents/MyNav/MyNav';
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<EventsPage />} />
      </Routes>
    </Router>
  );
}

export default App;
