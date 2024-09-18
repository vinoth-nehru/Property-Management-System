import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import TenantManagement from './components/TenantManagement';
import AddTenant from './components/AddTenant'; // Assuming AddTenant component is in the same directory
import ViewTenants from './components/ViewTenant';
import PropertyManagement from './components/PropertyManagement';
import AddProperty from './components/AddProperty';
import ViewProperty from './components/ViewProperty';
import Complaints from './components/Complaints';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route exact path="/tenants" element={<TenantManagement />} />
          <Route path="/add-tenant" element={<AddTenant/>} />
          <Route path="/view-tenants" element={<ViewTenants/>} />
          <Route path="/properties" element={<PropertyManagement />} />
          <Route path="/add-properties" element={<AddProperty/>} />
          <Route path="/view-properties" element={<ViewProperty/>} />
          <Route path="/complaints" element={<Complaints />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
