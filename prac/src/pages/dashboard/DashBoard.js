import React from "react";
import Top from "../../components/top/Top";
import DashboardMain from "../../components/Dashboard/DashboardMain";
import DashBoardBottom from "../../components/Dashboard/DashboardBottom";
import Nav from '../../components/nav/Nav'
import NavLogOut from '../../components/nav/NavLogOut'
import Footer from "../../components/footer/Footer";
import memoryUtils from '../../utils/memoryUtils'



const DashBoard = () => {
  const username = memoryUtils.user.username ||memoryUtils.user.displayName || '';

  return (
    <>
      {username ?<Nav />:<NavLogOut/>}
      <DashboardMain />
      <DashBoardBottom />
      <Top />
      <Footer/>
    </>
  );
};
export default DashBoard;
