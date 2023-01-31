import React, { Component } from 'react'
import { Form, Icon, Input, Button, message } from 'antd';
import { Redirect,Link } from 'react-router-dom';
import { signInWithEmailAndPassword ,sendEmailVerification ,createUserWithEmailAndPassword ,onAuthStateChanged } from "firebase/auth";

import logo from '../../assets/imgs/logo.png'
import {reqAddUser} from '../../api'
import memoryUtils from '../../utils/memoryUtils';
import storageUtils from '../../utils/storageUtils';
import './index.css'
import {auth} from '../../config/firebase'
import NavLogOut from '../../components/nav/NavLogOut'
import Footer from '../../components/footer/Footer'


class Regiser extends Component {

  //發送信箱驗證信
  registerEmail=()=>{
    const user =this.props.form.getFieldsValue();
    const {email,password} = user  
    //firebase登入
        //創建用戶
        createUserWithEmailAndPassword(auth,email, password)
            .then(result => {
                console.log(result);
                //登入用戶
                signInWithEmailAndPassword(auth,email, password)
                .then(userCredential => {
                    console.log(userCredential);
                    //firebase發送驗證信
                    onAuthStateChanged(auth,(userCredential)=> {
                      if(userCredential !== null) {
                          // 使用者已登入，可以取得資料
                          sendEmailVerification(userCredential)
                          .then(function() {
                              // 驗證信發送完成
                              window.alert('驗證信已發送到您的信箱，請查收。')
                          }).catch(error => {
                              // 驗證信發送失敗
                              console.log('驗證信發送失敗',error);
                          });
                      } else {
                          // 使用者未登入
                          console.log('使用者未登入')
                      }
                    });
                })
                .catch(error => {
                    console.log(error.message);
                });
            }).catch(function(error) {
                console.log(error.message)
            });
          
       
  }
  
  
  //添加用戶
  handleSubmit=async(event)=>{
    event.preventDefault();
    //蒐集數據
      const user =this.props.form.getFieldsValue();
      this.props.form.resetFields()
      
      

    //發送請求
    const result = await reqAddUser(user)
    //更新顯示
    if(result.status === 0){
      message.success('註冊成功')
      this.props.history.replace('/login')
    }else{
      message.error('註冊失敗')
    }
    
  }


  render() {
    const username = memoryUtils.user.username ||memoryUtils.user.displayName || '';
    const form = this.props.form;
    const { getFieldDecorator } = form;
    return (
      <div>
        <NavLogOut/>
        <div className='login'>
          <div className='login-header'>
            <img src={logo} alt="logo" style={{width:'auto'}}/>
            <h1 style={{marginBottom: 0}}>會員註冊系統</h1>
          </div>
          <div className='login-background'> </div>
          <div className='login-content'>
            <h2 style={{textAlign:'center',fontSize:30,fontWeight:'bold'}}>註冊</h2>
            <div style={{textAlign:'end',color:'blue',cursor:'pointer'}} onClick={()=>this.props.history.push('/login')}>返回登入</div>
            <Form onSubmit={this.handleSubmit} className="login-form">
              <Form.Item>
                  {
                    getFieldDecorator('username',{
                      rules: [
                        { required: true,whitespace:true, message: '請輸入用戶名' },
                        { min: 4, message: '用戶名至少4位' },
                        { max: 12, message: '用戶名最多12位' },
                        { pattern: /^[a-zA-Z0-9_]+$/, message: '用戶名必須是英文，數字，或下划線' }
                      ],
                    })(
                      <Input
                        prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="帳號"
                      />
                    )
                  }
              </Form.Item>
              <Form.Item>
              {
                    getFieldDecorator('password',{
                      rules: [
                        { required: true,whitespace:true, message: '請輸入密碼' },
                        { min: 6, message: '密碼至少6位' },
                        { max: 12, message: '密碼最多12位' },
                        { pattern: /^[a-zA-Z0-9_]+$/, message: '密碼必須是英文，數字，或下划線' }
                      ],
                    })(
                      <Input
                        prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        type="password"
                        placeholder="密碼"
                      />
                    )
              }
              </Form.Item>
              <Form.Item>
                  {
                    getFieldDecorator('email',{
                      rules: [
                        { required: true,whitespace:true, message: '請輸入信箱' },
                        { pattern: /^[a-z0-9._-]+@[a-z]+\.[a-z]{2,4}$/, message: '信箱格式錯誤' }
                      ],
                    })(
                      <Input
                        prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
                        placeholder="信箱"
                        style={{width:'65%',marginRight:10}}
                      />
                    )
                  }
                  <span><Button style={{fontWeight:'bold'}} onClick={this.registerEmail}>發送驗證信</Button></span>
              </Form.Item>
              <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                  註冊
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        {/* <Footer/> */}
      </div>
      
    )
  }
}

const WrapLogin = Form.create()(Regiser)
export default WrapLogin
