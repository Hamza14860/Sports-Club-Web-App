const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


var gameSchema = new mongoose.Schema({
    gameName: {
        type: String,
        required: 'Name can\'t be empty'
    },

    });


gameSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });
}


mongoose.model('Game', gameSchema);