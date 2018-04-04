var express = require('express');
var ejs = require('ejs');
var routes = require('./controllers/routes');
var passportSetup = require('./config/passport.setup');
var mongoose = require('mongoose');
var connstr = require('./config/db.configuration');


var app = express();

//setting my default view engine
app.set('view engine', 'ejs');

//Routes initialization
routes(app);

//DB Initialization
mongoose.connect(connstr.dbconfig, ()=>{
    console.log('DB Connected');
});



//default routing
app.get('/', (req,res)=>{
    res.render('home');
})

//Server listening ot port 3000
app.listen(3000, ()=>{
    console.log("Application listening at port 3000");
})