import React from 'react'

const SignUp = () => {
  return (
    <div className='signup__page--container'>
      <form className='signup__page--form'>
        <input type="text" className='signup__form--input' placeholder='name' />
        <button className='signup__form--btn'>Login</button>
        <a href="/log_in" className='signup__form--link'>login up</a>
      </form>
    </div>
  )
}

export default SignUp
