/*
能操作products集合數據的Model
 */
// 1.引入mongoose
const mongoose = require('mongoose');


// 2.定義Schema
const lessonSchema = new mongoose.Schema({
  username:{type: String, required: true},//課程發布人
  name: {type: String, required: true}, // 課程標題
  author: {type: String, required: true}, // 課程作者
  update: {type: String}, //發布時間
  watch:{type:Number, default:0}, //0是未看過，1是看過
  detail: {type: String},//課程影片url
  lessonvideo:{type: Array}, //課程影片檔名
  desc:{type:String},//課程說明
  chapter:{type:String},//課程章節
  lessonprice:{type:Number},//課程價格
  prepic:{type:String},//縮圖url
})


// 3. 定義Model(與集合對應, 可以操作集合)
const LessonModel = mongoose.model('lesson', lessonSchema)

// 4. 向外暴露Model
module.exports = LessonModel