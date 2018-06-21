'use strict';
const bodyParser = require('body-parser')
const express = require('express');
const session = require('express-session');
const passport = require('passport');
const db = require('./db')

// const path = require("path");
// const volleyball = require("volleyball");
// const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.json())

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) =>
  db.models.user
    .scope('populated')
    .findById(id)
    .then(user => done(null, user))
    .catch(done));

app.use(passport.initialize());
app.use(passport.session());
// // logging middlewre
// app.use(volleyball);

// // static middleware
// app.use(express.static(path.join(__dirname, "../public")));

// // body parsing middleware
// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({ extended: true }));

// app.use("/api", require("./api")); // include our routes!
app.use('/auth', require('./auth'))

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// }); // Send index.html for any other requests

// error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

module.exports = app;
