import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomeScreen from "./HomeScreen";
import PrivacyPolicyScreen from "./PrivacyPolicyScreen";

function App() {
  return (
      <BrowserRouter>
        <div className="container">
            <Routes>
              <Route path="/" element={<HomeScreen/>} />
              <Route path="/privacy" element={<PrivacyPolicyScreen/>} />
            </Routes>
        </div>
      </BrowserRouter>
  );
}

export default App;
