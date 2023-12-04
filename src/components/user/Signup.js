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
    <section className="log-section">
      <p className={errMsg ? 'errmsg' : 'offscreen'} aria-live="assertive">
        {errMsg}
      </p>
      <h1 className="text-xl">Register</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">
          Username:
          <input
            type="text"
            id="username"
            autoComplete="off"
            onChange={(e) => setUser(e.target.value)}
            value={user}
            required
          />
        </label>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            autoComplete="off"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            onChange={(e) => setPwd(e.target.value)}
            value={pwd}
            required
          />
        </label>
        <label htmlFor="confirm_pwd">
          Confirm Password:
          <input
            type="password"
            id="confirm_pwd"
            onChange={(e) => setMatchPwd(e.target.value)}
            value={matchPwd}
            required
          />
        </label>
        <button
          type="submit"
          disabled={!user || !email || !pwd || !matchPwd || pwd !== matchPwd}
        >
          Sign Up
        </button>
      </form>

      <p>
        Already registered?
        <br />
        <span className="line bg-secondary px-2 rounded-lg">
          <a href="/LogIn">Sign In</a>
        </span>
      </p>
    </section>
  );
};

export default Signup;
