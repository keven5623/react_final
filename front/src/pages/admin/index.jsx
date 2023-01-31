import React, { Component } from 'react'
import {Redirect,Route ,Switch,Link} from 'react-router-dom'
import memoryUtils from '../../utils/memoryUtils'
import { Layout } from 'antd';
import LeftNav from '../../components/left-nav';
import Header from '../../components/header';
 
import logo from "../../assets/imgs/logo.svg";
import Home from '../home'
import Lesson from '../lesson'
import MyLesson from '../mylesson'
import MyArticle from '../myarticle'
import Question from '../question'
import Article from '../article'
import Member from '../member'
import Role from '../role'

const {Footer, Sider, Content } = Layout;

export default class Admin extends Component {
  
  render() {
    const username = memoryUtils.user.username ||memoryUtils.user.displayName || '';
    if(!username){
      //如果沒登入，自動跳轉到登入頁面
      return <Redirect to='/login' />
    }
    
    return (
      <Layout style={{minHeight:'100%'}}>
        <Sider>
          <LeftNav/>
        </Sider>
      
      <Layout>
        <Header>Header</Header>
        <Content style={{margin:20,backgroundColor:'white'}}>
          <Switch>
            <Route path='/admin/home' component={Home}/>
            <Route path='/admin/lesson' component={Lesson}/>
            <Route path='/admin/mylesson' component={MyLesson}/>
            <Route path='/admin/question' component={Question}/>
            <Route path='/admin/article' component={Article}/>
            <Route path='/admin/myarticle' component={MyArticle}/>
            <Route path='/admin/role' component={Role}/>
            <Route path='/admin/member' component={Member}/>
            <Redirect to='/admin/home' />
          </Switch>
        </Content>
        <div  style={{textAlign : 'center ',color:'gray',height:50,lineHeight:'50px',fontSize:10}}>CopyRight&copy;股票實驗室</div>
      </Layout>
    </Layout>
    )
  }
}
