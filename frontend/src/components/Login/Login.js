import React, {useState} from 'react'
import axios from 'axios';

const Login = () => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
      try {
        const response = await axios.post('http://localhost:3001/login', {
          username,
          password,
        });
        console.log('Login successful with ID:', response.data.id);
        // Store user id in localStorage or state for use across components
        localStorage.setItem('userId', response.data.id);
        // Redirect or handle further actions after successful login
      } catch (error) {
        console.error('Login error:', error.response.data);
        // Handle login error (display message, clear inputs, etc.)
      }
    };

  return (
    <div>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login