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
  const fetchUserbyEmail = async (email) => {
    try {
      const response = await axios.get(`http://localhost:3000/api/users?email=${email}`);
      return response.data;
    } catch (error) {
      throw new Error('Error fetching user data');
    }
  };
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
      // console.log(response);
      // Handle the response as needed
      if (response.status === 200) {
        const token = response.headers.get('Authorization');

        console.log('stored token:', token);
        // setMessage('Account created successfully'); // Set message to true
        // Clear the input field
        localStorage.setItem('token', token);
        const userData = await fetchUserbyEmail(formData.email);
        console.log('userDate', userData);
        if (Array.isArray(userData) && userData.length > 0) {
          const userId = userData[0].id;

          console.log('User ID:', userId); // Log specifically the user ID property
          dispatch(setUser(userId));
        } else {
          console.log('User ID not found or undefined');
        }

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
