import './App.css';
import HomePage from './components/Pages/HomePage/HomePage';
import MyNav from './components/sharedComponents/MyNav/MyNav';
import NewEventPage from './components/Pages/NewEventPage/NewEventPage';
import OverviewPage from './components/Pages/OverviewPage/OverviewPage';

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
          <Route path='/newEvent' element={<NewEventPage />} />
          <Route path='/overview' element={<OverviewPage />} />
        </Routes>
      </div>
      <div className="Footer">
        Footer
      </div>
    </Router>
  );
}

export default App;
