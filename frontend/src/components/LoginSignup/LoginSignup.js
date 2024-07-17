import React from 'react'
import { Link } from 'react-router-dom';

const LoginSignup= () => {



  return (
    <div className='flex flex-row gap-2 justify-center p-4'>
        <Link className='border-solid border-2 border-black' to="/login">Login</Link>
        <Link className='border-solid border-2 border-black' to="/signup">Signup</Link>
    </div>
  )
}

export default LoginSignup