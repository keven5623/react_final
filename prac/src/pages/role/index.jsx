import React, { Component } from 'react'
import {Card,Button,Table,Modal, message} from 'antd'

import {PAGE_SIZE} from '../../utils/constant'
import {reqRoles,reqAddRoles,reqUpdateRoles} from '../../api/index'
import AddForm from './add-form'
import AuthForm from './auth-form'
import {formateDate} from '../../utils/dateUtils'

export default class Role extends Component {

  auth = React.createRef();

  state={
    roles:[], //所有角色的列表
    role:{}, //選中的role
    isShowAdd:false, //是否顯示添加介面
    isShowAuth:false //是否顯示設置權限介面
  }

  initColumn = ()=>{
    this.columns=[
      {
        title:'角色名稱',
        dataIndex:'name'
      },
      {
        title:'創建時間',
        dataIndex:'create_time',
        render:(create_time)=> formateDate(create_time)
      },
      {
        title:'授權時間',
        dataIndex:'auth_time',
        render:(auth_time)=> formateDate(auth_time)
      },
      {
        title:'授權人',
        dataIndex:'auth_name'
      },
    ]
  }

  getRoles=async()=>{
    const result = await reqRoles();
    if(result.status === 0){
      const roles = result.data;
      this.setState({roles})
    }
  }

  onRow =(role)=>{
    return {
      onClick: event => {// 點擊行
        this.setState({role})
      }, 
    }
  }

  //添加角色
  addRole=()=>{
    //進行表單驗證，通過了才繼續
    this.form.validateFields(async(error,values)=>{
      if(!error){
        //隱藏確認框
        this.setState({isShowAdd:false})
        //蒐集數據
        const {roleName} = values
        this.form.resetFields()
        //請求添加
        const result = await reqAddRoles(roleName);
        if(result.status === 0){
          message.success('添加角色成功');
          //新生成的角色
          const role = result.data
          //更新roles的狀態
          this.setState(state => ({
            roles: [...state.roles, role]
          }))
        }else{
          message.error('添加角色失敗')
        }
        
      }
    })
    
  }

  //更新角色權限
  updateRole=async()=>{
    const role = this.state.role;
    
      //隱藏確認框
    this.setState({isShowAuth:false})
    //得到最新menus
    const menus = this.auth.current.getMenus()
    role.menus = menus;
    role.auth_time = Date.now();
    role.auth_name = 'admin' 
    //請求更新
    const result = await reqUpdateRoles(role);
    if(result.status === 0){
      message.success('設置權限成功')
      this.getRoles()
    }else{
      message.error('設置權限失敗')
    
    }
    


  }

  componentDidMount(){
    this.getRoles();
  }

  componentWillMount(){
    this.initColumn()
  }
  render() {
    const {roles,role,isShowAdd,isShowAuth} = this.state
    const title = (
      <span>
        <Button type='primary' onClick={()=>{this.setState({isShowAdd:true})}}>創建角色</Button>&nbsp;&nbsp;
        <Button type='primary' disabled={!role._id || role.auth_name !== 'admin'} onClick={()=>{this.setState({isShowAuth:true})}}>設置角色權限</Button>
      </span>
    )
    return (
      <Card title={title}>
        <Table
          bordered
          rowKey='_id'
          dataSource={roles}
          columns={this.columns}
          pagination={{defaultPageSize:PAGE_SIZE}}
          rowSelection={{
            type:'radio',
            selectedRowKeys:[role._id],
            onSelect:(role)=>{
              this.setState({role})
            } 
          }}
          onRow={this.onRow}
        />

        <Modal
          title="添加角色"
          visible={isShowAdd}
          onOk={this.addRole}
          onCancel={()=>{
            this.setState({isShowAdd:false})
          }}
        >
          <AddForm
            setForm={(form)=>{this.form=form}}
          />
        </Modal>

        <Modal
          title="設置角色權限"
          visible={isShowAuth}
          onOk={this.updateRole}
          onCancel={()=>{
            this.setState({isShowAuth:false})
          }}
        >
          <AuthForm ref={this.auth} role={role}/>
        </Modal>

      </Card>
    )
  }
}
