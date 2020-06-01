const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Attendance = mongoose.model('Attendance');

module.exports.addAttendance = (req, res, next) => {
    var attendance = new Attendance();
    attendance.playerEmail = req.body.playerEmail;
    attendance.date = req.body.date;
    attendance.time = req.body.time;
    attendance.done = "False";
    attendance.message = req.body.message;
    attendance.save((err, doc) => {
        if (!err)
            res.send(doc);
        else {
            if (err.code == 11000)
                res.status(422).send(['Error saving model']);
            else
                return next(err);
        }

    });
}


module.exports.updateAttend = (req, res, next) => {
   console.log("UPDATE Attendance"+req.body.playerEmail);
   var userr = {
    playerEmail: req.body.playerEmail,
    date: req.body.date,
    time: req.body.time,
    done: "True",
    message: req.body.message,
   };
   Attendance.findOne({ playerEmail: req.body.playerEmail,date:req.body.date,time: req.body.time,message: req.body.message },
    (err, userrv) => {
                Attendance.findByIdAndUpdate(userrv._id,{$set: userr},{new:true},(err,doc)=>{
                    if(!err){ 
                       console.log(" NO ERROR ");
                       res.send(doc); 
                   }
                   else{
                       console.log("ERROR ");
                       return res.status(404).json({ status: false, message: 'Error updating User' });
                   }
               });
        }
    );  
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
 
module.exports.getAttend = (req, res, next) =>{
    Attendance.findOne({ _id: req._id },
        (err, sess) => {
            if (!sess)
                return res.status(404).json({ status: false, message: 'session record not found.' });
            else
                return res.json(sess);
        }
    );
}

module.exports.getFalAttend = (req, res, next) =>{
    Attendance.find({ done: "False" },
        (err, sess) => {
            if (!sess)
                return res.status(404).json({ status: false, message: 'session record not found.' });
            else
                return res.json(sess);
        }
    );
}

module.exports.getAttends = (req,res,next)=>{
    Attendance.find(function(err,users){
        res.json(users);
    });
    
}