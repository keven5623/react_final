import React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {Modal,Icon} from 'antd'

import logo from "../../assets/imgs/logo.svg";
import profilePic from "../../assets/imgs/profilePic.png";
import coupon from "../../assets/imgs/couponIcon.svg";
import profile from "../../assets/imgs/profileIcon.svg";
import history from "../../assets/imgs/historyIcon.svg";
import backStage from "../../assets/imgs/backStageIcon.svg";
import logOut from "../../assets/imgs/logOutIcon.svg";
import storageUtils from '../../utils/storageUtils'
import memoryUtils from '../../utils/memoryUtils'
import {BASE_IMG_URL} from '../../utils/constant'

let n = "";
const Nav = () => {
  const [idNews, setIdNews] = useState("");
  const [idDashboard, setIdDashboard] = useState("");
  const [idCourse, setIdCourse] = useState("");
  const [idMycourse, setIdMycourse] = useState("");
  const [idmyCollection, setIdmyCollection] = useState("");
  const [idShoppingCart, setIdShoppingCart] = useState("");

  const {auth_level,username,user_profile} = storageUtils.getUser()
  const memberLogOut =()=>{
    storageUtils.removeUser();
    storageUtils.removeWatch();
    memoryUtils.user = {};
  }
  const colorNone = () => {
    n = "none";
    colorActive();
  };
  const colorNews = () => {
    n = "news";
    colorActive();
  };
  const colorDashboard = () => {
    n = "dashboard";
    colorActive();
  };
  const colorCourse = () => {
    n = "course";
    colorActive();
  };
  const colorMycourse = () => {
    n = "myCourse";
    colorActive();
  };
  const colorMyCollection = () => {
    n = "myCollection";
    colorActive();
  };
  const colorShoppingCart = () => {
    n = "shoppindCart";
    colorActive();
  };

  const colorActive = () => {
    if (n == "news") {
      setIdNews("active");
      setIdDashboard("");
      setIdCourse("");
      setIdMycourse("");
      setIdmyCollection("");
      setIdShoppingCart("");
      return;
    }
    if (n == "dashboard") {
      setIdNews("");
      setIdDashboard("active");
      setIdCourse("");
      setIdMycourse("");
      setIdmyCollection("");
      setIdShoppingCart("");
      return;
    }
    if (n == "course") {
      setIdNews("");
      setIdDashboard("");
      setIdCourse("active");
      setIdMycourse("");
      setIdmyCollection("");
      setIdShoppingCart("");
      return;
    }
    if (n == "myCourse") {
      setIdNews("");
      setIdDashboard("");
      setIdCourse("");
      setIdMycourse("active");
      setIdmyCollection("");
      setIdShoppingCart("");
      return;
    }
    if (n == "myCollection") {
      setIdNews("");
      setIdDashboard("");
      setIdCourse("");
      setIdMycourse("");
      setIdmyCollection("active");
      setIdShoppingCart("");
      return;
    }
    if (n == "shoppindCart") {
      setIdNews("");
      setIdDashboard("");
      setIdCourse("");
      setIdMycourse("");
      setIdmyCollection("");
      setIdShoppingCart("active");
      return;
    } else {
      setIdNews("");
      setIdDashboard("");
      setIdCourse("");
      setIdMycourse("");
      setIdmyCollection("");
      setIdShoppingCart("");
      return;
    }
  };

  useEffect(() => {
    colorActive();
  }, []);

  

  return (
    <nav>
      <Link to="/" onClick={colorNone}>
        <img src={logo} alt="" />
      </Link>
      <input type="text" placeholder="查股市、查課程" />
      <Link to="/" onClick={colorNews} id={`${idNews}`}>
        最新資訊
      </Link>
      <Link to="/dashboard" onClick={colorDashboard} id={`${idDashboard}`}>
        交易模擬器
      </Link>
      <Link to="/" onClick={colorCourse} id={`${idCourse}`}>
        課程列表
      </Link>
      <Link to="/video" onClick={colorMycourse} id={`${idMycourse}`}>
        我的課程
      </Link>
      <Link to="/" onClick={colorMyCollection} id={`${idmyCollection}`}>
        <svg
          className="collection"
          width="20"
          height="26"
          viewBox="0 0 20 26"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="collectionBackground"
            d="M2.85714 0H17.1429C18.7143 0 20 1.3 20 2.88889V26L10 21.6667L0 26L0.014286 2.88889C0.014286 1.3 1.28571 0 2.85714 0Z"
          />
          <path
            className="collectionBorder"
            d="M17.1429 0H2.85714C1.28571 0 0.014286 1.3 0.014286 2.88889L0 26L10 21.6667L20 26V2.88889C20 1.3 18.7143 0 17.1429 0ZM17.1429 21.6667L10 18.5178L2.85714 21.6667V2.88889H17.1429V21.6667Z"
            fill="#E23965"
          />
        </svg>
      </Link>
      <Link to="/Coursepage/Cartpage" onClick={colorShoppingCart} id={`${idShoppingCart}`}>
        <svg
          className="shoppingCart"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M7.2 19.2C5.88 19.2 4.812 20.28 4.812 21.6C4.812 22.92 5.88 24 7.2 24C8.52 24 9.6 22.92 9.6 21.6C9.6 20.28 8.52 19.2 7.2 19.2ZM0 0V2.4H2.4L6.72 11.508L5.1 14.448C4.908 14.784 4.8 15.18 4.8 15.6C4.8 16.92 5.88 18 7.2 18H21.6V15.6H7.704C7.536 15.6 7.404 15.468 7.404 15.3L7.44 15.156L8.52 13.2H17.46C18.36 13.2 19.152 12.708 19.56 11.964L23.856 4.176C23.952 4.008 24 3.804 24 3.6C24 2.94 23.46 2.4 22.8 2.4H5.052L3.924 0H0ZM19.2 19.2C17.88 19.2 16.812 20.28 16.812 21.6C16.812 22.92 17.88 24 19.2 24C20.52 24 21.6 22.92 21.6 21.6C21.6 20.28 20.52 19.2 19.2 19.2Z" />
        </svg>
      </Link>
      <Link to="/" onClick={colorNone}>
        <svg
          className="alert"
          width="21"
          height="24"
          viewBox="0 0 21 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M8.01143 21.7257C8.01143 22.9829 9.02857 24 10.2857 24C11.5429 24 12.56 22.9829 12.56 21.7257H8.01143ZM18.1486 16.9371V10.2857C18.1486 6.57143 15.5771 3.46286 12.1029 2.64V1.81714C12.1029 0.811428 11.2914 0 10.2857 0C9.28 0 8.46857 0.811428 8.46857 1.81714V2.64C4.99429 3.46286 2.42286 6.57143 2.42286 10.2857V16.9371L0 19.36V20.5714H20.5714V19.36L18.1486 16.9371Z" />
        </svg>
      </Link>
      <div className="profilePic">
        <img src={user_profile ? user_profile : profilePic} alt="" onClick={colorNone} style={{width:50,height:50,borderRadius:'50%',objectFit:'cover'}}/>
        <div>
          <div className="mouth"></div>
          <ul className="dropDown">
            <Link to="/" onClick={colorNone}>
              <li>
                <div className="listbox">
                  <img src={coupon} />
                  <span>領折扣</span>
                </div>
              </li>
            </Link>
            <Link to="/profile" onClick={colorNone}>
              <li>
                <div className="listbox">
                  <img src={profile} alt=""/>
                  <span>個人資料</span>
                </div>
              </li>
            </Link>
            <Link to="/" onClick={colorNone}>
              <li>
                <div className="listbox">
                  <img src={history} alt="" />
                  <span>課程訂單</span>
                </div>
              </li>
            </Link>
            {(auth_level===1 && username !== 'admin') ? null: (<Link to="/admin" onClick={colorNone}>
              <li className="backStage">
                <div className="listbox">
                  <img src={backStage} alt="" />
                  <span>後臺資料</span>
                </div>
              </li>
            </Link>)}
            
            <Link to='/login' onClick={colorNone}>
              <li onClick={memberLogOut}>
                <div className="listbox">
                  <img src={logOut} alt="" />
                  <span>登出</span>
                </div>
              </li>
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
