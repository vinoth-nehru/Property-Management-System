import React, { useState } from 'react';
import axios from 'axios';
import './style/AddTenant.css';
const AddTenant = () => {
    
  const [tenant, setTenant] = useState({
    name: '',
    propertyName: '',
    propertyType: '',
    age: '',
    startTenure:'',
    endTenure:'',
    gender: '',
    rentAmount: ''
  });

  const handleChange = (e) => {
    setTenant({ ...tenant, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/tenants', tenant)
      .then(() => {
        alert('Tenant added successfully!');
        setTenant({
          name: '',
          propertyName: '',
          propertyType: '',
          age: '',
          startTenure:'',
          endTenure:'',
          gender: '',
          rentAmount: ''
        });
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="add-tenant-form">
      <h2>Add Tenant</h2>
      <form onSubmit={handleSubmit}>
        <input name="name" placeholder="Name" value={tenant.name} onChange={handleChange} required />
        <input name="propertyName" placeholder="Property Name" value={tenant.propertyName} onChange={handleChange} required />
        <input name="propertyType" placeholder="Property Type" value={tenant.propertyType} onChange={handleChange} required />
        <input name="startTenure" placeholder="Start Tenure Date" value={tenant.startTenure} onChange={handleChange} required />
        <input name="endTenure" placeholder="End Tenure Date" value={tenant.endTenure} onChange={handleChange} required />
        <input name="age" placeholder="Age" value={tenant.age} onChange={handleChange} required />
        <input name="gender" placeholder="Gender" value={tenant.gender} onChange={handleChange} required />
        <input name="rentAmount" placeholder="Rent Amount" value={tenant.rentAmount} onChange={handleChange} required />
        <button type="submit">Add Tenant</button>
      </form>
    </div>
  );
};

export default AddTenant;
