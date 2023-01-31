import React, { Component } from 'react'
import { message,Icon,Modal} from 'antd'

import storageUtils from '../../utils/storageUtils'
import memoryUtils from '../../utils/memoryUtils'
import Nav from '../../components/nav/Nav'
import NavLogOut from '../../components/nav/NavLogOut'
import Footer from "../../components/footer/Footer";
import {reqUpdateUser,reqUpdateUserInfo} from '../../api/index'
import PicturesWall from './picture'
import {BASE_IMG_URL} from '../../utils/constant'
import profilePic from  "../../assets/imgs/profilePic.png";
import Top from "../../components/top/Top";
import arrow from "../../components/Homepage/homepageImg/arrow.svg";
import backStage from "./profilePageImg/backStageIcon.svg";
import { Link, Redirect } from 'react-router-dom'
import ProfileStockCollection from './ProfileStockCollection'



export default class Profile extends Component {
  state={
    isShowMember:false,
    memberName:''
  }

  pw = React.createRef();

  beTeacher=async()=>{
    const user=  storageUtils.getUser()
    user.auth_status = '請求當老師'
    const result = await reqUpdateUser(user)
    if(result.status === 0){
      storageUtils.saveUser(user); //保存到local中
      memoryUtils.user = user; //保存到內存中
      
      message.success('請求成功')
    }else{
      message.error('請求失敗')
    
    }
  }

  
  profilSubmit=async()=>{
    const img = this.pw.current.getImg()
    const user=  storageUtils.getUser()
    console.log(!!img)
    if(!!img){
      user.user_profile = BASE_IMG_URL+img
      const result = await reqUpdateUser(user)
      if(result.status === 0){
        storageUtils.saveUser(user); //保存到local中
        memoryUtils.user = user; //保存到內存中
        message.success('更新大頭貼成功')
      }else{
        message.error('更新大頭貼失敗')
      }
    }
    
  }

  updateUser=async()=>{
    const memberinfo = storageUtils.getUser()
    const username = memoryUtils.user.username ||memoryUtils.user.displayName || '';
    if(this.state.memberName !== username && this.state.memberName){
      memberinfo.username = this.state.memberName
      const result = await reqUpdateUserInfo(memberinfo)
      if(result.status === 0 ){
        message.success('更新用戶名成功')
      }else{
        message.error('更新用戶名失敗')
      }
    }
    this.profilSubmit();
    this.setState({isShowMember:false})
  }

  render() {
    const {isShowMember,memberName} = this.state
    const dotNumber = new Intl.NumberFormat("en-US");
    const username = memoryUtils.user.username ||memoryUtils.user.displayName || '';
    const {user_profile,auth_level} = storageUtils.getUser()
    if(!username){
      return <Redirect to='/' />
    }
    return (
      <div>
        <Nav />
        <div className="profileTop">
          <div className="profileTitleBox">
              <div className="profileContainer">
                <div
                  className="profilePic"
                  style={{
                    backgroundImage: `url(${user_profile ? user_profile : profilePic})`,
                  }}
                ></div>
                <div className="titleContainer">
                  <h1>
                    Lv. {(username==='admin')?'4':auth_level}
                    <span>{username}</span>
                  </h1>
                  <h2>
                    {"當前體驗金餘額：$ " + dotNumber.format(30000)}
                  </h2>
                </div>
              </div>
              <div className="buttonBox">
                {(auth_level>=2||username==='admin')?
                <Link to='/admin'>
                  <button className="goToBackStage">
                  <img src={backStage} alt=""/>
                  前往後臺
                  <img src={arrow} alt="" />
                  </button>
                </Link>
              :
              <button onClick={this.beTeacher} className="beTeacher">我要當老師</button>
              }
                
                <button className="changeInfo" onClick={()=>this.setState({isShowMember:true})}>
                   修改個人帳戶資料
                </button>
                <Modal
                    title="會員資料"
                    okText='保存'
                    cancelText='取消'
                    visible={isShowMember}
                    onOk={this.updateUser}
                    onCancel={()=>{
                      this.setState({isShowMember:false})
                    }}
                  >
                    <div style={{marginBottom:'10px',fontSize:18}}>帳戶名:</div>
                    <input type="text" 
                    style={{width:'80%'}}
                    value={memberName} 
                    placeholder={username}
                    onChange={(e)=>{this.setState({memberName:e.target.value})}} />
                    <div style={{marginBottom:'10px',fontSize:18,marginTop:10}}>上傳大頭貼:</div>
                    <PicturesWall ref={this.pw} />
                </Modal>
                
              </div>
          </div>
        </div>
        <Top />
        <ProfileStockCollection />
        
        {/* <div className='profileDiv'>
          <div className='profileDivTop'>
            <img src={user_profile ? user_profile : profilePic} alt="" style={{width:60,height:60,borderRadius:'50%',objectFit:'cover'}}/>
            <div className='topDiv'>
              <Icon type="star" theme="filled" style={{color:'white',fontSize:25}}/>
              <div className='topDivLv'>Lv.{(username==='admin')?'4':auth_level}</div>
              <div className='topUsername'>{username}</div>
            </div>
            <div className='downDiv'>當前體驗金餘額</div>
          </div> */}
          {/* <button onClick={this.beTeacher}>我要當老師</button>
          <PicturesWall ref={this.pw} />
          <button onClick={this.profilSubmit}>提交</button> */}
        {/* </div> */}
        
       
      </div>
    )
  }
}
