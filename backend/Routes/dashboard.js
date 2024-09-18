const express = require('express');
const router = express.Router();
const Property = require('../Models/Property');

// Dashboard data: Revenue from different rental types, overdue, etc.
router.get('/revenue', (req, res) => {
  Property.aggregate([
    {
      $group: {
        _id: '$propertyType',
        totalRevenue: { $sum: '$rentalPrice' },
        overdue: { $sum: '$overdueAmount' }
      }
    }
  ]).then((data) => res.json(data));
});

module.exports = router;
