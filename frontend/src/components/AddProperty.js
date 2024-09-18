import React, { useState } from 'react';
import axios from 'axios';
import './style/Property.css'; // Import the CSS file

const AddProperty = () => {
  const [property, setProperty] = useState({
    propertyName: '',
    propertyType:'',
    address: '',
    currentTenant: '',
    rentalPrice: '',
  });

  const handleChange = (e) => {
    setProperty({ ...property, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/properties', property)
      .then(() => {
        alert('Property added successfully!');
        setProperty({
          propertyName: '',
          propertyType:'',
          address: '',
          currentTenant: '',
          rentalPrice: '',
        });
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="add-property-form">
      <h2>Add Property</h2>
      <form onSubmit={handleSubmit}>
        <input name="propertyName" placeholder="Property Name" value={property.propertyName} onChange={handleChange} required />
        <input name="propertyType" placeholder="Property Type" value={property.propertyType} onChange={handleChange} required />
        <input name="address" placeholder="Address" value={property.address} onChange={handleChange} required />
        <input name="rentalPrice" placeholder="Rental Price" value={property.rentalPrice} onChange={handleChange} required />
        <input name="currentTenant" placeholder="Tenant ID (if applicable)" value={property.currentTenant} onChange={handleChange} />
        <button type="submit">Add Property</button>
      </form>
    </div>
  );
};

export default AddProperty;
