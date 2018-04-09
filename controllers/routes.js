var bodyParser = require('body-parser');
var urlEncoder = bodyParser.urlencoded({extended:true});
var passport = require('passport');


module.exports = function(app){

    //Middleware for user profile page
    var pageRoute = (req,res,next)=>{
        if(!req.user){
            res.redirect('/profile/');
        }
        else{
            next();
        }
    }

    app.get('/profile', pageRoute, (req,res)=>{
        res.render('profile', {user: req.user});
    })

    app.get('/auth/login', (req,res)=> {
        res.render('login');
    })

    //Handle this route passport.
    //We have already set the strategy as google by importing google-oAuth-2.0.
    //Redirect the page to google sign in page.
    //This function says get back the user profile information via scope.
    app.get('/auth/google', passport.authenticate('google',{
        scope:['profile']//get the profile details of the user
    }));

    //Handle this route with passport.
    //This callback route will get the code from google profile page to access the user profile data
    //Then this will trigger the callback function in passport.jsetups.js
    app.get('/auth/google/redirect', passport.authenticate('google'), (req,res)=>{
        res.redirect('/profile');
    }); 

    app.get('/auth/normalLogin', (req,res)=>{
        res.send('Login Successfull');
    });

    app.get('/auth/logout', (req,res)=>{
        res.send('Loggin out!');
    })
}