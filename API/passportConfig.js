const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

var FieldAgents = require('./db/models/FieldAgents.model');

passport.use(
    new localStrategy({ usernameField: 'email' },
        (username, password, done) => {
            FieldAgents.findOne({ email: username },
                (err, fieldAgents) => {
                    if (err)
                        return done(err);
                    // unknown FieldAgents
                    else if (!fieldAgents)
                        return done(null, false, { message: 'Email is not registered' });
                    // wrong password
                    else if (!fieldAgents.verifyPassword(password))
                        return done(null, false, { message: 'Incorrect password.' });
                    // authentication succeeded
                    else
                        return done(null, fieldAgents);
                });
        })
);