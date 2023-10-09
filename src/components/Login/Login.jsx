import React from 'react'

const Login = () => {
  return (
    <div className='login__page--container'>
        <form className='login__form'>
            <input type="text" className='login__form--input' />
            <button className='login__form--btn'>Login</button>
            <a href="/sign_up" className='login__form--link'>sign up</a>
        </form>
    </div>
  )
}

export default Login
