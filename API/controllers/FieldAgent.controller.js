const mongoose = require("mongoose");
const fieldAgents = require("../db/models/FieldAgents.model");

exports.FieldAgents_get_all = (req, res, next) => {
  //return an array of all the damage assessments made that is stored on the database.
  res.send("fa component");
};

exports.FieldAgents_post = (req, res, next) => {
    let newFieldAgent = new fieldAgents({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        employeeID: req.body.employeeID
      });
      newFieldAgent.save((err, FieldAgentDoc) => {
        //the full Damage Assessment document is returned (including id)
        if (!err)
        res.send(FieldAgentDoc);
    else {
        if (err.code == 11000)
            res.status(422). send(['Email Address Is Already In Use.']);
        else
            return next(err);
    }
      });
};
