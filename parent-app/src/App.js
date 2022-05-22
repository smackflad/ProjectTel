import './App.css';
import HomePage from './components/Pages/HomePage/HomePage';
import MyNav from './components/generalComponents/MyNav/MyNav';
import ParentProfilePage from './components/Pages/ParentProfilePage/ParentProfilePage';
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
          <Route path="/" element={<ParentProfilePage />} />
        </Routes>
      </div>
      <div className="Footer">
        Footer
      </div>
    </Router>
  );
}

export default App;
