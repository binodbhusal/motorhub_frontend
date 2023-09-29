import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavigationPanel from "./components/navigation/NavigationPanel";

function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<NavigationPanel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
