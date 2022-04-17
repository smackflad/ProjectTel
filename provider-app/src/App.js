import './App.css';
import {
  BrowserRouter as Router,
  Routes
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="Nav">
        Nav
      </div>
      <div className="Body">
        <Routes>
          {/* <Route path="/" element={<bodycomponent>} /> */}
        </Routes>
      </div>
      <div className="Footer">
        Footer
      </div>
    </Router>
  );
}

export default App;
