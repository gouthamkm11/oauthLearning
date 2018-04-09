var express = require('express');
var ejs = require('ejs');
var routes = require('./controllers/routes');
var passportSetup = require('./config/passport.setup');
var mongoose = require('mongoose');
var connstr = require('./config/db.configuration');
var cookieSession = require('cookie-session');
var passport = require('passport');
var key = require('./config/keys');


var app = express();

//setting my default view engine
app.set('view engine', 'ejs');

//Initialize Passport
app.use(passport.initialize());
app.use(passport.session());

//set Cookie session
app.use(cookieSession({
    maxAge: 24*60*60*1000,
    keys:[key.session.encrytedData]
}));

//Routes initialization
routes(app);


//DB Initialization
mongoose.connect(connstr.dbconfig.db);
mongoose.connection.on('connected', (err)=>{
    if (err) throw err;
    console.log('DB Connected');
})

//default routing
app.get('/', (req,res)=>{
    res.render('login');
})

//Server listening ot port 3000
app.listen(3000, ()=>{
    console.log("Application listening at port 3000");
})