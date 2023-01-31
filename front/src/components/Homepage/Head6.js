import React from "react";
import { useState, useEffect } from "react";
import cooperateLogo1 from "./homepageImg/cooperateLogo1.svg";
import cooperateLogo2 from "./homepageImg/cooperateLogo2.svg";
import cooperateLogo3 from "./homepageImg/cooperateLogo3.svg";
import cooperateLogo4 from "./homepageImg/cooperateLogo4.svg";
import cooperateLogo5 from "./homepageImg/cooperateLogo5.svg";
import cooperateLogo6 from "./homepageImg/cooperateLogo6.svg";
import cooperateLogo7 from "./homepageImg/cooperateLogo7.svg";
import cooperateLogo8 from "./homepageImg/cooperateLogo8.svg";
import cooperateLogo9 from "./homepageImg/cooperateLogo9.svg";
import cooperateLogo10 from "./homepageImg/cooperateLogo10.svg";
import cooperateLogo11 from "./homepageImg/cooperateLogo11.svg";
import cooperateLogo12 from "./homepageImg/cooperateLogo12.svg";

let n = 0;
let m = 1920;
let interval = true;
const Head6 = () => {
  const [tickerTranslate, settickerTranslate] = useState("translateX(0px)");
  const [tickerTranslate2, settickerTranslate2] =
    useState("translateX(1920px)");

  const stopInterval = () => {
    interval = false;
  };
  const continueInterval = () => {
    interval = true;
  };

  const tickerMove = () => {
    if (interval) {
      if (n > -2640) {
        n = n - 1;
        settickerTranslate("translateX(" + n + "px)");
      }
      if (n === -720) {
        settickerTranslate2("translateX(" + m + "px)");
        m = m - 1;
        return;
      }
      if (m === 0) {
        n = 0;
        m = 1920;
        settickerTranslate("translateX(0px)");
        settickerTranslate2("translateX(1920px)");
      }
      if (m < 1920) {
        settickerTranslate2("translateX(" + m + "px)");
        m = m - 1;
      }
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      tickerMove();
    }, 50);
    // return () => {
    //   clearInterval(interval); // （重點）這裡清除掉定時器  
    // };
  },[]);

  return (
    <div className="head6">
      <h3>合作夥伴</h3>
      <div
        className="logoBox1"
        style={{ transform: `${tickerTranslate}` }}
        onMouseOver={stopInterval}
        onMouseLeave={continueInterval}
      >
        <img src={cooperateLogo1} alt="" />
        <img src={cooperateLogo2} alt="" />
        <img src={cooperateLogo3} alt="" />
        <img src={cooperateLogo4} alt="" />
        <img src={cooperateLogo5} alt="" />
        <img src={cooperateLogo6} alt="" />
        <img src={cooperateLogo7} alt="" />
        <img src={cooperateLogo8} alt="" />
        <img src={cooperateLogo9} alt="" />
        <img src={cooperateLogo10} alt="" />
        <img src={cooperateLogo11} alt="" />
        <img src={cooperateLogo12} alt="" />
      </div>
      <div
        className="logoBox2"
        style={{ transform: `${tickerTranslate2}` }}
        onMouseOver={stopInterval}
        onMouseLeave={continueInterval}
      >
        <img src={cooperateLogo1} alt="" />
        <img src={cooperateLogo2} alt="" />
        <img src={cooperateLogo3} alt="" />
        <img src={cooperateLogo4} alt="" />
        <img src={cooperateLogo5} alt="" />
        <img src={cooperateLogo6} alt="" />
        <img src={cooperateLogo7} alt="" />
        <img src={cooperateLogo8} alt="" />
        <img src={cooperateLogo9} alt="" />
        <img src={cooperateLogo10} alt="" />
        <img src={cooperateLogo11} alt="" />
        <img src={cooperateLogo12} alt="" />
      </div>
    </div>
  );
};

export default Head6;
