import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './style/Complaints.css'; // Import the CSS file

const Complaints = () => {
  console.log("Component rendered");
  
  const [complaints, setComplaints] = useState([]);

  useEffect(() => {
    // Fetch complaints data from backend
    axios.get('http://localhost:5000/complaints')
      .then(response => {
        setComplaints(response.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="complaints">
      <h2>Complaints & Maintenance</h2>
      <ul>
        {complaints.map(complaint => (
          <li key={complaint._id}>
            <p><strong>Issue:</strong> {complaint.issue}</p>
            <p><strong>Resolved:</strong> {complaint.isResolved ? <span className="resolved">Yes</span> : <span className="unresolved">No</span>}</p>
            <p><strong>Property:</strong> {complaint.propertyId}</p>
            <p><strong>Maintenance Cost:</strong> {complaint.maintenanceCost ? <span className="cost">${complaint.maintenanceCost}</span> : 'N/A'}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Complaints;
