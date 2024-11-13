// frontend/src/App.js
import React, { useState, useEffect } from 'react';
import Dashboard from './components/Dashboard';
import Filters from './components/Filters';
import api from './api';
import './styles/navbar.css';
import TopNavbar from './components/TopNavbar';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from Flask API
    api.getData().then(response => {
      setData(response.data);
    });
  }, []);

  return (
    <div className="App" style={{marginLeft: '1rem'}}>
      <TopNavbar/>
      <div className='content'>
      <Filters data={data} />  {/* Passing data to Filters component */}
      <Dashboard data={data} />
    </div>
    </div>
  );
}

export default App;
