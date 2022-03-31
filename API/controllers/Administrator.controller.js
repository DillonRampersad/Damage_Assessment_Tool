//reference-https://www.youtube.com/watch?v=V-CeWkz1MNQ&list=PLIjdNHWULhPSZFDzQU6AnbVQNNo1NTRpd
//reference-https://www.youtube.com/watch?v=R5uK9hN-VB0
//reference-https://www.youtube.com/watch?v=s2K_aIwFDVY

const mongoose = require("mongoose");
const administrator = require("../db/models/Administrators.model");
const passport = require("passport");
const _ = require("lodash");

exports.administrator_get_all = (req, res, next) => {
  //return an array of all the damage assessments made that is stored on the database.
  administrator
    .find({})
    .then((administrators) => {
      res.send(administrators);
    })
    .catch((e) => {
      res.send(e);
    });
};

exports.administrator_post = (req, res, next) => {
  let newadministrators = new administrator({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password,
  });
  newadministrators.save((err, administratorsDoc) => {
    //the full Damage Assessment document is returned (including id)
    if (!err) res.send(administratorsDoc);
    else {
      if (err.code == 11000)
        res.status(422).send(["Email Address Is Already In Use."]);
      else return next(err);
    }
  });
};


exports.authenticate = (req, res, next) => {
  // call for passport authentication
  passport.authenticate("admin", (err, user, info) => {
    // error from passport middleware
    if (err) return res.status(400).json(err);
    // registered user
    else if (user) return res.status(200).json({ token: user.generateJwt() });
    // unknown user or wrong password
    else return res.status(404).json(info);
  })(req, res);
};

exports.userProfile = (req, res, next) => {
  administrator.findOne({ _id: req._id }, (err, user) => {
    if (!user)
      return res
        .status(404)
        .json({ status: false, message: "User record not found." });
    else
      return res
        .status(200)
        .json({ status: true, user: _.pick(user, ["firstName", "lastName", "email"]) });
  });
};
