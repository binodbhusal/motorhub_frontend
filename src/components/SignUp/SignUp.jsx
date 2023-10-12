import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUp } from '../../redux/slice/userSlice';
import './signup.scss';

const SignUp = () => {
  const user = useSelector((store) => store.user);
  const [name, setName] = useState('');
  const [role, setRole] = useState('guest');
  const [errorMessage, setErrorMessage] = useState('');

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChangeRoleHandler = (e) => {
    setRole(e.target.value);
  };
  const onChangeNameHandler = (e) => {
    setName(e.target.value);
  };
  const signUpFormSumitHandler = (e) => {
    e.preventDefault();
    if (name === '') {
      setErrorMessage('name must not be empty');
      return;
    }
    dispatch(signUp({ name, role }));
  };

  useEffect(() => {
    if (!user.logedIn) return;
    navigate('/');
  }, [user.logedIn, navigate]);

  useEffect(() => {
    setErrorMessage(user.error);
  }, [user.error, setErrorMessage]);

  return (
    <div className="signup__page--container">
      <div className="signup__page--shadow">
        <form className="signup__page--form">
          <h2 className="signup__page-title">sign up</h2>
          <input type="text" className="signup__form--input" placeholder="name" onChange={onChangeNameHandler} />
          <div className="role__container">
            <p className="role__container--text">role</p>
            <select className="signup__select" onChange={onChangeRoleHandler}>
              <option className="signup__select--option" value="guest">Guest</option>
              <option className="signup__select--option" value="admin">Admin</option>
            </select>
          </div>
          <p className="signup__error">{errorMessage}</p>
          <button className="signup__form--btn" onClick={signUpFormSumitHandler} type="submit">sign up</button>
          <p className="signup__form--text">Already have an account?</p>
          <a href="/login" className="signup__form--link">login</a>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
