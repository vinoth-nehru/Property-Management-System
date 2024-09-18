const express = require('express');
const router = express.Router();
const Complaint = require('../models/Complaint');

// Add complaint
router.post('/', (req, res) => {
  const complaint = new Complaint(req.body);
  complaint.save().then((complaint) => res.json(complaint));
});

// Get complaints with count
router.get('/', (req, res) => {
  Complaint.find().populate('propertyId').then((complaints) => res.json(complaints));
});

module.exports = router;
