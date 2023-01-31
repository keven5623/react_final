import io from 'socket.io-client'

const socket = io('ws://localhost:5000')

socket.on('receiveMsg', function (data) {
console.log('瀏覽器端接收到消息:', data)
})

socket.emit('sendMsg', {name: 'Tom', date: Date.now()})
console.log('瀏覽器端向服務器發送消息:', {name: 'Tom', date: Date.now()})