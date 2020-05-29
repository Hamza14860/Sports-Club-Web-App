const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const User = mongoose.model('User');

module.exports.register = (req, res, next) => {
    var user = new User();
    user.name = req.body.name;
    user.email = req.body.email;
	user.opponentRank = "Beginner";
	user.dailyTimings = "";
    user.password = req.body.password;
    user.save((err, doc) => {
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
                     return res.status(404).json({ status: false, message: 'Error updating User' });
                 }
             });
           }           
         }
     );  
 }
 
 module.exports.updateUser = (req, res, next) => {
    var userr = {
     name: req.body.name,
     email: req.body.email,
	 opponentRank: req.body.opponentRank,
	 dailyTimings: req.body.dailyTimings,
     password: req.body.password
    };
    User.findOne({ email: req.body.email },
     (err, userrv) => {
           if (userrv._id != req.body._id){
             return res.status(404).json({ status: false, message: 'Email Already Exists' });
         }
         else{
             User.findByIdAndUpdate(req.body._id,{$set: userr},{new:true},(err,doc)=>{
                 if(!err){ 
					res.send(doc); 
				}
                 else{
                     return res.status(404).json({ status: false, message: 'Error updating User' });
                 }
             });
           }        
         }
     );  
 }
 

module.exports.authenticate = (req, res, next) => {
    // call for passport authentication
    passport.authenticate('local', (err, user, info) => {       
        // error from passport middleware
        if (err) return res.status(400).json(err);
        // registered user
        else if (user) return res.status(200).json({ "token": user.generateJwt() });
        // unknown user or wrong password
        else return res.status(404).json(info);
    })(req, res);
}

module.exports.userProfile = (req, res, next) =>{
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true, user : _.pick(user,['name','email','opponentRank','dailyTimings']) });
        }
    );
}

module.exports.playerHome = (req, res, next) =>{
    User.findOne({ _id: req._id },
        (err, user) => {
            if (!user)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json({ status: true, user : _.pick(user,['name','email']) });
        }
    );

}

module.exports.getPlayers = (req,res,next)=>{
    User.find(function(err,users){
        res.json(users);
    });
    
}