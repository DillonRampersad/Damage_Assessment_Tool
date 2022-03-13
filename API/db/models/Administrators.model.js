const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const AdministratorsSchema = new mongoose.Schema({
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
      saltSecret: String,
    });
    
    AdministratorsSchema.path("email").validate((val) => {
      emailRegex =
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return emailRegex.test(val);
    }, "Invalid e-mail.");
    
    AdministratorsSchema.pre("save", function (next) {
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(this.password, salt, (err, hash) => {
          this.password = hash;
          this.saltSecret = salt;
          next();
        });
      });
    });
    
    AdministratorsSchema.methods.verifyPassword = function (password) {
      return bcrypt.compareSync(password, this.password);
    };
    
    AdministratorsSchema.methods.generateJwt = function () {
      return jwt.sign({ _id: this._id }, 'SECRET#123', {
        expiresIn: '30s',
      });
    };
    
    
const Administrators = mongoose.model( 'Administrators', AdministratorsSchema);

module.exports =  Administrators