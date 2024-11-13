// src/components/TopNavbar.js
import React from 'react';
import '../styles/navbar.css';
import adminLogo from '../assets/admin.jpg'; // Make sure to have this image in your assets folder
import { FaBars } from 'react-icons/fa';
  
  function TopNavbar()  {
    return (
      <div className="navbar">
        {/* Left section - can add a toggle button if needed */}
        <div className="navbar-left">
          <FaBars className="menu-icon" />
          <h2 className="navbar-title">Dashboard</h2>
        </div>
  
        {/* Right section - Admin logo */}
        <div className="navbar-right">
          <img src={adminLogo} alt="Admin Logo" className="admin-logo" />
        </div>
      </div>
  );
}

export default TopNavbar;
