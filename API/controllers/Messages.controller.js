const mongoose = require("mongoose");

const Messages = require("../db/models/Messages.model");

//Damage Assessment Form Get
exports.Messages_get_all = (req, res) => {
  //return an array of all the damage assessments made that is stored on the database.
  Messages.find({})
    .then((Messages) => {
      res.send(Messages);
    })
    .catch((e) => {
      res.send(e);
    });
};

exports.Messages_get_one = (req, res) => {
  //return an array of all the damage assessments made that is stored on the database.
  Messages.findOne({
    _id: req.params.MessagesID,
  })
    .then((Messages) => {
      res.send(Messages);
    })
    .catch((e) => {
      res.send(e);
    });
};

//Damage Assessment Form Post
exports.Messages_post = (req, res, next) => {
  //create a damage assessment report and save to the database
  const floorPlan = req.files;
  console.log(req.files)
  let newMessages = new Messages({
    username: req.body.username,
    message: req.body.message,
    messageDateTime: req.body.messageDateTime
  });
  newMessages.save().then((MessagesDoc) => {
    //the full Damage Assessment document is returned (including id)
    res.send(MessagesDoc);
  });
};

//Damage Assessment Form Update
exports.Messages_update = (req, res) => {
  //update the Organization specified
  Messages.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: req.body,
    }
  ).then(() => {
    res.send({ message: "Updated Successfully" });
  });
};

//Damage Assessment Form Delete
exports.Messages_delete = (req, res) => {
  //delete the Organization specified
  Messages.findOneAndRemove({
    _id: req.params.id,
  }).then((removeMessagesDoc) => {
    res.send(removeMessagesDoc);
  });
};

exports.message_search = (req, res) => {
  Messages.aggregate([
    [
      {
          '$match': {
              '$or': [
                  {
                      'message': {
                          '$regex': req.body.message, 
                          '$options': 'i'
                      }
                  }
              ]
          }
      }
  ]
  ]).then((Messages) => {
    res.send(Messages);
    console.log(Messages);
  })
  .catch((e) => {
    res.send(e);
  });
};

