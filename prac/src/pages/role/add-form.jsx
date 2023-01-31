import React, {Component} from 'react'
import {
  Form,
  Select,
  Input
} from 'antd'

const Item = Form.Item
const Option = Select.Option

/*
添加分类的form组件
 */
class AddForm extends Component {

  componentWillMount () {
    this.props.setForm(this.props.form)
  }

  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <Form>
        <Item label='角色名稱'>
          {
            getFieldDecorator('name', {
              initialValue: '',
              rules: [
                {required: true, message: '角色名稱必須輸入'}
              ]
            })(
              <Input placeholder='請输入角色名稱'/>
            )
          }
        </Item>
      </Form>
    )
  }
}

export default Form.create()(AddForm)