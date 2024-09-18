import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PieChart, Pie, Tooltip, Cell, Legend } from 'recharts';

const Dashboard = () => {
  const [revenueData, setRevenueData] = useState([]);

  // Array of colors for the pie chart segments
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#FF6347', '#ADFF2F'];

  useEffect(() => {
    // Fetch data from the backend for dashboard revenue
    axios.get('http://localhost:5000/dashboard/revenue')
      .then(response => {
        // Prepare data for the chart
        setRevenueData(response.data.map(item => ({
          name: item._id, // e.g., "Shop", "House"
          value: item.totalRevenue
        })));
      })
      .catch(error => console.log(error));
  }, []);

  // Custom label function to display percentage
  const renderLabel = ({ name, value, percent }) => {
    return `${name}: ${(percent * 100).toFixed(2)}%`;
  };

  return (
    <div align="center">
      <h2>Revenue Overview</h2>
      <PieChart width={500} height={500}>
        <Pie
          data={revenueData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={100}
          fill="#8884d8"
          label={renderLabel} // Add custom label to show percentage
        >
          {revenueData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </div>
  );
};

export default Dashboard;
