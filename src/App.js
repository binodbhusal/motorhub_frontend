import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import MainPage from './components/mainpage/MainPage';
import Reserve from './components/Reserve/Reserve';
import MyReservations from './components/MyReservations/MyReservations';
import AddMotor from './components/AddMotor/AddMotor';
import DeleteMotor from './components/DeleteMotor/DeleteMotor';
import NoMatch from './NoMatch/NoMatch';
import MotorDetails from './components/details/MotorDetails';
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';

function App() {
  const user = useSelector((store) => store.user);
  return (
    <div className="app-container">
      <Router>
        <Routes>
          {!user.logedIn ? (
            <>
              <Route path="login" element={<Login />} />
              <Route path="sign_up" element={<SignUp />} />
            </>
          ) : (
            <>
              <Route path="/" element={<MainPage />} />
              <Route path="/Reserve" element={<Reserve />} />
              <Route path="/MyReservations" element={<MyReservations />} />
              <Route path="/AddMotor" element={<AddMotor />} />
              <Route path="/DeleteMotor" element={<DeleteMotor />} />
              <Route path="/MotorDetails/:id" element={<MotorDetails />} />
            </>
          )}
          <Route path="*" element={<NoMatch />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
