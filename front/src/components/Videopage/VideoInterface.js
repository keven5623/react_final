import React, { useRef, useState, useEffect } from "react";
import videoo from './image/zzz.mp4';

const VideoInterface = () => {
  const videoSelf = videoo;
  // const documentRef = useRef(null);
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);
  const videoControlBarRef = useRef(null);
  const progressRef = useRef(null);
  const progressBarRef = useRef(null);
  const voiceBarRef = useRef(null);
  const voiceFillRef = useRef(null);
  const showSpeedListRef = useRef(null)
  const vidoeSpeedUlRef = useRef(null)
  const [VideoEle, setVideoEle] = useState(false);
  const [fullScreenEle, setFullScreenEle] = useState(1);
  const [className, setClassName] = useState('videoControlBar');
  const [speed, setSpeed] = useState('1')
  const [speedBtn, setSpeedBtn] = useState(false)

  // 滑鼠移動增加className
  useEffect(() => {
    const handleMouseMove = () => {
      setClassName(`${className} hover`);
    };
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // // 大於三秒沒有偵測到移動滑鼠時取消 hover 效果
  useEffect(() => {
    const timeout = setTimeout(() => {
      // setIsHovering(false);
      setClassName(className.replace(' hover', ''));
    }, 5000);

    // 在組件卸載時清除 timeout
    return () => {
      clearTimeout(timeout);
    };
  }, [className]);

  // // 捕捉影片時間渲染時間進度條
  useEffect(() => {
    const handleProgress = () => {
      const percent = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      progressBarRef.current.style.flexBasis = `${percent}%`;
    }
    videoRef.current.addEventListener('timeupdate', handleProgress);
    return () => {
      videoRef.current.removeEventListener('timeupdate', handleProgress);
    };
  }, [])

  // // 點擊時間進度調控制影片進度
  useEffect(() => {
    const scrub = (e) => {
      const scrubTime = (e.offsetX / progressRef.current.offsetWidth) * videoRef.current.duration;
      videoRef.current.currentTime = scrubTime;
    }
    progressRef.current.addEventListener('click', scrub);
    return () => {
      progressRef.current.removeEventListener('click', scrub);
    };
  }, [progressRef, videoRef])

  // // 捕捉聲音渲染音量進度條
  useEffect(() => {
    const handleVolume = () => {
      const percent = (videoRef.current.volume / 1) * 100;
      voiceFillRef.current.style.flexBasis = `${percent}%`;
    }
    videoRef.current.addEventListener('volumechange', handleVolume);
    return () => {
      videoRef.current.removeEventListener('volumechange', handleVolume);
    };
  }, [])
  // 點擊音量Bar控制音量
  useEffect(() => {
    const voiceScrub = (e) => {
      const scrubV = (e.offsetX / voiceBarRef.current.offsetWidth);
      videoRef.current.volume = scrubV;
    }
    voiceBarRef.current.addEventListener('click', voiceScrub);
    return () => {
      voiceBarRef.current.removeEventListener('click', voiceScrub);
    };
  }, [])


  // 影片暫停與播放 
  const playToggle = () => {
    if (VideoEle === false) {
      setVideoEle(true); videoRef.current.play();
    } else {
      setVideoEle(false); videoRef.current.pause();
    }
  }
  // 影片快轉與倒轉
  const videoReverse = () => {
    videoRef.current.currentTime -= 15;
  }
  const videoForward = () => {
    videoRef.current.currentTime += 15;
  }
  // 全螢幕切換
  const videoFullScreen = () => {
    if (fullScreenEle === 1) {
      setFullScreenEle(2);
      videoContainerRef.current.requestFullscreen();
    } else {
      setFullScreenEle(1);
      document.exitFullscreen();
    }
  }
  // 影片播放速度按鈕點擊開合
  const switchSpeed = (e) => {
    if (speedBtn === false) {
      setSpeedBtn(true);
      showSpeedListRef.current.style.display = 'flex';
    } else {
      setSpeedBtn(false);
      showSpeedListRef.current.style.display = 'none';
    }
    // console.log(showSpeedListRef.current.querySelectorAll('li').indexOf());
    console.log(e.target);
  }
  // 點擊切換影片速度





  const stopPic = () => {
    switch (VideoEle) {
      case false:
        return (<svg width="35" height="35" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1.9736 0.098144C2.41975 0.105185 2.84887 0.204771 3.18433 0.378783L42.3499 20.6969C43.2167 21.1476 43.2167 21.9442 42.3499 22.3968L3.18433 42.715C1.94636 43.3597 0 42.8397 0 41.8641V1.12714C0.00151554 0.48943 0.893997 -0.0195406 1.97531 0.000576448L1.9736 0.098144Z" fill="white" />
        </svg>)
      case true:
        return (<svg width="35" height="35" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M36.7937 0.000327284C35.9916 0.00556999 35.1999 0.0758287 34.4637 0.207097C33.7276 0.338365 33.0614 0.528067 32.5033 0.765369C31.9452 1.00267 31.5061 1.28293 31.211 1.59013C30.916 1.89733 30.7708 2.22546 30.7838 2.55577V40.4848C30.7838 41.1519 31.4273 41.7917 32.5727 42.2633C33.7181 42.735 35.2716 43 36.8915 43C38.5113 43 40.0649 42.735 41.2103 42.2633C42.3557 41.7917 42.9992 41.1519 42.9992 40.4848V2.55577C43.0124 2.21868 42.8609 1.88393 42.5537 1.57143C42.2465 1.25893 41.79 0.975063 41.2111 0.736677C40.6322 0.498292 39.9428 0.31026 39.184 0.183762C38.4251 0.0572652 37.6123 -0.00511063 36.7937 0.000327284V0.000327284ZM6.01078 0.000327284C5.20867 0.00556999 4.41695 0.0758287 3.68079 0.207097C2.94463 0.338365 2.27848 0.528067 1.72038 0.765369C1.16228 1.00267 0.72313 1.28293 0.428082 1.59013C0.133033 1.89733 -0.012142 2.22546 0.000794387 2.55577V40.4848C0.000794387 41.1519 0.644299 41.7917 1.78972 42.2633C2.93514 42.735 4.48865 43 6.10852 43C7.72839 43 9.2819 42.735 10.4273 42.2633C11.5727 41.7917 12.2162 41.1519 12.2162 40.4848V2.55577C12.2295 2.21868 12.0779 1.88393 11.7708 1.57143C11.4636 1.25893 11.007 0.975063 10.4281 0.736677C9.84926 0.498292 9.15993 0.31026 8.40108 0.183762C7.64223 0.0572652 6.82933 -0.00511063 6.01078 0.000327284V0.000327284Z" fill="white" />
        </svg>
        )
      default:
        break;
    }
  }
  return (
    <div className="video" ref={videoContainerRef}  >
      <video
        onClick={playToggle}
        ref={videoRef}
        src={videoSelf}  >
      </video>
      <div className={className} ref={videoControlBarRef} >
        <div className="progress" ref={progressRef}>
          <div className="progressFilled" ref={progressBarRef}></div>
        </div>
        <div className="videoBtnContainer">
          <button onClick={videoReverse}>
            <svg width="35" height="35" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M41.8342 0.0979937C41.5707 0.105025 41.3172 0.204459 41.1191 0.378231L17.985 20.6685C17.473 21.1185 17.473 21.914 17.985 22.366L41.1191 42.6562C41.8503 43.3001 43 42.7808 43 41.8065V1.12557C42.9991 0.488741 42.4719 -0.0195137 41.8332 0.000575672L41.8342 0.0979937ZM24.2322 0.0987601C24.8689 0.080077 25.399 0.589939 25.399 1.22376V12.1724L16.9902 19.5653C15.8134 20.5999 15.8134 22.4883 16.9902 23.5229L25.399 30.9158V41.8645C25.4 42.8378 24.2523 43.3611 23.5181 42.7142L0.383976 22.424C-0.127992 21.974 -0.127992 21.1785 0.383976 20.7265L23.5181 0.436259C23.7162 0.262487 23.9697 0.163022 24.2332 0.155991L24.2322 0.0987601Z" fill="white" />
            </svg>
          </button>
        </div>
        <div className="videoBtnContainer">
          <button onClick={playToggle}>
            {stopPic()}
          </button>
        </div>
        <div className="videoBtnContainer">
          <button onClick={videoForward}>
            <svg width="35" height="35" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.16576 0.0979937C1.42928 0.105025 1.68275 0.204459 1.8809 0.378231L25.015 20.6685C25.527 21.1185 25.527 21.914 25.015 22.366L1.8809 42.6562C1.14966 43.3001 0 42.7808 0 41.8065V1.12557C0.000895189 0.488741 0.528061 -0.0195137 1.16676 0.000575672L1.16576 0.0979937ZM18.7678 0.0987601C18.1311 0.080077 17.601 0.589939 17.601 1.22376V12.1724L26.0098 19.5653C27.1866 20.5999 27.1866 22.4883 26.0098 23.5229L17.601 30.9158V41.8645C17.6 42.8378 18.7477 43.3611 19.4819 42.7142L42.616 22.424C43.128 21.974 43.128 21.1785 42.616 20.7265L19.4819 0.436259C19.2838 0.262487 19.0303 0.163022 18.7668 0.155991L18.7678 0.0987601Z" fill="white" />
            </svg>
          </button>
        </div>
        <div className="videoBtnContainer voiceBtn">
          <button>
            <svg width="35" height="35" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M21.2645 0.99023C21.0693 1.00222 20.8831 1.10301 20.7368 1.27586L11.6092 11.7487H2.55288C1.83979 11.7487 1.24792 12.2247 0.798668 12.815C0.554956 13.1142 0.358694 13.4757 0.221507 13.878C0.0843196 14.2803 0.00899689 14.7153 0 15.1571V27.6293C0 28.5909 0.356548 29.3812 0.798668 29.981C1.02338 30.3046 1.29438 30.5649 1.59567 30.7464C1.89696 30.9279 2.22244 31.027 2.55288 31.0378H11.6092L20.7368 41.6059C20.8607 41.7443 21.0114 41.8331 21.1716 41.8619C21.3317 41.8908 21.4946 41.8585 21.6416 41.7689C21.7886 41.6793 21.9135 41.5359 22.002 41.3554C22.0905 41.1749 22.1389 40.9647 22.1416 40.749V2.09464C22.1416 1.94217 22.1188 1.79123 22.0745 1.65072C22.0302 1.51022 21.9652 1.38298 21.8835 1.27651C21.8017 1.17004 21.7049 1.08648 21.5986 1.03078C21.4922 0.97507 21.3787 0.948342 21.2645 0.952153V0.99023ZM28.0532 7.27395C27.8011 7.2787 27.5557 7.38243 27.3475 7.57224C27.1393 7.76205 26.9775 8.02952 26.8825 8.34126C26.7874 8.65299 26.7632 8.9952 26.8129 9.32519C26.8626 9.65518 26.9839 9.95833 27.1618 10.1968C29.3913 13.1779 30.6436 17.2185 30.6436 21.4313C30.6436 25.6441 29.3913 29.6847 27.1618 32.6658C27.0245 32.8179 26.9124 33.0065 26.8327 33.2196C26.753 33.4327 26.7074 33.6657 26.6989 33.9036C26.6904 34.1416 26.7192 34.3793 26.7834 34.6015C26.8476 34.8238 26.9457 35.0258 27.0716 35.1945C27.1975 35.3633 27.3484 35.4952 27.5146 35.5817C27.6809 35.6683 27.8588 35.7076 28.037 35.6972C28.2153 35.6868 28.3899 35.627 28.5499 35.5214C28.7098 35.4158 28.8515 35.2669 28.9659 35.0841C31.6788 31.4599 33.2028 26.5457 33.2028 21.4218C33.2028 16.2979 31.6788 11.3837 28.9659 7.7595C28.8469 7.59734 28.7049 7.46839 28.5482 7.38013C28.3915 7.29187 28.2232 7.24607 28.0532 7.24538V7.27395ZM36.3251 7.60141e-05C36.0833 0.00830574 35.8482 0.107552 35.6469 0.286385C35.4455 0.465218 35.2861 0.716356 35.187 1.01087C35.0879 1.30539 35.0531 1.63129 35.0866 1.95105C35.1202 2.27081 35.2207 2.57141 35.3767 2.81822C38.6561 8.03214 40.4539 14.6228 40.4539 21.4313C40.4539 28.2399 38.6561 34.8305 35.3767 40.0444C35.2457 40.2107 35.1426 40.412 35.0739 40.6351C35.0053 40.8583 34.9727 41.0982 34.9783 41.3394C34.9839 41.5805 35.0275 41.8173 35.1064 42.0344C35.1853 42.2514 35.2976 42.4438 35.436 42.5989C35.5744 42.754 35.7357 42.8683 35.9095 42.9344C36.0833 43.0005 36.2655 43.0169 36.4444 42.9825C36.6232 42.948 36.7946 42.8636 36.9473 42.7347C37.1 42.6057 37.2306 42.4352 37.3306 42.2342C40.9927 36.405 43 29.0397 43 21.4313C43 13.823 40.9927 6.45769 37.3306 0.628436C37.2089 0.429898 37.0554 0.270378 36.8813 0.161622C36.7073 0.0528662 36.5172 -0.00234003 36.3251 7.60141e-05V7.60141e-05Z" fill="white" />
            </svg>
          </button>
          <div className="voiceBar" ref={voiceBarRef}>
            <div className="voiceFill" ref={voiceFillRef}></div>
          </div>
        </div>
        <div className=" videoSpeed">
          <div className="videoSpeedList" ref={showSpeedListRef}>
            <ul ref={vidoeSpeedUlRef}>
              <li value={2}>2x</li>
              <li value={1.5}>1.5X</li>
              <li value={1.25}>1.25x</li>
              <li value={1}>1x</li>
              <li value={0.75}>0.75x</li>
              <li value={0.5}>0.5x</li>
            </ul>
          </div>
          <button onClick={switchSpeed}><span>{speed}x</span></button>
        </div>
        <div className="videoBtnContainer fullScreenBtn">
          <button onClick={videoFullScreen}>
            <svg width="35" height="35" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.3756 0.128807C25.9911 0.292128 25.5892 0.798695 25.5209 1.19354C25.4097 1.87195 25.8116 2.60196 26.4439 2.83393C26.6065 2.89405 28.5638 2.9286 32.3413 2.9286H37.9997L30.4184 10.5459C25.085 15.9046 22.7946 18.266 22.7004 18.4894C22.461 19.0907 22.5807 19.683 23.0509 20.1213C23.5038 20.5422 24.0338 20.6364 24.6063 20.4049C24.8287 20.3102 27.179 18.0089 32.5123 12.6503L40.0937 5.03294V10.7267C40.0937 16.9958 40.0767 16.7553 40.6322 17.2448C41.1793 17.7258 41.9826 17.6912 42.5641 17.1591C43.0169 16.7382 42.9999 16.9958 42.9999 8.82029C42.9999 3.65906 42.9745 1.14284 42.9061 0.979514C42.7864 0.65332 42.4189 0.266554 42.0853 0.129256C41.6834 -0.0430391 26.7601 -0.0430396 26.3756 0.128807Z" fill="white" />
              <path d="M18.3769 22.6054C18.1804 22.6911 15.4026 25.4212 10.497 30.3486L2.90789 37.963V32.2713C2.90789 26.0132 2.92486 26.2451 2.36938 25.7558C1.64333 25.1122 0.438153 25.4297 0.0961147 26.3568C-0.0320382 26.6914 -0.0320382 41.6798 0.0961147 42.0148C0.215784 42.3409 0.583274 42.7271 0.916383 42.8648C1.32674 43.0451 16.1974 43.0451 16.6073 42.8648C17.4874 42.4871 17.7781 41.3196 17.1543 40.607C16.6671 40.049 16.9065 40.066 10.6676 40.066H5.0012L12.5819 32.4431C17.9156 27.095 20.2058 24.7341 20.2996 24.5111C20.539 23.9101 20.4193 23.3177 19.9491 22.8799C19.4963 22.4592 18.9408 22.3565 18.3769 22.6054Z" fill="white" />
            </svg>
          </button>
        </div>


      </div>
    </div>
  )
}

export default VideoInterface;