const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Session = mongoose.model('Session');

module.exports.addSession = (req, res, next) => {
    console.log("Called Here "+req.body.PlayerID+req.body.Time);
    var session = new Session();
    session.SessionID = req.body.SessionID;
    session.PlayerID=req.body.PlayerID;
    session.CoachID=req.body.CoachID;
    session.Game=req.body.Game;
    session.Date = req.body.Date;
    session.Time=req.body.Time;
    session.Court=req.body.Court;
    session.OpponentName=req.body.OpponentName;
    session.save((err, doc) => {
        if (!err){
            console.log("saved");
            res.send(doc);
        }
        else {
            console.log(err);
            if (err.code == 11000){
                res.status(422).send(['Error saving model']);
            }
            else
                return next(err);
        }

    });
}

/*module.exports.update = (req, res, next) => {
    var sess = {
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
 }*/
 
module.exports.getSession = (req, res, next) =>{
    Session.findOne({ _id: req._id },
        (err, sess) => {
            if (!sess)
                return res.status(404).json({ status: false, message: 'session record not found.' });
            else
                return res.json(sess);
        }
    );
}

module.exports.getSessions = (req,res,next)=>{
    console.log("called");
    Session.find(function(err,users){
        res.json(users);
    });
    
}