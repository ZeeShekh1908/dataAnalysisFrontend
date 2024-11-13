// frontend/src/components/Charts.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Charts = ({ data }) => {
  const chartData = {
    labels: data.map(item => item.year), // X-axis data from your JSON
    datasets: [
      {
        label: 'Intensity',
        data: data.map(item => item.intensity), // Y-axis data
        borderColor: 'rgba(75,192,192,1)',
        backgroundColor: 'rgba(75,192,192,0.2)',
        fill: true,
      },
      {
        label: 'Likelihood',
        data: data.map(item => item.likelihood), // Another dataset
        borderColor: 'rgba(153,102,255,1)',
        backgroundColor: 'rgba(153,102,255,0.2)',
        fill: true,
      },
    ],
  };

  return (
    <div className="chart-container">
      <Line data={chartData} />
    </div>
  );
};

export default Charts;
