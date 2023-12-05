import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import MainPage from './components/mainpage/MainPage';
import MyReservations from './components/MyReservations/MyReservations';
import AddMotor from './components/AddMotor/AddMotor';
import DeleteMotor from './components/DeleteMotor/DeleteMotor';
import NoMatch from './NoMatch/NoMatch';
import MotorDetails from './components/details/MotorDetails';
import Login from './components/user/Login';
import Signup from './components/user/Signup';
import Reservation from './components/Reserve/Reservation';
import ReserveConfirm from './components/Reserve/ReserveConfirm';
import PrivateRoute from './PrivateRoutes/PrivateRoutes';

function App() {
  return (
    <div className="app-container">
      <Router>
        <ToastContainer />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/" element={<MainPage />} />

          <Route
            path="/reserve"
            element={<PrivateRoute element={<Reservation />} />}
          />
          <Route
            path="/myreservations"
            element={<PrivateRoute element={<MyReservations />} />}
          />
          <Route
            path="/addmotor"
            element={<PrivateRoute element={<AddMotor />} />}
          />
          <Route
            path="/deletemotor"
            element={<PrivateRoute element={<DeleteMotor />} />}
          />
          <Route
            path="/reserveform/:id"
            element={<PrivateRoute element={<Reservation />} />}
          />
          <Route
            path="/reserveconfirm"
            element={<PrivateRoute element={<ReserveConfirm />} />}
          />
          <Route
            path="/motordetails/:id"
            element={<PrivateRoute element={<MotorDetails />} />}
          />

          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
