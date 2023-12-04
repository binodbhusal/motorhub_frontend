import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../../api/axios'; // Import the Axios instance

const Signup = () => {
  const [user, setUser] = useState('');
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [matchPwd, setMatchPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const navigate = useNavigate();

  const REGISTER_URL = '/users'; // Use a relative path here

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation logic here
    if (!user || !email || !pwd || !matchPwd) {
      setErrMsg('Please fill in all fields.');
      return;
    }

    if (pwd !== matchPwd) {
      setErrMsg('Passwords do not match.');
      return;
    }

    try {
      await axios.post(REGISTER_URL, {
        user: {
          name: user,
          email,
          password: pwd,
        },
      });

      setUser('');
      setEmail('');
      setPwd('');
      setMatchPwd('');
      navigate('/LogIn');
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 409) {
        setErrMsg('Username Taken');
      } else {
        setErrMsg('Registration Failed');
      }
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center md:bg-l-green">
      <div className="bg-grey rounded-2xl flex md:p-6 ">
        <div className="mx-2 md:p-6 md:ml-6">
          {' '}
          <p className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
            {errMsg}
          </p>
          <h4 className="text-green mb-4 text-xl font-semibold mt-3">Please Register</h4>
          <form onSubmit={handleSubmit}>

            <div>
              <label htmlFor="username">
                Username
                <div>
                  <input
                    type="text"
                    id="username"
                    autoComplete="off"
                    onChange={(e) => setUser(e.target.value)}
                    value={user}
                    required
                    className="h-10 w-[305px] rounded-lg border-2 outline-0 focus:px-2"
                  />
                </div>

              </label>
            </div>
            <div>
              <label htmlFor="email">
                Email
                <div>
                  <input
                    type="email"
                    id="email"
                    autoComplete="off"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    className="h-10 w-[305px] rounded-lg border-2 outline-0 focus:px-2"

                  />
                </div>
              </label>
            </div>
            <div>
              <label htmlFor="password">
                Password:
                <div>
                  <input
                    type="password"
                    id="password"
                    onChange={(e) => setPwd(e.target.value)}
                    value={pwd}
                    required
                    className="h-10 w-[305px] rounded-lg border-2 outline-0 focus:px-2"
                  />
                </div>
              </label>
            </div>
            <div>
              <label htmlFor="confirm_pwd">
                Confirm Password:
                <div>
                  <input
                    type="password"
                    id="confirm_pwd"
                    onChange={(e) => setMatchPwd(e.target.value)}
                    value={matchPwd}
                    required
                    className="h-10 w-[305px] rounded-lg border-2 outline-0 focus:px-2"
                  />
                </div>
              </label>
            </div>
            <button
              type="submit"
              disabled={!user || !email || !pwd || !matchPwd || pwd !== matchPwd}
              className="bg-purple text-yellow-50 mt-3 text-white w-[95%] h-10  rounded-lg mx-1"
            >
              Sign Up
            </button>
          </form>

          <p className="mt-2 text-green">
            Already registered?
            <br />
            <span className="text-blue bg-white p-1 px-3 rounded-lg">
              <a href="/LogIn">Sign In</a>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Signup;
