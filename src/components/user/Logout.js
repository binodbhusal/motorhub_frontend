import { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearUser } from '../../redux/slice/userSlice';
import { destroySession, TOKENKEY } from '../util/auth';

const Log = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
    destroySession();
    dispatch(clearUser());
    window.location.reload();
  }, [dispatch]);
  const handleLogin = () => {
    navigate('/login');
  };
  useEffect(() => {
    if (localStorage.getItem(TOKENKEY)) {
      setIsLoggedIn(true);
    }
  }, [isLoggedIn, handleLogout]);

  if (isLoggedIn) {
    return (
      <div className="flex justify-end ">
        <button
          type="submit"
          onClick={handleLogout}
        >
          <span className="bg-purple  text-white w-full h-10 py-2 px-4
           rounded-lg mx-1"
          >
            Logout
          </span>
        </button>
      </div>
    );
  }

  return (
    <button
      type="button"
      htmlFor="btnlogin"
      onClick={handleLogin}
      className="bg-green  text-white w-full h-10 py-1 px-4
           rounded-lg md:ml-6"
    >
      Login
      {' '}

    </button>
  );
};
export default Log;
