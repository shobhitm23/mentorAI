import React from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleFAQ = () => {
    navigate('/faq');
  };

  return (
    <div className="navbar">
      <button className="login" onClick={handleLogin}>Login</button>
      <button className="faq" onClick={handleFAQ}>FAQ</button>
    </div>
  );
}

export default NavBar;