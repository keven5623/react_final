import React from "react";
import { useState } from "react";

const Head5 = () => {
  const [maxHeight1, setmaxHeight1] = useState("0px");
  const [crossRotate1, setcrossRotate1] = useState("rotate(0deg)");
  const [maxHeight2, setmaxHeight2] = useState("0px");
  const [crossRotate2, setcrossRotate2] = useState("rotate(0deg)");
  const [maxHeight3, setmaxHeight3] = useState("0px");
  const [crossRotate3, setcrossRotate3] = useState("rotate(0deg)");
  const [maxHeight4, setmaxHeight4] = useState("0px");
  const [crossRotate4, setcrossRotate4] = useState("rotate(0deg)");
  const opneAnswer1 = () => {
    if (maxHeight1 === "0px") {
      setmaxHeight1("");
      setcrossRotate1("rotate(45deg)");
    }
    if (maxHeight1 !== "0px") {
      setmaxHeight1("0px");
      setcrossRotate1("rotate(0deg)");
    }
  };
  const opneAnswer2 = () => {
    if (maxHeight2 === "0px") {
      setmaxHeight2("");
      setcrossRotate2("rotate(45deg)");
    }
    if (maxHeight2 !== "0px") {
      setmaxHeight2("0px");
      setcrossRotate2("rotate(0deg)");
    }
  };
  const opneAnswer3 = () => {
    if (maxHeight3 === "0px") {
      setmaxHeight3("");
      setcrossRotate3("rotate(45deg)");
    }
    if (maxHeight3 !== "0px") {
      setmaxHeight3("0px");
      setcrossRotate3("rotate(0deg)");
    }
  };
  const opneAnswer4 = () => {
    if (maxHeight4 === "0px") {
      setmaxHeight4("");
      setcrossRotate4("rotate(45deg)");
    }
    if (maxHeight4 !== "0px") {
      setmaxHeight4("0px");
      setcrossRotate4("rotate(0deg)");
    }
  };

  return (
    <div className="head5">
      <h1>
        <span>常見問題</span>
      </h1>
      <br />
      <button className="question" onClick={opneAnswer1}>
        01<span>PLUS LAB 的服務是免費的嗎？</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg0"
          style={{ transform: `${crossRotate1}` }}
        >
          <rect y="11" width="24" height="2" />
          <rect x="13" width="24" height="2" transform="rotate(90 13 0)" />
        </svg>
      </button>
      <div className="answer" style={{ maxHeight: `${maxHeight1}` }}>
        <h4>
          PLUS LAB
          上大部分的功能都只須註冊即可開始使用，但如果您想在投資模擬器使用更高的額度，或者觀賞我們豐富的教學課程，則須購買我們的課程，達到一定的額度。
        </h4>
      </div>
      <button className="question" onClick={opneAnswer2}>
        02<span>哪些人適合使用 PLUS LAB？</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg0"
          style={{ transform: `${crossRotate2}` }}
        >
          <rect y="11" width="24" height="2" />
          <rect x="13" width="24" height="2" transform="rotate(90 13 0)" />
        </svg>
      </button>
      <div className="answer" style={{ maxHeight: `${maxHeight2}` }}>
        <h4>
          PLUS LAB
          歡迎所有對投資理財有興趣的使用者加入，不論您是完全的新手、有一定操作經驗的初學者，或者進階的分析大師。
        </h4>
      </div>
      <button className="question" onClick={opneAnswer3}>
        03<span>PLUS LAB 的線上課程可以看多久？</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg0"
          style={{ transform: `${crossRotate3}` }}
        >
          <rect y="11" width="24" height="2" />
          <rect x="13" width="24" height="2" transform="rotate(90 13 0)" />
        </svg>
      </button>
      <div className="answer" style={{ maxHeight: `${maxHeight3}` }}>
        <h4>PLUS LAB 的線上課程皆為預錄影片，購買課程後即可享無限次數觀看！</h4>
      </div>
      <button className="question" onClick={opneAnswer4}>
        04<span>如何與你們洽談合作，成為 PLUS LAB 上的老師？</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg0"
          style={{ transform: `${crossRotate4}` }}
        >
          <rect y="11" width="24" height="2" />
          <rect x="13" width="24" height="2" transform="rotate(90 13 0)" />
        </svg>
      </button>
      <div className="answer" style={{ maxHeight: `${maxHeight4}` }}>
        <h4>
          您可以在您的個人頁面，點選「我想當老師」按鈕，填寫我們的申請表單；我們會盡快審核您的申請資料，並請專人與您聯繫。
        </h4>
      </div>
      <div className="hr"></div>
    </div>
  );
};

export default Head5;
