import './App.css';
import HomePage from './components/Pages/HomePage/HomePage';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="Nav">
        Nav
      </div>
      <div className="Body">
        <Routes>
          <Route path="/" element={<HomePage />} />
        </Routes>
      </div>
      <div className="Footer">
        Footer
      </div>
    </Router>
  );
}

export default App;
