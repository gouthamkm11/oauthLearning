var express = require('express');
var ejs = require('ejs');
var routes = require('./controllers/routes');
var passportSetup = require('./config/passport.setup');

var app = express();

//setting my default view engine
app.set('view engine', 'ejs');
//Route configuration
routes(app);

//default routing
app.get('/', (req,res)=>{
    res.render('home');
})

//Server listening ot port 3000
app.listen(3000, ()=>{
    console.log("Application listening at port 3000");
})