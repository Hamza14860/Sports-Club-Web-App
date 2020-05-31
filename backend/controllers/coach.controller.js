const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Coach = mongoose.model('Coach');

module.exports.register = (req, res, next) => {
    var coach = new Coach();
    coach.name = req.body.name;
    coach.email = req.body.email;
    coach.password = req.body.password;
    coach.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Duplicate email adrress found.']);
            else
                return next(err);
        }

    });
}


module.exports.update = (req, res, next) => {
   var coach = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
   };
   Coach.findOne({ email: req.body.email },
    (err, coachv) => {
        if (coachv._id != req.body._id){
            return res.status(404).json({ status: false, message: 'Email Already Exists' });
        }
        else{
            Coach.findByIdAndUpdate(req.body._id,{$set: coach},{new:true},(err,doc)=>{
                if(!err){ res.send(doc); }
                else{
                    return res.status(404).json({ status: false, message: 'Error Updating Coach' });
                }
            });
          }           
        }
    );  
}

module.exports.delete = (req,res,next) => {
    Coach.findByIdAndRemove(req.body._id,(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            return res.status(404).json({ status: false, message: 'Error Deleting Coach' });
        }
    });
    
}


module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, coach, info) => {       
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (coach) return res.status(200).json({ "token": coach.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}

module.exports.coachProfile = (req, res, next) =>{
    Coach.findOne({ _id: req._id },
        (err, coach) => {
            if (!coach)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true, coach : _.pick(coach,['name','email']) });
        }
    );
}


module.exports.getCoaches = (req,res,next)=>{
    console.log("coaches all call");
    Coach.find(function(err,coaches){
        res.json(coaches);
    });
    
}
