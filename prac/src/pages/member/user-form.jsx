import React, {Component} from 'react'
import {
  Form,
  Input
} from 'antd'

const Item = Form.Item

/*
添加or修改用戶的form组件
 */
class UserForm extends Component {

  componentWillMount () {
    this.props.setForm(this.props.form)
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const user=this.props.thisuser || {}

    return (
      <Form>
        <Item label='角色名稱'>
          {
            getFieldDecorator('username', {
              initialValue: user.username,
              rules: [
                {required: true, message: '名稱必須輸入'},
                { pattern: /^[a-zA-Z0-9_]+$/, message: '用戶名必須是英文，數字，或下划線' }
              ]
            })(
              <Input placeholder='請输入用戶名稱'/>
            )
          }
        </Item>
        {user._id ? null :(
          <Item label='密碼'>
          {
            getFieldDecorator('password', {
              initialValue: user.password,
              rules: [
                {required: true, message: '密碼必須輸入'},
                { pattern: /^[a-zA-Z0-9_]+$/, message: '密碼必須是英文，數字，或下划線' }
              ]
            })(
              <Input type='password' placeholder='請输入用戶密碼'/>
            )
          }
          </Item>
          )
        }
        
        <Item label='信箱'>
          {
            getFieldDecorator('email', {
              initialValue: user.email,
              rules: [
                {required: true, message: '信箱必須輸入'},
                { pattern: /^[a-z0-9._-]+@[a-z]+\.[a-z]{2,4}$/, message: '信箱格式錯誤' }
              ]
            })(
              <Input type='email' placeholder='請输入信箱'/>
            )
          }
        </Item>
      </Form>
    )
  }
}

export default Form.create()(UserForm)