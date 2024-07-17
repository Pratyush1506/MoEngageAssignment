import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSignup = async () => {
      try {
        const response = await axios.post('http://localhost:3001/signup', { username, password });
        alert(response.data);
      } catch (error) {
        alert('Signup failed');
      }
    };

  return (
    <div className='flex flex-col justify-center items-center gap-8'>
      <h2 className='text-3xl'>Signup</h2>
      <div className="input-group flex flex-row gap-2">
      <input
        className='border-solid border-2 border-black p-1'
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        className='border-solid border-2 border-black p-1'
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className='border-solid border-2 border-black p-1' onClick={handleSignup}>Signup</button>
      </div>
    </div>
  )
}

export default Signup