import React, { useRef, useState, useEffect } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from '../../api/axios';
import MainPage from '../mainpage/MainPage';

const LOGIN_URL = 'http://localhost:3000/users/sign_in';

const Login = () => {
  const emailRef = useRef();
  const errRef = useRef();

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPwd, setShowPwd] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [formData.email, formData.password]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(LOGIN_URL, formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const { token } = response.data;
      localStorage.setItem('token', token);

      setFormData({ email: '', password: '' });
      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg('No Server Response');
      } else if (err.response?.status === 400) {
        setErrMsg('Missing email or password');
      } else if (err.response?.status === 401) {
        setErrMsg('Unauthorized');
      } else {
        setErrMsg('Login Failed');
      }
      errRef.current.focus();
    }
  };

  if (success) {
    return <MainPage />;
  }

  return (
    <section className="log-section">
      <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
        {errMsg}
      </p>
      <h1 className="text-xl">Sign In</h1>
      <form onSubmit={handleSubmit}>
        {/* Your form inputs and UI elements */}
        <div>
          <label htmlFor="email" className="flex justify-start items-center mt-2">
            Email:
            <input
              type="email"
              id="email"
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              value={formData.email}
              required
              ref={emailRef}
              name="email"
              className="text-lg rounded-md m-1 w-full px-2"
            />
          </label>
        </div>

        <label htmlFor="pwd" className="flex justify-start items-center mt-2">
          Password:
          <div className="password-input">
            <input
              type={showPwd ? 'text' : 'password'}
              id="pwd"
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              value={formData.password}
              name="password"
              className="text-lg rounded-md m-1 w-full px-2"
              required
            />

            <div
              className="password-toggle"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  setShowPwd(!showPwd);
                }
              }}
              onClick={() => setShowPwd(!showPwd)}
            >
              {showPwd ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
        </label>
        <button
          type="submit"
          className={`${
            formData.email && formData.password
              ? 'bg-primary text-yellow-50 mt-3 rounded-lg mx-1'
              : 'bg-innactiveBtn mt-3 text-yellow-50  rounded-lg mx-1'
          }`}
        >
          Sign In
        </button>
      </form>
      <p>
        Need an Account?
        <br />
        <span className="line bg-secondary px-2 rounded-lg">
          <a href="SignUp">Sign Up</a>
        </span>
      </p>
    </section>
  );
};

export default Login;
