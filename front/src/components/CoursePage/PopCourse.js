import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
const PopCourse = () => {
  const State = {
    popCourse: [
      {
        key: 1,
        img: "https://picsum.photos/500/300",
        url: "https://picsum.photos/500/300",
        title: "SAM老師的全方位股票分析法",
      },
      {
        key: 2,
        img: "https://picsum.photos/500/300",
        url: "https://picsum.photos/500/300",
        title: "SAM老師的全方位股票分析法",
      },
      {
        key: 3,
        img: "https://picsum.photos/500/300",
        url: "https://picsum.photos/500/300",
        title: "SAM老師的全方位股票分析法",
      },
      {
        key: 4,
        img: "https://picsum.photos/500/300",
        url: "https://picsum.photos/500/300",
        title: "SAM老師的全方位股票分析法",
      },
      {
        key: 5,
        img: "https://picsum.photos/500/300",
        url: "https://picsum.photos/500/300",
        title: "SAM老師的全方位股票分析法",
      },
    ],
  };

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "200px",
    slidesToShow: 1,
    speed: 500,
    slidesToScroll: 1,
    dots: true,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  return (
    <div className="dHotCarousel">
      <Slider {...settings}>
        {State.popCourse.map((v) => {
          return (
            <div key={v.key} className="slider">
              <div className="card">
                <div className="cardImg">
                  <img src={v.img} alt="" />
                </div>
                <ul>
                  <li>
                    <a href="#">
                      <span>PLay</span>
                    </a>
                  </li>
                </ul>
                <div className="titletxt">{v.title}</div>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default PopCourse;
