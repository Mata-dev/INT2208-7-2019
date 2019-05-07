const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const threadSchema = require('./thread-message.model');


var messengerRoomSchema = new Schema({
    authors: {
        type: [String],
        default: []
    },
    thread: {
        type: String,
        default: ''
    },
    unread: {
        type: [String],
        default: []
    },
    lastMessage: {
        type: Date,
        default: Date.now
    }
});



module.exports = messengerRoomSchema;