const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Note = new Schema({
    note_title: {
        type: String
    },
    note_content: {
        type: String
    },
    note_date: {
        type: Date
    },
    note_owner: {
        type: String
    },
    note_tags: {
        type: Array
    }
});

module.exports = mongoose.model('Note', Note);