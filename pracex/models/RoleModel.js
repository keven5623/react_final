/*
能操作roles集合数据的Model
 */
// 1.引入mongoose
const mongoose = require('mongoose')

// 定義Schema
const roleSchema = new mongoose.Schema({
  name: {type: String, required: true}, 
  auth_level:{type:Number,default:1}, 
  auth_name: String,
  auth_time: Number, 
  create_time: {type: Number, default: Date.now}, 
  menus: {type: Array, default:["/home","/lesson","/mylesson","/question","/article","/myarticle"]} 
})

const RoleModel = mongoose.model('roles', roleSchema)

module.exports = RoleModel
