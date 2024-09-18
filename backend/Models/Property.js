const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
  propertyName: String,
  propertyType: String,
  address: String,
  currentTenant: String,
  rentalPrice: Number,
});

module.exports = mongoose.model('Property', PropertySchema);

// {
//   "_id": {
//     "$oid": "66e92b49f084b4384a3062f2"
//   },
//   "unitName": "Downtown Apartment",
//   "address": "123 Main Street, Cityville",
//   "currentTenant": "64fa9a23c123f847289034af",
//   "rentalPrice": 1200,
//   "isOverdue": false,
//   "overdueAmount": 0
// }