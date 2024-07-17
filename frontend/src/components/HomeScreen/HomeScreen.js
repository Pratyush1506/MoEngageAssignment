import React from 'react'
import { Link } from 'react-router-dom';
import Logout from '../Logout/Logout';


const HomeScreen = ({setIsLoggedIn}) => {
  return (
    <div className='flex flex-row justify-center gap-4 my-4'>
        <Link className='border-solid border-2 border-black p-2' to="/search">Search</Link>
        <Link className='border-solid border-2 border-black p-2' to="/lists">Lists</Link>
        <Logout setIsLoggedIn={setIsLoggedIn} />
    </div>
  )
}

export default HomeScreen