var pageRoute = (req,res,next)=>{
    console.log(`This is from profileRoute: ${req.user}`);
    if(!req.user){
        res.redirect('/auth/login');
    }
    else{
        next();
    }
}

module.exports = function(app){

    app.get('/profile',pageRoute,(req,res)=>{
        res.render('profile',{user:req.user});
    })   
}