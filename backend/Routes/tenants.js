const express = require('express');
const router = express.Router();
const Tenant = require('../Models/Tenant'); // Adjust the path as needed


// Add a tenant
router.post('/', async (req, res) => {
  try {
    const tenant = new Tenant(req.body);
    const savedTenant = await tenant.save();
    res.status(201).json(savedTenant);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all tenants
router.get('/', async (req, res) => {
  try {
    const tenants = await Tenant.find();
    res.status(200).json(tenants);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
