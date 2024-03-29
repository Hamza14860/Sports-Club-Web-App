const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = mongoose.model('User');
const Coach = mongoose.model('Coach');
const Schedule = mongoose.model('Schedule');
const Court = mongoose.model('Court');
const Session = mongoose.model('Session');
const Attendance = mongoose.model('Attendance');

const ctrlUser = require('../controllers/user.controller');
const ctrlCoach = require('../controllers/coach.controller');
const ctrlCourt = require('../controllers/court.controller');
const ctrlGame = require('../controllers/game.controller');
const ctrlSession = require('../controllers/session.controller');
const ctrlAttendance = require('../controllers/attendance.controller');
const ctrlSchedule = require('../controllers/schedule.controller');
const ctrlRanking = require('../controllers/ranking.controller');

const jwtHelper = require('../config/jwtHelper');

router.post('/register', ctrlUser.register);
router.post('/authenticate', ctrlUser.authenticate);
router.get('/userProfile',jwtHelper.verifyJwtToken, ctrlUser.userProfile);
router.get('/playerHome',jwtHelper.verifyJwtToken, ctrlUser.playerHome);
router.put('/updateUser',ctrlUser.updateUser);
router.put('/updateCoach',ctrlCoach.updateCoach);
router.put('/updateCourt',ctrlCourt.updateCourt);
router.put('/updateAttend',ctrlAttendance.updateAttend);


router.get('/admin-auth',jwtHelper.verifyJwtToken, ctrlUser.userProfile);

router.post('/registerc', ctrlCoach.register);
router.post('/authenticatec', ctrlCoach.authenticate);
router.get('/coachProfile',jwtHelper.verifyJwtToken, ctrlCoach.coachProfile);

router.get('/players',ctrlUser.getPlayers);
router.get('/coaches', ctrlCoach.getCoaches);

router.put('/update-user',ctrlUser.update);

router.put('/update-coach',ctrlCoach.update);
router.delete('/delete-coach',ctrlCoach.delete);

//gamesession
router.post('/add-session', ctrlSession.addSession);
router.get('/get-session', ctrlSession.getSession);
router.get('/sessions',ctrlSession.getSessions);

//game
router.post('/add-game', ctrlGame.addGame);
router.get('/get-game', ctrlGame.getGame);
router.get('/games',ctrlGame.getGames);

//court
router.post('/add-court', ctrlCourt.addCourt);
router.get('/get-court', ctrlCourt.getCourt);
router.get('/courts',ctrlCourt.getCourts);

//attendance
router.post('/add-attendance', ctrlAttendance.addAttendance);
router.get('/get-attend', ctrlAttendance.getAttend);
router.get('/attends',ctrlAttendance.getAttends);
router.get('/get-fallattend',ctrlAttendance.getFalAttend);

//rank
router.post('/add-rank', ctrlRanking.addRank);
router.get('/get-rank', ctrlRanking.getRank);
router.get('/ranks',ctrlRanking.getRanks);

//schedule
router.post('/add-schedule', ctrlSchedule.addSchedule);
router.get('/get-schedule', ctrlSchedule.getSchedule);
router.get('/schedules',ctrlSchedule.getSchedules);



router.get('/coach-user/:email', function(req, res) { 
    console.log("Got it"+req.params.email);
    Coach.findOne({ email: req.params.email},
        (err, coach) => {
            if (!coach)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json(coach);
        }
    );
});



router.get('/user-find/:email', function(req, res) { 
    console.log("Got it for User"+req.params.email);
    User.findOne({ email: req.params.email},
        (err, coach) => {
            if (!coach)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json(coach);
        }
    );
});


router.get('/courtget/:courtName', function(req, res) { 
    console.log("Got it for Court"+req.params.courtName);
    Court.findOne({ courtName: req.params.courtName},
        (err, coach) => {
            if (!coach)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json(coach);
        }
    );
});


router.get('/session-today/:date/:coach', function(req, res) { 
    console.log("Got it sess"+req.params.date+req.params.coach);
    Session.find({ Date: req.params.date,CoachID:req.params.coach},
        (err, coach) => {
            if (!coach)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json(coach);
        }
    );
});

router.get('/attend-of/:date/:playerEmail', function(req, res) { 
    console.log("Got it"+req.params.date);
    Attendance.find({ date: req.params.date,playerEmail:req.params.playerEmail},
        (err, coach) => {
            if (!coach)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json(coach);
        }
    );
});

router.get('/attend-of/:date', function(req, res) { 
    console.log("Got it"+req.params.date);
    Attendance.find({ date: req.params.date,done:"False"},
        (err, attend) => {
            if (!attend)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json(attend);
        }
    );
});


router.get('/delete-user/:id', function(req, res) { 
    
    User.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            return res.status(404).json({ status: false, message: 'Error in deleting user' });
        }
    });

});

router.get('/delete-court/:id', function(req, res) { 
    
    Court.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            return res.status(404).json({ status: false, message: 'Error in deleting user' });
        }
    });

});

router.get('/delete-coach/:id', function(req, res) { 
    
    Coach.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            return res.status(404).json({ status: false, message: 'Error in deleting user' });
        }
    });

});

router.get('/authenticatec/:email/:password', function(req, res) { 
    console.log("login request coach"+req.params.email+req.params.password);
    Coach.findOne({ email: req.params.email,password:req.params.password},
        (err, coach) => {
            if (!coach)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json(coach);
        }
    );

});

router.get('/get-courts/:game', function(req, res) { 
    console.log("Got game "+req.params.game);
    Court.find({ gameName: req.params.game,isFree:'True'},
        (err, attend) => {
            if (!attend)
                return res.status(404).json({ status: false, message: 'User record not found.' });
            else
                return res.status(200).json(attend);
        }
    );

});

router.get('/delete-court/:id', function(req, res) { 
    
    Court.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            return res.status(404).json({ status: false, message: 'Error in deleting user' });
        }
    });

});

router.get('/delete-schedule/:id', function(req, res) { 
    
    Schedule.findByIdAndRemove(req.params.id,(err,doc)=>{
        if(!err){
            res.send(doc);
        }
        else{
            return res.status(404).json({ status: false, message: 'Error in deleting user' });
        }
    });

});



module.exports = router;