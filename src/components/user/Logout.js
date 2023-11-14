import { useEffect, useState, useCallback } from 'react';

import { destroySession, TOKENKEY } from '../../util/auth';

const Log = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = useCallback(() => {
    setIsLoggedIn(false);
    destroySession();
    window.location.reload();
  }, []);

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
          <span className="">Logout</span>
        </button>
      </div>
    );
  }

  return (
    <p>Please Login</p>
  );
};
export default Log;
