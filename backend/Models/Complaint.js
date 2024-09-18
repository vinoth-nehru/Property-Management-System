const mongoose = require('mongoose');

const ComplaintSchema = new mongoose.Schema({
  issue: String,
  propertyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Property' },
  isResolved: Boolean,
  maintenanceCost: Number
});

module.exports = mongoose.model('Complaint', ComplaintSchema);
