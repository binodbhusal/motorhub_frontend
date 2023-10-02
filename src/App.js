import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/mainpage/MainPage';
import Reserve from './components/Reserve/Reserve';
import MyReservations from './components/MyReservations/MyReservations';
import AddMotor from './components/AddMotor/AddMotor';
import DeleteMotor from './components/DeleteMotor/DeleteMotor';
import NoMatch from './NoMatch/NoMatch';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Reserve" element={<Reserve />} />
          <Route path="/MyReservations" element={<MyReservations />} />
          <Route path="/AddMotor" element={<AddMotor />} />
          <Route path="/DeleteMotor" element={<DeleteMotor />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
