    module.exports = function (server) {
    
    const io = require('socket.io')(server)


    io.on('connection', function (socket) {
        console.log('soketio connected')
        
        socket.on('sendMsg', function (data) {
        console.log('服務器接收到瀏覽器的消息', data)
        
        io.emit('receiveMsg', data.name + '_' + data.date)
        console.log('服務器向瀏覽器發送消息', data.name + '_' + data.date)
        })
    })
    }