var passport = require('passport');
var googleStrategy = require('passport-google-oauth20');
var keys = require('./keys');

passport.use(new googleStrategy({
    //options for strategy
    callbackURL:'/auth/google/redirect/',
    clientID:keys.google.clientID,
    clientSecret:keys.google.clientSecret
},
    //This callback function will be trigerred once the callbackURL is fired
    (accessToken, refreshToken, profile, done)=>{
        //passport cb function
        //console.log(profile);
        console.log("Callback Function triggered");
        console.log(profile);
    })
);