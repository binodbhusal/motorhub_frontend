import React, {useState, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logIn } from '../../redux/slice/userSlice'
import { useNavigate } from 'react-router-dom'
import './login.scss'

const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const user = useSelector(store => store.user)

  const [name, setName] = useState('')

  const  nameInputChangeHandler = (e) => {
    setName(e.target.value)
  }

  const loginHandler = (e) => {
    e.preventDefault()
    dispatch(logIn({name}))
  }
    useEffect(() => {
    if (!user.logedIn) return
    navigate("/")
  }, [user.logedIn])

  return (
    <div className='login__page--container'>
      <div className='login__page--shadow'>
        <form className='login__form'>
            <h2 className='login__page--title'>log in</h2>
            <input type="text" className='login__form--input' onChange={nameInputChangeHandler} />
            <button className='login__form--btn' onClick={loginHandler}>Login</button>
            <p className='signup__form--text'>Don't have an account?</p>
            <a href="/sign_up" className='login__form--link'>sign up</a>
        </form>
      </div>
    </div>
  )
}

export default Login
