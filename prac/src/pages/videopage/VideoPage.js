import React from "react";
import ClassList from "../../components/Videopage/ClassList";
import VideoInterface from "../../components/Videopage/VideoInterface";
import InfoHead from "../../components/Videopage/InfoHead";
// import InfoBtn from "../components/Videopage/InfoBtn";
import InfoTabs from "../../components/Videopage/InfoTabs";
import Nav from '../../components/nav/Nav'
import NavLogOut from '../../components/nav/NavLogOut'
import Footer from "../../components/footer/Footer";
import memoryUtils from '../../utils/memoryUtils'


const VideoPage = () => {
  const username = memoryUtils.user.username ||memoryUtils.user.displayName || '';

  return (
    <div>
      {username ?<Nav />:<NavLogOut/>}
      <div className="allV">
        <div className="videoContainer">
          <VideoInterface />
          <ClassList />

        </div>
        <div className="infoContainer">
          <InfoHead />

          <div className="infoStar"></div>
          {/* <InfoBtn /> */}
          <InfoTabs />
          <div className="infoContent">
            <div className="infoContentText"></div>
            <div className="infoTeacher"></div>
          </div>
        </div>
      </div>
    <Footer/>
    </div>
  );
}

export default VideoPage;