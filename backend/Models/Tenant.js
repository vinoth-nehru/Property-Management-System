const mongoose = require('mongoose');

const TenantSchema = new mongoose.Schema({
  name: String,
  propertyName: String,
  propertyType: String,
  startTenure: String,
  endTenure: String,
  age: Number,
  gender: String,
  rentAmount: Number
});

module.exports = mongoose.model('Tenant', TenantSchema);
