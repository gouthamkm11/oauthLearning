var passport = require('passport');
var googleStrategy = require('passport-google-oauth20');
var keys = require('./keys');

passport.use(new googleStrategy({
    //options for strategy
    callbackURL:'/auth/google/redirect/',
    clientID:keys.google.clientID,
    clientSecret:keys.google.clientSecret
}, (accessToken, refreshToken, profile, done)=>{
    //passport cb function
    console.log(profile);
})
);