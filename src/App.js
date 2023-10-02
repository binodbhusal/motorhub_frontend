import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./components/mainpage/MainPage";
import LifeStyle from "./components/lifestyle/LifeStyle";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/lifestyle" element={<LifeStyle />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
