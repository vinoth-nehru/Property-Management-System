import React from 'react';
import { useNavigate } from 'react-router-dom';
import './style/PropertyManagement.css'; // Import the CSS file

const PropertyManagement = () => {
  const navigate = useNavigate();

  const handleViewProperties = () => {
    navigate('/view-properties');
  };

  const handleAddProperty = () => {
    navigate('/add-properties');
  };

  return (
    <div className="property-management">
      <h2>Property Management</h2>
      <div className="property-container">
        <div className="property-button" onClick={handleViewProperties}>
          <img src="/images/view-properties.jpg" alt="View Properties" />
          <p>View Properties</p>
        </div>
        <div className="property-button" onClick={handleAddProperty}>
          <img src="/images/add-property.jpg" alt="Add Property" />
          <p>Add Property</p>
        </div>
      </div>
    </div>
  );
};

export default PropertyManagement;
