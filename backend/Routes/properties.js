const express = require('express');
const router = express.Router();
const Property = require('../Models/Property');


// Add property
router.post('/', (req, res) => {
  const property = new Property(req.body);
  property.save().then((property) => res.json(property));
});

// Get properties with tenants
router.get('/', (req, res) => {
  Property.find().populate('currentTenant').then((properties) => res.json(properties));
});

module.exports = router;
