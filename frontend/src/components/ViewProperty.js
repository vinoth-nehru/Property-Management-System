import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style/Property.css'; // Import the CSS file

const ViewProperty = () => {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    // Fetch properties from the backend
    axios.get('http://localhost:5000/properties')
      .then(response => {
        setProperties(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="view-property">
      <h2>View Properties</h2>
      <ul>
        {properties.map(property => (
          <li key={property._id} className="property-item">
            <p><strong>Unit:</strong> {property.propertyName}</p>
            <p><strong>Address:</strong> {property.address}</p>
            <p><strong>Tenant:</strong> {property.currentTenant ? property.currentTenant.name : 'Vacant'}</p>
            <p><strong>Rent:</strong> ${property.rentalPrice}</p>
            <p><strong>Overdue:</strong> {property.isOverdue ? `Yes ($${property.overdueAmount})` : 'No'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ViewProperty;
