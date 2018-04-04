var bodyParser = require('body-parser');
var urlEncoder = bodyParser.urlencoded({extended:true});

module.exports = function(app){
    app.get('/auth/login', (req,res)=> {
        res.render('login');
    })

    app.get('/auth/google', (req,res)=>{
        res.send('Google authentication screen');
    });

    app.get('/auth/normalLogin', (req,res)=>{
        res.send('Login Successfull');
    });

    app.get('/auth/logout', (req,res)=>{
        res.send('Loggin out!');
    })
}