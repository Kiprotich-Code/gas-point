import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './form.css'

function Login(){
  const navigate = useNavigate('')

  //Temporary function
  //Navigates to home page - Place Order when login button is clicked
  const handleLogin = (e) => {
    e.preventDefault()

    navigate('/place_order')
  }

  return(
    <div className='center h-80v'>
      <div className='auth'>
        <h1>Log in</h1>
        <form name='login_form'>
          <input 
            type='email' 
            placeholder="Enter your email" />

          <input 
            type='password'
            placeholder='Enter your password'/>

          <button type='submit' onClick={handleLogin}>Login</button>
        </form>
        <p>
          Don't have and account? 
          <Link to='/register'>Create one here</Link>
        </p>
      </div>
    </div>
  )
}

export default Login