import React from "react";
import { useState, useEffect } from "react";

const Head3 = () => {
  const [translateX, settranslateX] = useState("translateX(-536px)");
  const [position, setposition] = useState("relative");
  const [top, settop] = useState("0px");

  useEffect(() => {
    window.addEventListener("scroll", scrollToChangeTranslate);
    return () => {
      window.removeEventListener("scroll", scrollToChangeTranslate);
    };
  }, []);

  function scrollToChangeTranslate() {
    let scrollTop = window.pageYOffset;
    let moveX = (scrollTop - 2040) / 1.3;

    if (scrollTop <= 2040) {
      settranslateX("translateX(0px)");
      setposition("sticky");
      settop("88px");
      return;
    }
    if (scrollTop > 2040 && scrollTop <= 2740) {
      settranslateX(`translateX(-${moveX}px)`);
      setposition("sticky");
      settop("88px");
      return;
    }
    if (scrollTop > 2740 && scrollTop <= 3400) {
      settranslateX("translateX(-540px)");
      setposition("absolute");
      settop("2800px");
      return;
    }
  }

  return (
    <>
      <div className="head3" style={{ position: `${position}`, top: `${top}` }}>
        <h1>
          開始投資，其實<span>很簡單</span>
        </h1>
        <h3>因為我們已經為你準備好了</h3>
        <div className="container" style={{ transform: `${translateX}` }}>
          <div className="box1">
            <div className="pic"></div>
            <h3>最豐富的財經新聞</h3>
          </div>
          <div className="box2">
            <div className="pic"></div>
            <h3>最真實的委託模擬</h3>
          </div>
          <div className="box3">
            <div className="pic"></div>
            <h3>最多樣的教學課程</h3>
          </div>
          <div className="box4">
            <div className="pic"></div>
            <h3>最直覺的使用介面</h3>
          </div>
        </div>
      </div>
      <div className="hideBox" style={{ height: "1658px" }}></div>
    </>
  );
};

export default Head3;
