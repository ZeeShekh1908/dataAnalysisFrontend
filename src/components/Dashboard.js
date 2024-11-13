// frontend/src/components/Dashboard.js
import React from 'react';
import Charts from './Charts';

const Dashboard = ({ data }) => {
  return (
    <div className="dashboard">
      <h1>Data Dashboard</h1>
      <Charts data={data} />
    </div>
  );
};

export default Dashboard;
