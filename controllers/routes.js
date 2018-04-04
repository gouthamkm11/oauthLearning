var bodyParser = require('body-parser');
var urlEncoder = bodyParser.urlencoded({extended:true});
var passport = require('passport');

module.exports = function(app){
    app.get('/auth/login', (req,res)=> {
        res.render('login');
    })

    //Handle with passport
    app.get('/auth/google', passport.authenticate('google',{
        scope:['profile']//get the profile details of the user
    }));

    app.get('/auth/normalLogin', (req,res)=>{
        res.send('Login Successfull');
    });

    app.get('/auth/logout', (req,res)=>{
        res.send('Loggin out!');
    })

    //have to handle the code sent by google about user profile
    app.get('/auth/google/redirect', passport.authenticate('google'),(req,res)=>{
        res.send('Login via google');
    });
}