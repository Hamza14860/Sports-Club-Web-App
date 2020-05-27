const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


var scheduleSchema = new mongoose.Schema({
    playerEmail:{
        type:String,
        required: 'can not be empty',
    },
    coachEmail:{
        type:String,
        required: 'can not be empty',
    },    
    Time:{
        type:String,
        required: 'can not be empty',
    },
    gameName: {
        type: String,
        required: 'can\'t be empty'
    },
    courtName: {
        type: String,
        required: 'can\'t be empty'
    }
});


scheduleSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });
}


mongoose.model('Schedule', scheduleSchema);