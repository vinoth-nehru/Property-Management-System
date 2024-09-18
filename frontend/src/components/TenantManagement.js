import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style/TenantManagement.css'; // Import the CSS file

const TenantManagement = () => {
  const navigate = useNavigate();

  const handleViewTenants = () => {
    navigate('/view-tenants');
  };

  const handleAddTenant = () => {
    navigate('/add-tenant');
  };

  return (
    <div align="center">
      <h2 align >Tenant Management</h2>
    <div className="tenant-management">
      <div className="tenant-button" onClick={handleViewTenants}>
        <img src="http://localhost:5000/images/t1.jpeg" alt="View Tenants" />
        <p>View Tenants</p>
      </div>
      <div className="tenant-button" onClick={handleAddTenant}>
        <img src="http://localhost:5000/images/t2.png" alt="Add Tenant" />
        <p>Add Tenant</p>
      </div>
      </div></div>
  );
};

export default TenantManagement;
