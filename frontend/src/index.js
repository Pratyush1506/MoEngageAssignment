import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';
import Search from './components/Search/Search';
import Logout from './components/Logout/Logout';
import Lists from './components/Lists/Lists';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/search",
    element: <Search />,
  },
  {
    path: "/lists",
    element: <Lists />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Logout />
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
