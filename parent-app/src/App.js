import './App.css';
import HomePage from './components/Pages/HomePage/HomePage';
import EventPage from './components/Pages/EventPage/EventPage';
import MyNav from './components/generalComponents/MyNav/MyNav';

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
            <Route path="/event" element={<EventPage />} />
          </Routes>
        </div>
        <div className="Footer">
          Footer
        </div>
      </Router>
  );
}

export default App;
