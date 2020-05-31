const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


var courtSchema = new mongoose.Schema({
    CourtNo: {
        type: Number,
        required: 'Court Number can\'t be empty'
    },
    courtName: {
        type: String,
        required: 'Name can\'t be empty'
    },
    gameName: {
        type: String,
        required: 'game name can\'t be empty'
    },
    isFree: {
        type: String,
        required: 'can\'t be empty'
    },
    });


courtSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });
}


mongoose.model('Court', courtSchema);