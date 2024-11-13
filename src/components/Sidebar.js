// src/components/Sidebar.js
import React from 'react';
import '../styles/sidebar.css';
import { FaChartBar, FaFilter, FaHome } from 'react-icons/fa';

function Sidebar() {
  return (
    <div className="sidebar">
      <h2 className="logo">Dashboard</h2>
      <ul className="sidebar-menu">
        <li><FaHome /> Home</li>
        <li><FaChartBar /> Analytics</li>
        <li><FaFilter /> Filters</li>
      </ul>
    </div>
  );
}

export default Sidebar;
