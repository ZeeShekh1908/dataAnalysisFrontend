import React from 'react';
import { Card } from 'react-bootstrap';

const DashboardCard = ({ title, value }) => {
  return (
    <Card className="dashboard-card">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{value}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default DashboardCard;
