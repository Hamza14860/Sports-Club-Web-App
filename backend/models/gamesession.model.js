const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


var sessionSchema = new mongoose.Schema({
    SessionID: {
        type: String,
        required: 'Session ID can\'t be empty'
    },
    PlayerID: {
        type: String,
        required: 'Player ID can\'t be empty'
    },
    CoachID: {
        type: String,
        required: 'Coach ID can\'t be empty'
    },
    
    Game: {
        type: String,
        required: 'Game name can\'t be empty',
    },
    Time: {
        type: String,
        required: 'Time can\'t be empty',
    },
    Court: {
        type: String,
        required: 'Time can\'t be empty',
    },
    OpponentName: {
        type: String,
        required: 'Time can\'t be empty',
    }
});


sessionSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });
}


mongoose.model('Session', sessionSchema);