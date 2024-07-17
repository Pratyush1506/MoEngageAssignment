import axios from 'axios';
import React from 'react'

const Logout = () => {

    const handleLogout = async () => {
        try {
          await axios.post('http://localhost:3001/logout');
          // Clear user id from localStorage or state
          localStorage.removeItem('userId');
          // Redirect or handle further actions after successful logout
        } catch (error) {
          console.error('Logout error:', error);
          // Handle logout error if needed
        }
      };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Logout