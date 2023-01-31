
const mongoose = require('mongoose')
const md5 = require('blueimp-md5')

const userSchema = new mongoose.Schema({
  username: {type: String, required: true}, // 用户名
  password: {type: String, required: true}, // 密碼
  email: String,
  user_profile:{type: String,default:''},//用戶大頭貼url
  create_time: {type: Number, default: Date.now},//創建時間
  auth_time: Number,//授權時間
  auth_level:{type:Number, default:1}, //初始用戶等級為1
  auth_status:{type: String,default:''}, //授權狀態
  menus: {type: Array, default:["/admin/home","/admin/lesson","/admin/mylesson","/admin/question","/admin/article","/admin/myarticle"]} // 權限
})

const UserModel = mongoose.model('users', userSchema)

// 初始化默認超級管理員用户: admin/admin
UserModel.findOne({username: 'admin'}).then(user => {
  if(!user) {
    UserModel.create({username: 'admin', password: md5('admin')})
            .then(user => {
              console.log('初始化用户: 用戶名: admin 密碼為: admin')
            })
  }
})

// 4. 向外暴露Model
module.exports = UserModel