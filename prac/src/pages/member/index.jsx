import React, { Component } from 'react'
import {Button,Card,message,Modal,Table,Icon} from 'antd'

import {formateDate} from '../../utils/dateUtils'
import LinkButton from '../../components/link-button'
import {PAGE_SIZE} from '../../utils/constant'
import {reqDeleteUser, reqUser,reqAddOrUpdateUser,reqUpdateUser} from '../../api/index'
import UserForm from './user-form'

export default class Member extends Component {

  state={
    users:[], //所有用戶列表
    user:{}, //選中的user
    isShow:false,
    isShowAuth:false //是否顯示設置權限介面
  }

  initColumns = ()=>{
    this.columns=[
      {
        title:'用戶名',
        dataIndex:'username'
      },
      {
        title:'信箱',
        dataIndex:'email'
      },
      {
        title:'註冊時間',
        dataIndex:'create_time',
        render:(create_time)=> formateDate(create_time)
      },
      {
        title:'授權時間',
        dataIndex:'auth_time',
        render:(auth_time)=> formateDate(auth_time)
      },
      {
        title:'授權狀態',
        dataIndex:'auth_status',
      },
      
      {
        title:'操作',
        render:(user)=>(
          <div>
            <LinkButton onClick={()=>this.showUpdate(user)} style={{fontSize:15}}><Icon type="edit" />修改</LinkButton>
            <LinkButton onClick={()=>{this.deleteUser(user)}} style={{fontSize:15,marginLeft:15}}><Icon type="delete" />刪除</LinkButton>
          </div>
        )
      }
    ]
  }

  onRow =(user)=>{
    return {
      onClick: event => {// 點擊行
        this.setState({user})
      }, 
    }
  }

  //顯示修改頁面
  showUpdate=(user)=>{
    this.user = user;
    this.setState({isShow:true})
  }

  //刪除用戶
  deleteUser=(user)=>{
    Modal.confirm(
      {
        title: `確認刪除${user.username}嗎?`,
        
        onOk:async()=> {
          const result = await reqDeleteUser(user._id)
          if(result.status === 0){
            message.success('用戶刪除成功!')
            this.getUsers()
          }
        }
      }
    )
  }

  //添加或更新用戶
  addOrUpdateUser=async()=>{

    this.setState({isShow:false})

    //蒐集數據
      const user =this.form.getFieldsValue();
      this.form.resetFields()
      //如果是更新要給_id
      if(this.user){
        user._id = this.user._id
      }
    //發送請求
    const result = await reqAddOrUpdateUser(user)
    //更新顯示
    if(result.status === 0){
      message.success(`${this.user?'修改':'添加'}用戶成功`)
      this.getUsers()
    }
    
  }

  getUsers=async()=>{
    const result = await reqUser();
    if(result.status === 0){
      const {users} = result.data;
      this.setState({users})
    }
  }

  showAdd=()=>{
    this.user = null
    this.setState({isShow:true})
  }

  //授權用戶
  updateRole=async()=>{
    //隱藏確認框
    this.setState({isShowAuth:false})
    //蒐集數據
    const {user} = this.state 
    user.auth_time = Date.now();
    user.auth_level = 2;
    user.auth_status = '授權通過';
    // console.log(user)
    //請求更新
    const result = await reqUpdateUser(user)

    if(result.status === 0){
      message.success('設置權限成功')
      this.getUsers()
    }else{
      message.error('設置權限失敗')
    
    }
  }

  componentWillMount(){
    this.initColumns();
  }

  componentDidMount(){
    this.getUsers()
  }

  render() {
    const {users,isShow,user,isShowAuth} = this.state
    const thisuser = this.user || {}
    console.log(users)
    const title = (
      <span>
        <Button type='primary' onClick={this.showAdd}>創建用戶</Button>&nbsp;&nbsp;
        <Button type='primary' disabled={!user._id} onClick={()=>{this.setState({isShowAuth:true})}}>授權</Button>
      </span>
      )
    return (
      <Card title={title}>
        <Table
          bordered
          rowKey='_id'
          dataSource={users}
          columns={this.columns}
          pagination={{defaultPageSize:PAGE_SIZE}}
          rowSelection={{
            type:'radio',
            selectedRowKeys:[user._id],
            onSelect:(user)=>{
              this.setState({user})
            } 
          }}
          onRow={this.onRow}
        />
        <Modal
          title= {thisuser._id ?'修改用戶':'添加用戶'}
          visible={isShow}
          onOk={this.addOrUpdateUser}
          onCancel={()=>{
            this.form.resetFields()
            this.setState({isShow:false});
          }}
        >
          <UserForm setForm={(form)=>this.form= form} thisuser={thisuser} />
        </Modal>
        <Modal
          title="設置角色權限"
          visible={isShowAuth}
          onOk={this.updateRole}
          onCancel={()=>{
            this.setState({isShowAuth:false})
          }}
        >
          <div>確定要將此用戶升級成老師?</div>
        </Modal>
      </Card>
    )
  }
}
