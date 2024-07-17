import axios from 'axios';
import React from 'react'

const Logout = ({setIsLoggedIn}) => {

    const handleLogout = async () => {
        try {
          await axios.post('http://localhost:3001/logout');
          localStorage.removeItem('userId');
          setIsLoggedIn(false);
        } catch (error) {
          console.error('Logout error:', error);
        }
      };

  return (
    <div className='border-solid border-2 border-black p-2'>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout