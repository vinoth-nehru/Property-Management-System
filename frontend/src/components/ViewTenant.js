import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style/ViewTenants.css'; // Import the CSS file

const ViewTenants = () => {
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    // Fetch tenant data from backend
    axios.get('http://localhost:5000/tenants')
      .then(response => {
        setTenants(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="view-tenants">
      <h2>View Tenants</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Property Name</th>
            <th>Property Type</th>
            <th>Start Tenure</th>
            <th>End Tenure</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Rent Amount</th>
          </tr>
        </thead>
        <tbody>
          {tenants.map(tenant => (
            <tr key={tenant._id}>
              <td>{tenant.name}</td>
              <td>{tenant.propertyName}</td>
              <td>{tenant.propertyType}</td>
              <td>{tenant.startTenure}</td>
              <td>{tenant.endTenure}</td>
              <td>{tenant.age}</td>
              <td>{tenant.gender}</td>
              <td>{tenant.rentAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ViewTenants;
