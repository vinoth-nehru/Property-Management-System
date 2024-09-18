const express = require('express');
const router = express.Router();


const fs = require('fs');
const path = require('path');

const serveStaticFiles = (req, res, next) => {
  const filePath = path.join(__dirname, '../frontend/src/components/images', req.url);

  fs.stat(filePath, (err, stats) => {
    if (err || !stats.isFile()) {
      return next(); // Pass control to the next middleware if file not found
    }

    res.sendFile(filePath);
  });
};
// const app = express();
// app.use('/images', express.static(path.join(__dirname, './images')));

module.exports = router;