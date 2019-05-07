require('dotenv').config();
const mongoose = require('mongoose');
const messengerRoom = require('../model/messenger-room.model');
const messageThread = require('../model/thread-message.model');
const messageSchema = require('../model/message.model');

const MessengerRoom = mongoose.model('MessengerRoom', messengerRoom);
const MessengerThread = mongoose.model('MessengerThread', messageThread);
const Message = mongoose.model('Message', messageSchema);
const server = require('../common/mqttConnect');


function saveNotify(topic, payload) {
    let userReceiver = topic;
    payload = JSON.parse(payload);
    let type = payload.type;

}

function saveMessageToDatabase(topic,payload) {
    payload = JSON.parse(payload);
    let userReceiver = topic;
    let roomChatId = payload.roomId;
    let userSender = payload.sender;
    
    MessengerRoom.findById(roomChatId ,(err,docRoom)=>{
        if (err) {
            //do nothing
            console.log('err in find room');
            return;
        }
        if (!docRoom) {
            //do nothing
            console.log('there is no room to save in mqtt');
            return;
        }
        //find thread
        MessengerThread.findById(docRoom.thread, (err,docThread)=>{
            if (err) {
                console.log('err in find message thread mqtt');
                return;
            }
            if (!docThread) {
                console.log('no thread message find in mqtt');
                return;
            }
            let newMessage = new Message();
            newMessage.sender = userSender;
            newMessage.receiver = userReceiver;
            newMessage.content = payload.content;
            if (docThread.messages.length > 25) {
                // create new thread messages
                let newThread = new MessengerThread();
                newThread.previous = docThread._id;
                newThread.messages.push(newMessage);
                //save new thread
                newThread.save((err, doc)=>{
                    if (err) {
                        console.log('error in create new messages, save in new thread');
                    }
                    //save room
                    docRoom.thread = doc._id;
                    docRoom.lastMessage = new Date();
                    docRoom.save((err)=>{
                        if (err) {
                            console.log('err in save room in mqtt');
                        }
                    });
                });
            } else {
                docThread.messages.push(newMessage);
                docThread.save((err, doc)=>{
                    if (err) {
                        console.log('error in save thread message');
                    }
                    docRoom.lastMessage = new Date();
                    docRoom.save((err)=>{
                        if (err) {
                            console.log('err in save room in mqtt');
                        }
                    });
                });
            }
        });
    });
}

function updateUnreadMessage(topic, payload) {
    payload = JSON.parse(payload);
    let userReceiver = topic;
    let roomChatId = payload.roomId;
    MessengerRoom.findById(roomChatId, (err,doc)=> {
        while (doc.unread.length > 0) {
            doc.unread.pop()
        }
        doc.unread.push(userReceiver)
        doc.save((err)=>{
            if (err) {
                console.log('error in save unread state to messenger room');
            }
        });
    });
}

module.exports = function() {
    server.subscribe('messenger/#', {qos:2}, (err)=>{if (err) console.log(err)});

    server.on('message', (topic, payload)=>{
        let index = 0;
        for (let i = 0; i < topic.length; i++) {
            if (topic[i] == '/') {
                index = i;
                break;
            }
        }
        let type = topic.substr(0,index);
        let receiver = topic.substring(index+1, topic.length);
        if (type == 'messenger') {
            saveMessageToDatabase(receiver, payload);
            updateUnreadMessage(receiver, payload)
        }
    });
}
