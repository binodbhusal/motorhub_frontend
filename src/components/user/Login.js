import React, { useRef, useState, useEffect } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from '../../api/axios';

import 'react-toastify/dist/ReactToastify.css';
import { setUser } from '../../redux/slice/userSlice';

const LOGIN_URL = 'http://localhost:3000/users/sign_in';

const Login = () => {
  const dispatch = useDispatch();
  const emailRef = useRef();
  const errRef = useRef();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [showPwd, setShowPwd] = useState(false);
  const [errMsg, setErrMsg] = useState('');

  useEffect(() => {
    emailRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg('');
  }, [formData.email, formData.password]);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create a JSON object from formData
      const jsonData = JSON.stringify({
        user: {
          email: formData.email,
          password: formData.password,
        },
      });

      // Make a POST request using Axios with the JSON data
      const response = await axios.post(
        LOGIN_URL,
        jsonData,
        {
          headers: {
            'Content-Type': 'application/json', // Set the content type to JSON
          },
        },
      );
      if (response.status === 200) {
        const token = response.headers.get('Authorization');

        localStorage.setItem('token', token);

        const userId = response.data.status.data.id;

        dispatch(setUser(userId));

        setFormData({
          email: '',
          password: '',
        });
        navigate('/');
        toast.success('Login successful.', { type: toast.TYPE.SUCCESS });
      } else {
        navigate('/login');
        toast.error('Please check your email and password', { type: toast.TYPE.ERROR });
      }
    } catch (error) {
      navigate('/login');
      toast.error('Please check your email and password', { type: toast.TYPE.ERROR });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center md:bg-l-green w-full">
      <div className="bg-grey rounded-2xl flex md:p-6 ">
        <div className="ml-12 w-full  md:ml-6">

          <p ref={errRef} className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
            {errMsg}
          </p>
          <p className="text-green mb-4 text-1xl  mt-3">Welcome to Motorhub</p>

          <h4 className="text-green mb-4 text-xl font-semibold mt-3">Please Log in</h4>
          <form onSubmit={handleSubmit}>
            {/*  form inputs and UI elements */}
            <div>
              <label htmlFor="email" className="flex justify-start items-center mt-2 ">
                Email
                <input
                  type="email"
                  id="email"
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  value={formData.email}
                  required
                  ref={emailRef}
                  name="email"
                  className=" rounded-lg  emailtxt focus:px-2"
                />
              </label>
            </div>

            <label htmlFor="pwd" className="flex justify-start items-center mt-2">
              Password
              <div className="password-input flex items-center">
                <input
                  type={showPwd ? 'text' : 'password'}
                  id="pwd"
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  value={formData.password}
                  name="password"
                  className="rounded-lg  passtxt mt-2 ml-[-12] focus:px-2"
                  required
                />

                <div
                  className="relative right-[20px] mt-2"
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
                  ? 'bg-green text-yellow-50 mt-3 text-white w-[95%] h-9  rounded-lg mx-1'
                  : 'bg-purple mt-3 text-white w-[95%] h-9 rounded-lg mx-1'
              }`}
            >
              Log In
            </button>
          </form>
          <p className="mt-3">
            <span className="text-green">Need an Account?</span>
            <br />
            <span>
              <a href="SignUp" className="text-blue hover:text-d-green">Sign Up</a>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};
export default Login;
