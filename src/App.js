import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Portfolio from "./Components/Portfolio";
import Services from "./Components/Services";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Portifolio" element={<Portfolio />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
