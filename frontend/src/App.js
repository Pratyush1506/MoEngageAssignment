import './App.css';
import LoginSignup from './components/LoginSignup/LoginSignup';
import HomeScreen from './components/HomeScreen/HomeScreen';
import { useState } from 'react';
// import axios from 'axios';

function App() {


  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('userId'));


  return (
    <div className="App">
      <div>
        <h1>Welcome to the App</h1>
        <div>

          {isLoggedIn && (
            <HomeScreen setIsLoggedIn={setIsLoggedIn} />
          )}

          {!isLoggedIn && (
            <LoginSignup />
          )}

        </div>
      </div>
    </div>
  );
}

export default App;
