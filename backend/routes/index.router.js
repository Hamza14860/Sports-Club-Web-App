const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const User = mongoose.model('User');
const Coach = mongoose.model('Coach');
const Schedule = mongoose.model('Schedule');
const Court = mongoose.model('Court');

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

//rank
router.post('/add-rank', ctrlRanking.addRank);
router.get('/get-rank', ctrlRanking.getRank);
router.get('/ranks',ctrlRanking.getRanks);

//schedule
router.post('/add-schedule', ctrlSchedule.addSchedule);
router.get('/get-schedule', ctrlSchedule.getSchedule);
router.get('/schedules',ctrlSchedule.getSchedules);




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