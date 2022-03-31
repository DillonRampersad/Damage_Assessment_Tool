//reference-https://www.youtube.com/watch?v=axobUeRpO3c

const mongoose = require("mongoose");

const Twitter = require("../db/models/TwitterPosts.model");

//Damage Assessment Form Get
exports.Twitter_get_all = (req, res) => {
  //return an array of all the damage assessments made that is stored on the database.
  Twitter.find({})
    .then((Twitter) => {
      res.send(Twitter);
    })
    .catch((e) => {
      res.send(e);
    });
};