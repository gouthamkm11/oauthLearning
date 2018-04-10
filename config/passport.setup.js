var passport = require('passport');
var googleStrategy = require('passport-google-oauth20');
var keys = require('./keys');
var User = require('../model/user.model');

passport.serializeUser((user,done)=>{
    done(null,user.id);
});

passport.deserializeUser((id,done)=>{
    User.findById(id).then((user)=>{
        done(null,user);
    });
});

passport.use(new googleStrategy({
    //options for strategy
    callbackURL:'/auth/google/redirect/',
    clientID:keys.google.clientID,
    clientSecret:keys.google.clientSecret
},
    //This callback function will be trigerred once the callbackURL is fired
    (accessToken, refreshToken, profile, done)=>{
        console.log("Callback Function triggered");
        User.findOne({googleID:profile.id}).then((currentUser)=>{
            if(currentUser){
                console.log(`User already exists: ${currentUser}`);
                done(null, currentUser);
            }
            else{
                new User({
                    username: profile.displayName,
                    googleID: profile.id
                }).save().then((newUser)=>{
                    console.log(`New user has been added${newUser}`);
                    done(null, newUser);
                })
            }
        })
    })
);