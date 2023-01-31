const mongoose = require('mongoose')
const express = require('express')
const app = express()
const path = require('path')


// 聲明使用解析post請求的中間鍵
app.use(express.urlencoded({extended: true})) // 請求體參數是: name=tom&pwd=123
app.use(express.json()) // 請求體參數是json結構: {name: tom, pwd: 123}



// 聲明使用解析cookie數據的中間鍵
const cookieParser = require('cookie-parser')
app.use(cookieParser())

app.use(express.static(__dirname + '/public'));
// 聲明使用路由器中間件
const indexRouter = require('./routers')
app.use('/', indexRouter)
 



const fs = require('fs')


// 通過mongoose連接資料庫
mongoose.connect('mongodb://localhost/server_db1', {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {
    console.log('連接資料庫成功!!!')
    // 只有當連上資料庫才去啟動服務器
    const server = require('http').Server(app)
    .listen(5000,()=>{console.log('服務器啟動成功, 請訪問: http://localhost:5000')})
    

    // start up socketio server
    require('./socketIO/test')(server)
    
  
    
    // app.listen('5000', () => {
    //   console.log('服務器啟動成功, 請訪問: http://localhost:5000')
    // })
  })
  .catch(error => {
    console.error('連接數據庫失敗', error)
  })