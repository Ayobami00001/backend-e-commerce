const express = require("express");
const app = require ("express")();
require('dotenv').config()
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const userRouter = require('./routes/user.routes')
const cors = require ("cors")
const fs = require('fs');
const path = require('path');










const port = process.env.PORT || 2004;
const URI = process.env.URI || undefined

mongoose.connect(URI)
  .then(() => {
    console.log("lift off'Database neuralink connected successfully");
  })
  .catch((err) => {
    console.log(err);
  });
  app.use(cors({}));
  app.use(express.json())
  app.use(express.urlencoded ({extended: true}));
  app.use(express.static('public'));
  app.use('/', userRouter)




app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// module.exports = app;

