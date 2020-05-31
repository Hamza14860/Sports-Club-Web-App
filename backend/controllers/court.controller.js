const mongoose = require('mongoose');
const passport = require('passport');
const _ = require('lodash');

const Court = mongoose.model('Court');

module.exports.addCourt = (req, res, next) => {
    var court = new Court();
    court.CourtNo= req.body.CourtNo;
    court.courtName=req.body.courtName;
    court.gameName=req.body.gameName;
    court.isFree=req.body.isFree;
    court.save((err, doc) => {
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
 
module.exports.getCourt = (req, res, next) =>{
    Court.findOne({ _id: req._id },
        (err, sess) => {
            if (!sess)
                return res.status(404).json({ status: false, message: 'session record not found.' });
            else
                return res.json(sess);
        }
    );
}

module.exports.getCourts = (req,res,next)=>{
    console.log("Courts call");
    Court.find(function(err,users){
        res.json(users);
    });
    
}

module.exports.updateCourt = (req, res, next) => {
   console.log("UPDATE"+req.body.courtName);
   var userr = {
    CourtNo:req.body.CourtNo,
    courtName:req.body.courtName,
    gameName:req.body.gameName,
    isFree:req.body.isFree,
   };
   Court.findOne({ courtName: req.body.courtName },
    (err, userrv) => {
                Court.findByIdAndUpdate(userrv._id,{$set: userr},{new:true},(err,doc)=>{
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