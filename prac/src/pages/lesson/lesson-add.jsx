import React, { Component } from 'react'
import {Form,Card,Input,Button,Icon, message} from 'antd'

import LinkButton from '../../components/link-button'
import {reqAddLesson} from '../../api'
import {formateDate} from '../../utils/dateUtils'
import storageUtils from '../../utils/storageUtils'
import PicturesLesson from './picture'
import {BASE_IMG_URL} from '../../utils/constant'
import TodoList from '../../components/todoList/index'

const {Item} = Form;

class LessonAdd extends Component {

  lv = React.createRef();
  
  
  submit=()=>{
    this.props.form.validateFields(async(error,values)=>{
      if(!error){
        //蒐集數據
        const {username} = storageUtils.getUser()
        const {name,author} = values
        const lessonvideo = this.lv.current.getImg()
        const detail = BASE_IMG_URL+lessonvideo;
        const update = formateDate(Date.now());
        const article = {username,name,author,lessonvideo,detail,update};
        //如果是修改要加_id
        if(this.isUpdate){
          article._id = this.article._id
        }
        //調用接口去發表課程
        const result = await reqAddLesson(article);
        if(result.status === 0){
          message.success(`${this.isUpdate?'修改':'發表'}課程成功`);
          this.props.history.goBack()
        }else{
          message.error(`${this.isUpdate?'修改':'發表'}文章失敗`);
        }
      }
    })
  }

  componentWillMount(){
    const article = this.props.location.state;//如果是修改代表有值，否則沒值
    this.isUpdate = !!article //強制轉換成布林值，保存是否為點擊修改
    this.article = article || {}
  }
  
  render() {
    const {isUpdate,article} = this
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      wrapperCol: { span: 12 },
    };

    const title = (
      <span>
        <LinkButton  onClick={()=>{this.props.history.goBack()}}>
          <Icon type='arrow-left'/>
        </LinkButton>
        <span>{isUpdate ? '修改課程':'添加課程'}</span>
      </span>
    )

    return (
      <Card title={title}>
        <Form {...formItemLayout}>
          <Item>
            <div style={{fontWeight:'bolder',fontSize:15}}>課程標題:</div>
            {getFieldDecorator('name',{
              initialValue:article.name,
              rules:[
                {required:true,message:'必須輸入課程標題'}
              ]
            })(
              <Input 
            placeholder='請輸入標題(上限25字)'
            maxLength={25}
            />
            )}
          </Item>
          <Item>
            <div style={{fontWeight:'bolder',fontSize:15}}>作者:</div>
            {getFieldDecorator('author',{
              initialValue:article.author,
              rules:[
                {required:true,message:'必須輸入作者'}
              ]
            })(
              <Input 
            placeholder='請輸入作者(上限25字)'
            maxLength={25}
            />
            )}
          </Item>
          <Item wrapperCol={ {span: 20} }>
            <div style={{fontWeight:'bolder',fontSize:15}}>課程影片:</div>
              <PicturesLesson ref={this.lv} lessonvideo={article.lessonvideo}/>
          </Item>
          {/* <TodoList/> */}
          <Item>
            <Button type='primary' onClick={this.submit}>發表</Button>
          </Item>
        </Form>
      </Card>
    )
  }
}


const WrapLogin1 = Form.create()(LessonAdd)
export default WrapLogin1