import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './style/Navbar.css'; // Import the CSS file

function Navbar() {
  const location = useLocation();
  
  return (
    <nav>
      <ul>
        <li>
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Dashboard</Link>
        </li>
        <li>
          <Link to="/tenants" className={location.pathname === '/tenants' ? 'active' : ''}>Tenant Management</Link>
        </li>
        <li>
          <Link to="/properties" className={location.pathname === '/properties' ? 'active' : ''}>Property Management</Link>
        </li>
        <li>
          <Link to="/complaints" className={location.pathname === '/complaints' ? 'active' : ''}>Complaints & Maintenance</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
