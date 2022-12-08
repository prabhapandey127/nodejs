module.exports = filterRequest = (req,res,next) =>{
    if(!req.query.age){
        res.send("Please provide the age");
    }
   else if(req.query.age <18){
        res.send("You are under age")
   }
   else{
       next();
   }
}