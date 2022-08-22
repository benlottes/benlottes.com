const express = require("express");
const passport = require("passport");
const authRoutes = express.Router();

authRoutes.get("/auth/google", passport.authenticate('google', { scope: ['profile', 'email'] }));
authRoutes.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: '/Notes',
    failureRedirect: '/'
}));

module.exports = authRoutes;