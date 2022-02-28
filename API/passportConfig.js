const passport = require('passport');
const localStrategy = require('passport-local').Strategy;
const mongoose = require('mongoose');

var FieldAgents = require('./db/models/FieldAgents.model');
var DisasterManagers = require('./db/models/DisasterManagers.model');
var Administrators = require('./db/models/Administrators.model');
var MOC = require('./db/models/MembersOfCommunities.model');


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

passport.use(
    new localStrategy({ usernameField: 'email' },
        (username, password, done) => {
            DisasterManagers.findOne({ email: username },
                (err, disasterManagers) => {
                    if (err)
                        return done(err);
                    // unknown FieldAgents
                    else if (!disasterManagers)
                        return done(null, false, { message: 'Email is not registered' });
                    // wrong password
                    else if (!disasterManagers.verifyPassword(password))
                        return done(null, false, { message: 'Incorrect password.' });
                    // authentication succeeded
                    else
                        return done(null, disasterManagers);
                });
        })
);


passport.use(
    new localStrategy({ usernameField: 'email' },
        (username, password, done) => {
            Administrators.findOne({ email: username },
                (err, administrators) => {
                    if (err)
                        return done(err);
                    // unknown FieldAgents
                    else if (!administrators)
                        return done(null, false, { message: 'Email is not registered' });
                    // wrong password
                    else if (!administrators.verifyPassword(password))
                        return done(null, false, { message: 'Incorrect password.' });
                    // authentication succeeded
                    else
                        return done(null, administrators);
                });
        })
);

passport.use(
    new localStrategy({ usernameField: 'email' },
        (username, password, done) => {
            MOC.findOne({ email: username },
                (err, moc) => {
                    if (err)
                        return done(err);
                    // unknown FieldAgents
                    else if (!moc)
                        return done(null, false, { message: 'Email is not registered' });
                    // wrong password
                    else if (!moc.verifyPassword(password))
                        return done(null, false, { message: 'Incorrect password.' });
                    // authentication succeeded
                    else
                        return done(null, moc);
                });
        })
);