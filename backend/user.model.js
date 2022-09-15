const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let User = new Schema({
    googleId : {
        type : String,
        required: true 
    }, 
    firstName : {
        type : String,
        required: true
    },
    createdAt:{
        type: Date,
        default : Date.now
    }    
});

module.exports = mongoose.model('User', User);