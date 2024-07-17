import React, {useState} from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = async () => {
      try {
        const response = await axios.post('http://localhost:3001/login', {
          username,
          password,
        });
        console.log('Login successful with ID:', response.data.id);
        localStorage.setItem('userId', response.data.id);
        navigate('/');
      } catch (error) {
        console.error('Login error:', error.response.data);
      }
    };

  return (
    <div className='flex flex-col justify-center items-center gap-8'>
      <h2 className='text-3xl'>Login</h2>
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
      </div>
      <button className='border-solid border-2 border-black p-2' onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login