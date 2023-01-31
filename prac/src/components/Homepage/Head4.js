import React from "react";
import fiveStar from "./homepageImg/fiveStar.svg";
import feedBackProfilePic from "./homepageImg/feedBackProfilePic.png";

const Head4 = () => {
  return (
    <div className="head4">
      <h1>
        為什麼選擇<span> PLUS LAB </span>？
      </h1>
      <h3>來看看我們的會員怎麼說</h3>
      <div className="feedBackRow1">
        <div className="feedBack1">
          <img src={fiveStar} alt="" />
          <p>
            自從認識 PLUS LAB
            ，才發現投資其實真的不難，尤其是簡單上手的交易模擬器，買賣前多測試幾次，讓我少賠了不少冤枉錢。
          </p>
          <div className="feedBackAuthorBox">
            <img src={feedBackProfilePic} alt="" />
            <h6>Julie Wang</h6>
          </div>
        </div>
        <div className="feedBack2">
          <img src={fiveStar} alt="" />
          <p>
            PLUS LAB
            的課程多樣，可以依照自己的需求去選擇喜歡的老師和投資策略，是很全面完整的投資新手指南！
          </p>
          <div className="feedBackAuthorBox">
            <img src={feedBackProfilePic} alt="" />
            <h6>Julie Wang</h6>
          </div>
        </div>
      </div>
      <div className="feedBackRow2">
        <div className="feedBack3">
          <img src={fiveStar} alt="" />
          <p>
            對於自學的投資者而言，非常方便使用的平台，新聞和個股資訊都可以在這裡查到。
          </p>
          <div className="feedBackAuthorBox">
            <img src={feedBackProfilePic} alt="" />
            <h6>Julie Wang</h6>
          </div>
        </div>
        <div className="feedBack4">
          <img src={fiveStar} alt="" />
          <p>
            教學內容很詳細，簡單易懂，對於初入的小白很有幫助。
            <br />
            不僅學到了很多基本的知識，也可以直接在平台模擬操作實戰，這是其他都平台沒有的功能！
          </p>
          <div className="feedBackAuthorBox">
            <img src={feedBackProfilePic} alt="" />
            <h6>Julie Wang</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Head4;
