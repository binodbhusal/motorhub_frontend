import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './components/mainpage/MainPage';
import MyReservations from './components/MyReservations/MyReservations';
import AddMotor from './components/AddMotor/AddMotor';
import DeleteMotor from './components/DeleteMotor/DeleteMotor';
import NoMatch from './NoMatch/NoMatch';
import MotorDetails from './components/details/MotorDetails';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
import PrivateRoutes from './PrivateRoutes/PrivateRoutes';
import Reservation from './components/Reserve/Reservation';
import ReserveConfirm from './components/Reserve/ReserveConfirm';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Routes>
          <Route path="login" element={<Login />} />
          <Route path="sign_up" element={<SignUp />} />
          <Route element={<PrivateRoutes />}>
            <Route path="/" element={<MainPage />} />
            <Route path="/Reserve" element={<Reserve />} />
            <Route path="/MyReservations" element={<MyReservations />} />
            <Route path="/AddMotor" element={<AddMotor />} />
            <Route path="/DeleteMotor" element={<DeleteMotor />} />
            <Route path="/reserveform/:id" element={<Reservation />} />
            <Route path="/reserveconfirm" element={<ReserveConfirm />} />
            <Route path="/MotorDetails/:id" element={<MotorDetails />} />
          </Route>
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
