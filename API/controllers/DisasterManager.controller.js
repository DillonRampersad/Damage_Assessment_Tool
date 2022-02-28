const mongoose = require("mongoose");
const disasterManager = require("../db/models/DisasterManagers.model");
const passport = require("passport");
const _ = require("lodash");

exports.disasterManager_get_all = (req, res, next) => {
  //return an array of all the damage assessments made that is stored on the database.
  disasterManager
    .find({})
    .then((DisasterManagers) => {
      res.send(DisasterManagers);
    })
    .catch((e) => {
      res.send(e);
    });
};

exports.disasterManager_post = (req, res, next) => {
  let newDisasterManagers = new disasterManager({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
    employeeID: req.body.employeeID,
  });
  newDisasterManagers.save((err, DisasterManagersDoc) => {
    //the full Damage Assessment document is returned (including id)
    if (!err) res.send(DisasterManagersDoc);
    else {
      if (err.code == 11000)
        res.status(422).send(["Email Address Is Already In Use."]);
      else return next(err);
    }
  });
};


exports.authenticate = (req, res, next) => {
  // call for passport authentication
  passport.authenticate("local", (err, user, info) => {
    // error from passport middleware
    if (err) return res.status(400).json(err);
    // registered user
    else if (user) return res.status(200).json({ token: user.generateJwt() });
    // unknown user or wrong password
    else return res.status(404).json(info);
  })(req, res);
};

exports.userProfile = (req, res, next) => {
  disasterManager.findOne({ _id: req._id }, (err, user) => {
    if (!user)
      return res
        .status(404)
        .json({ status: false, message: "User record not found." });
    else
      return res
        .status(200)
        .json({ status: true, user: _.pick(user, ["firstName", "lastName", "employeeID", "email"]) });
  });
};
