import React from "react";
import { useState, useEffect } from "react";

const Head2 = () => {
  // 測試setY到哪了
  // const [scrollY, setScrollY] = useState(0);
  // function getY() {
  //   setScrollY(window.pageYOffset);
  //   console.log(window.pageYOffset);
  // }
  // useEffect(() => {
  //   function watchScroll() {
  //     window.addEventListener("scroll", getY);
  //   }
  //   watchScroll();
  //   return () => {
  //     window.removeEventListener("scroll", getY);
  //   };
  // });

  const [filter1, setFilter1] = useState("blur(5px)");
  const [opacity1, setOpacity1] = useState("0");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll1);
    return () => {
      window.removeEventListener("scroll", handleScroll1);
    };
  }, []);

  function handleScroll1() {
    let scrollTop = window.pageYOffset;
    let showBlur = 5 - (scrollTop - 200) / 60;
    let showOpacity = (scrollTop - 200) / 300;
    let hideBlur = (scrollTop - 900) / 30;
    let hideOpacity = 1 - (scrollTop - 900) / 150;

    if (scrollTop > 1050) {
      setFilter1("blur(5px)");
      setOpacity1("0");
      return;
    }
    if (scrollTop > 900) {
      setFilter1(`blur(${hideBlur}px)`);
      setOpacity1(`${hideOpacity}`);
      return;
    }
    if (scrollTop > 500) {
      setFilter1("blur(0px)");
      setOpacity1("1");
    }
    if (scrollTop <= 500) {
      setFilter1(`blur(${showBlur}px)`);
      setOpacity1(`${showOpacity}`);
    }
  }
  const [filter2, setFilter2] = useState("blur(5px)");
  const [opacity2, setOpacity2] = useState("0");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll2);
    return () => {
      window.removeEventListener("scroll", handleScroll2);
    };
  });

  function handleScroll2() {
    let scrollTop = window.pageYOffset;
    let showBlur = 5 - (scrollTop - 600) / 60;
    let showOpacity = (scrollTop - 600) / 300;
    let hideBlur = (scrollTop - 1300) / 30;
    let hideOpacity = 1 - (scrollTop - 1300) / 150;

    if (scrollTop > 1450) {
      setFilter2("blur(5px)");
      setOpacity2("0");
      return;
    }
    if (scrollTop > 1300) {
      setFilter2(`blur(${hideBlur}px)`);
      setOpacity2(`${hideOpacity}`);
      return;
    }
    if (scrollTop > 900) {
      setFilter2("blur(0px)");
      setOpacity2("1");
    }
    if (scrollTop <= 900) {
      setFilter2(`blur(${showBlur}px)`);
      setOpacity2(`${showOpacity}`);
    }
  }
  const [filter3, setFilter3] = useState("blur(5px)");
  const [opacity3, setOpacity3] = useState("0");

  useEffect(() => {
    window.addEventListener("scroll", handleScroll3);
    return () => {
      window.removeEventListener("scroll", handleScroll3);
    };
  });

  function handleScroll3() {
    let scrollTop = window.pageYOffset;
    let showBlur = 5 - (scrollTop - 1000) / 60;
    let showOpacity = (scrollTop - 1000) / 300;
    let hideBlur = (scrollTop - 1600) / 30;
    let hideOpacity = 1 - (scrollTop - 1700) / 150;

    if (scrollTop > 1750) {
      setFilter3("blur(5px)");
      setOpacity3("0");
      return;
    }
    if (scrollTop > 1600) {
      setFilter3(`blur(${hideBlur}px)`);
      setOpacity3(`${hideOpacity}`);
      return;
    }
    if (scrollTop > 1300) {
      setFilter3("blur(0px)");
      setOpacity3("1");
    }
    if (scrollTop <= 1300) {
      setFilter3(`blur(${showBlur}px)`);
      setOpacity3(`${showOpacity}`);
    }
  }

  return (
    <div className="head2">
      <div
        className="slogan1"
        style={{ filter: `${filter1}`, opacity: `${opacity1}` }}
      >
        <h1>
          不想再當<span>股市小白</span>
        </h1>
        <h1>卻又不知道該從哪裡下手嗎？</h1>
      </div>
      <div
        className="slogan2"
        style={{ filter: `${filter2}`, opacity: `${opacity2}` }}
      >
        <h1>
          各式
          <span>專有名詞</span>看的模糊不清？
        </h1>
      </div>
      <div
        className="slogan3"
        style={{ filter: `${filter3}`, opacity: `${opacity3}` }}
      >
        <h1>擔心存款有去無回</h1>
        <h1>
          總是看著看著就<span>錯過下單機會</span>？
        </h1>
      </div>
    </div>
  );
};

export default Head2;
