const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const tenantRoutes = require('./Routes/tenants');
const propertyRoutes = require('./Routes/properties');
const dashboardRoutes = require('./Routes/dashboard');
const complaintRoutes = require('./Routes/complaints');
const imagess = require('./Routes/images');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// mongoose.connect('mongodb://localhost:27017/rental_management', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// app.use('/images', express.static(path.join(__dirname, './images')));

mongoose.connect("mongodb://localhost/rental_management")
.then(()=>console.log('Connected to database'))
.catch(err=> console.error('Coudlnt connect db',err))
app.use('/images', imagess);
app.use('/tenants', tenantRoutes);
app.use('/properties', propertyRoutes);
app.use('/dashboard', dashboardRoutes);
app.use('/complaints', complaintRoutes);

const port=process.env.PORT || 5000
app.listen(port,()=> console.log("Listening on the port "+port+"..."))
