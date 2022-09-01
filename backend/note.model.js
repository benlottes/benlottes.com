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
        type: Schema.ObjectId,
        ref: 'User'
    },
});

Note.index({note_title: 'text', note_content: 'text'});

module.exports = mongoose.model('Note', Note);