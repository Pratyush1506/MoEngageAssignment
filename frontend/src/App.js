import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <div>
        <h1>Welcome to the HTTP Dog App</h1>
        <nav>
          <ul>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default App;
