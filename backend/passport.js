const GoogleStrategy = require('passport-google-oauth20').Strategy;
const mongoose = require('mongoose');
const User = require('./user.model');

require('dotenv').config();

module.exports = function(passport){ 
    passport.use(new GoogleStrategy({
        clientID: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        callbackURL: "http://localhost:4000/auth/google/callback",
      },
      async (issuer, token, profile, done)=> {
       const newUser = {
            googleId: profile.id,
            firstName: profile.name.givenName,
            lastName: profile.name.familyName
        };
        try{
            // Check if user already exists in our database
            let user = await User.findOne({googleId: profile.id});
            if(user){
                console.log("User already exists in our database");
                done(null, user);
            } else {
                console.log("Creating a new user in our database");
                user = new User(newUser);
                await user.save();
                done(null, user);
            }
        } catch (error){
            console.log(error);
        }
       }
    ));
    passport.serializeUser((user, done)=> {
        done(null, user._id);
    });
      
    passport.deserializeUser((id, done)=> {
        User.findById(id, function(err, user) {
          done(err, user);
        });
    });
}