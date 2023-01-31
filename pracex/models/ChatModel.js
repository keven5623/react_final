const mongoose = require('mongoose');

const chatSchema = new mongoose.Schema({
    from: {type: String, required: true}, // 發送用户的id
    to: {type: String, required: true}, // 接收用户的id
    chat_id: {type: String, required: true}, // from 和to 组成的字符串
    content: {type: String, required: true}, // 内容
    read: {type:Boolean, default: false}, // 標示是否已讀
    create_time: {type: Number} // 創建時間
    })
    
    const ChatModel = mongoose.model('chat', chatSchema)
    
    module.exports = ChatModel