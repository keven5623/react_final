import React from "react";
import top from "../../assets/imgs/top.svg";
import { useState, useEffect } from "react";

const Top = () => {
  const [showScroll, setShowScroll] = useState("none");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 20) {
        setShowScroll("block");
      } else {
        setShowScroll("none");
      }
    });
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="top">
      <button style={{ display: `${showScroll}` }}>
        <img src={top} onClick={scrollToTop} />
      </button>
    </div>
  );
};

export default Top;
