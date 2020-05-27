const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


var rankSchema = new mongoose.Schema({
    playerID: {
        type: String,
        required: 'ID can\'t be empty'
    },
    gameName:{
        type: String,
        required: 'can\'t be empty'
    },
    ranking: {
        type: String,
        required: 'ranking can\'t be empty'
    }

    });


rankSchema.methods.generateJwt = function () {
    return jwt.sign({ _id: this._id},
        process.env.JWT_SECRET,
    {
        expiresIn: process.env.JWT_EXP
    });
}


mongoose.model('Ranking', rankSchema);