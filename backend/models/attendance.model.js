const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


var attendSchema = new mongoose.Schema({
    playerEmail:{
        type:String,
        required: 'can not be empty',
    },
    date:{
        type:String,
        required: 'can not be empty',
    },
	time:{
        type:String,
        required: 'can not be empty',
    },
    done:{
        type:String,
    },
    message: {
        type: String,
        required: 'message can\'t be empty'
    }
});


attendSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });
}


mongoose.model('Attendance', attendSchema);