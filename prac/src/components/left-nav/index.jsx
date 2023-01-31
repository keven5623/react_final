import React, { Component } from 'react'
import {Link , withRouter} from 'react-router-dom'
import { Menu, Icon } from 'antd';

import menuList from '../../config/menuConfig'
import './index.css'
import memoryUtils from '../../utils/memoryUtils'
import logo from "../../assets/imgs/logo.svg";


const { SubMenu } = Menu;
class LeftNav extends Component {

  //如果當前有item對應的權限才會顯示
  
  getMenuNodes =(menuList)=>{
    const path = this.props.location.pathname;
     return menuList.map(item =>{
      if(this.hasAuth(item)){
        if(!item.children){
          return (
            <Menu.Item key={item.key}>
              <Link to={item.key}>
                <Icon type={item.icon} /> 
                <span>{item.title}</span>
              </Link>
            </Menu.Item>
          )
        }else{
          const cItem = item.children.find(cItem => path.indexOf(cItem.key)===0)
          if (cItem) {
            this.openKey = item.key
          }
          return(
        <SubMenu
          key={item.key}
          title={
            <span>
              <Icon type={item.icon} />
              <span>{item.title}</span>
            </span>
          }
        >
          {this.getMenuNodes(item.children)}
        </SubMenu>
          )
        }
      }
     })
  }

  //判斷item是否有權限
  hasAuth=(item)=>{
    const key = item.key
    const menu = memoryUtils.user.menus
    const username = memoryUtils.user.username
    if(username === 'admin' || menu.indexOf(key) !==-1){
      return true
    }else if(item.children){
      return !!item.children.find((child)=>menu.indexOf(child.key) !==-1) 
    }
    return false
  }
  /*
  在第一次render()之前执行一次
  为第一个render()准备数据(必须同步的)
   */
  componentWillMount () {
    this.menuNodes = this.getMenuNodes(menuList)
  }

  render() {

    let path = this.props.location.pathname;
    if(path.indexOf('/admin/article')===0){  // 當前請求的是文章或其子路由介面
      path = '/admin/article'
    }else if(path.indexOf('/admin/lesson')===0){
      path = '/admin/lesson'
    }
    const openKey = this.openKey
    return (
      <div>
        <div className='left-nav'>
            <Link to='/' className='left-nav-header'>
              <img src={logo} alt="" />
            </Link> 
        </div>
      <Menu
      style={{backgroundColor:'black'}}
      selectedKeys={[path]}
      mode="inline"
      theme="dark"
      defaultOpenKeys={[openKey]}
    >
      {
            this.menuNodes
      }
      
    </Menu>
      </div>
      
    )
  }
}

export default withRouter(LeftNav)
