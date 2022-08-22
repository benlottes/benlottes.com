const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
require('./user.model');
const User = mongoose.model('User');

require('dotenv').config();

module.exports = function(passport) {
    passport.use(new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "http://localhost:3000/auth/google/callback"
    },
    async(accessToken, refreshToken, profile, done) => {
        console.log(profile);
    }
    ));
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });
    passport.deserializeUser((id, done) => {
        User.findById(id, (err, user) => {
            done(err, user);
        });
    });
}