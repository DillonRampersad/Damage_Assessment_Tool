//reference-https://www.youtube.com/watch?v=V-CeWkz1MNQ&list=PLIjdNHWULhPSZFDzQU6AnbVQNNo1NTRpd

const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const DisasterManagersSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: "First name can't be empty",
      },
      lastName: {
        type: String,
        required: "Last name can't be empty",
      },
      email: {
        type: String,
        required: "Email can't be empty",
        unique: true,
      },
      password: {
        type: String,
        required: "Password can't be empty",
        minlength: [4, "Password must be atleast 4 character long"],
      },
      employeeID: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
      },
      saltSecret: String,
    });
    
    DisasterManagersSchema.path("email").validate((val) => {
      emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return emailRegex.test(val);
    }, "Invalid e-mail.");
    
    DisasterManagersSchema.pre("save", function (next) {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
          this.password = hash;
          this.saltSecret = salt;
          next();
        });
      });
    });
    
    DisasterManagersSchema.methods.verifyPassword = function (password) {
      return bcrypt.compareSync(password, this.password);
    };
    
    DisasterManagersSchema.methods.generateJwt = function () {
      return jwt.sign({ _id: this._id }, 'SECRET#123', {
        expiresIn: '60m',
      });
    };
    
    
const DisasterManagers = mongoose.model( 'DisasterManagers', DisasterManagersSchema);

module.exports =  DisasterManagers