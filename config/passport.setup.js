var passport = require('passport');
var googleStrategy = require('passport-google-oauth20');

passport.use(new googleStrategy({
    //options for strategy
}, ()=>{
    //passport cb function
})
)