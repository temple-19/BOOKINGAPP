import './navbar.css';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import React from 'react';

const Navbar = () => {
  const { user } = useContext(AuthContext);

  const logout = () => {
    //to clear cookies
    document.cookie.split(';').forEach(function (c) {
      document.cookie = c
        .replace(/^ +/, '')
        .replace(/=.*/, '=;expires=' + new Date().toUTCString() + ';path=/');
    });
    // Clear local storage
    localStorage.clear();
    // Reload the page
    window.location.reload();
  };

  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{ color: 'inherit', textDecoration: 'none' }}>
          <span className="logo">Temple-booking</span>
        </Link>
        {user ? (
          <div className="navItems">
            <span>{user.username}</span>
            <button onClick={logout} className="option">
              Logout
            </button>
          </div>
        ) : (
          <div className="navItems">
            <Link
              to="/register"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              <span className="option">Register</span>
            </Link>
            <Link
              to="/login"
              style={{ color: 'white', textDecoration: 'none' }}
            >
              <span className="option">Login</span>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
