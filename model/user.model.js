const mongoose = require('mongoose');
const db = require('../config/db');

const {Schema} = mongoose;

const userSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true,
        lowercase: true,
        unique: true
    }
});

const userModel = db.model('user',userSchema);
module.exports = userModel;