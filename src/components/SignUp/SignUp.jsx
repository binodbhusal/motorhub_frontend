import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { signUp } from '../../redux/slice/userSlice'
import { useNavigate } from 'react-router-dom'
import './signup.scss'

const SignUp = () => {
  const user = useSelector(store => store.user)
  const [name, setName] = useState('')
  const [role, setRole] = useState('guess')

  const dispatch = useDispatch()
  const navigate = useNavigate()

  const onChangeRoleHandler = (e) => {
    setRole(e.target.value)
  }
  const onChangeNameHandler = (e) => {
    setName(e.target.value);
  }
  const signUpFormSumitHandler = (e) => {
    e.preventDefault()
    dispatch(signUp({name, role}))
  }

  useEffect(() => {
    if (!user.logedIn) return
    navigate("/")
  }, [user.logedIn])
  
  return (
    <div className='signup__page--container'>
      <div className='signup__page--shadow'>
        <form className='signup__page--form'>
          <h2 className='signup__page-title'>sign up</h2>
          <input type="text" className='signup__form--input' placeholder='name' onChange={onChangeNameHandler} />
          <div className='role__container'>
            <p className='role__container--text'>role</p>
            <select className='signup__select' onChange={onChangeRoleHandler}>
              <option className="signup__select--option" value="guess">Guess</option>
              <option className="signup__select--option" value="admin">Admin</option>
            </select>
          </div>
          <button className='signup__form--btn' onClick={signUpFormSumitHandler}>sign up</button>
          <p className='signup__form--text'>Already have an account?</p>
          <a href="/log_in" className='signup__form--link'>login</a>
        </form>
      </div>
    </div>
  )
}

export default SignUp
