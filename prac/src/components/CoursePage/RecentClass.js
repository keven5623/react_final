import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import StarScore from "./StarScore";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const RecentClass = () => {
  const State = {
    NewCourse: [
      {
        id: 1,
        img: "https://picsum.photos/500/300",
        url: "https://picsum.photos/500/300",
        title: "新手必學的3件事 - 進場點、停損點、停利點",
        special: 3200,
        text: " 一堂能讓各種交易風格都能更強大的衝刺課程！夠短，夠直接，能兼容在不同投資思維之中，能兼容在不同投資思維之中",
        star: 4,
        ratecount: 41,
        students: 752,
        videLength: 2.5,
        teacher: "王希律",
      },
      {
        id: 2,
        img: "https://picsum.photos/500/300",
        url: "https://picsum.photos/500/300",
        title: "新手必學的3件事 - 進場點、停損點、停利點",
        special: 3200,
        text: " 一堂能讓各種交易風格都能更強大的衝刺課程！夠短，夠直接，能兼容在不同投資思維之中，能兼容在不同投資思維之中",
        star: 3,
        ratecount: 41,
        students: 752,
        videLength: 2.5,
        teacher: "黃律",
      },
      {
        id: 3,
        img: "https://picsum.photos/500/300",
        url: "https://picsum.photos/500/300",
        title: "新手必學的3件事 - 進場點、停損點、停利點",
        special: 3200,
        text: " 一堂能讓各種交易風格都能更強大的衝刺課程！夠短，夠直接，能兼容在不同投資思維之中，能兼容在不同投資思維之中",
        star: 4,
        ratecount: 41,
        students: 752,
        videLength: 2.5,
        teacher: "王希律",
      },
      {
        id: 4,
        img: "https://picsum.photos/500/300",
        url: "https://picsum.photos/500/300",
        title: "新手必學的3件事 - 進場點、停損點、停利點",
        special: 3200,
        text: " 一堂能讓各種交易風格都能更強大的衝刺課程！夠短，夠直接，能兼容在不同投資思維之中，能兼容在不同投資思維之中",
        star: 4,
        ratecount: 41,
        students: 752,
        videLength: 2.5,
        teacher: "王希律",
      },
      {
        id: 5,
        img: "https://picsum.photos/500/300",
        url: "https://picsum.photos/500/300",
        title: "新手必學的3件事 - 進場點、停損點、停利點",
        special: 3200,
        text: " 一堂能讓各種交易風格都能更強大的衝刺課程！夠短，夠直接，能兼容在不同投資思維之中，能兼容在不同投資思維之中",
        star: 4,
        ratecount: 41,
        students: 752,
        videLength: 2.5,
        teacher: "王希律",
      },
      {
        id: 6,
        img: "https://picsum.photos/500/300",
        url: "https://picsum.photos/500/300",
        title: "新手必學的3件事 - 進場點、停損點、停利點",
        special: 3200,
        text: " 一堂能讓各種交易風格都能更強大的衝刺課程！夠短，夠直接，能兼容在不同投資思維之中，能兼容在不同投資思維之中",
        star: 4,
        ratecount: 41,
        students: 752,
        videLength: 2.5,
        teacher: "王希律",
      },
    ],
    seach: [
      {
        id: 1,
        title: "量價交易精髓：打造股票、期貨完美交易策略",
        time: "2023-01-02 15:15:30",
      },
    ],
  };

  const settings2 = {
    className: "center",
    centerMode: true,
    infinite: true,
    dot: false,
    speed: 500,
    centerPadding: "20px",
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1736,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 1,
          centerMode: true,
          infinite: true,
          centerPadding: "90px",
          dots: false,
        },
      },
      {
        breakpoint: 1645,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          centerMode: true,
          infinite: true,
          centerPadding: "40px",
          dots: false,
        },
      },
      {
        breakpoint: 1470,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerMode: true,
          infinite: true,
          centerPadding: "80px",
          dots: false,
        },
      },
      {
        breakpoint: 1272,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerMode: false,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: false,
          infinite: true,
          dots: false,
        },
      },
    ],
  };

  return (
    <div className="divNEW">
      <ul className="ulNewContainer">
        <Slider {...settings2}>
          {State.NewCourse.map((v) => {
            return (
              <a href="/">
                <li className="dCard" key={v.id}>
                  <img className="imgCard" src={v.img} />
                  <div className="shopCart">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.2 19.2C5.88 19.2 4.812 20.28 4.812 21.6C4.812 22.92 5.88 24 7.2 24C8.52 24 9.6 22.92 9.6 21.6C9.6 20.28 8.52 19.2 7.2 19.2ZM0 0V2.4H2.4L6.72 11.508L5.1 14.448C4.908 14.784 4.8 15.18 4.8 15.6C4.8 16.92 5.88 18 7.2 18H21.6V15.6H7.704C7.536 15.6 7.404 15.468 7.404 15.3L7.44 15.156L8.52 13.2H17.46C18.36 13.2 19.152 12.708 19.56 11.964L23.856 4.176C23.952 4.008 24 3.804 24 3.6C24 2.94 23.46 2.4 22.8 2.4H5.052L3.924 0H0ZM19.2 19.2C17.88 19.2 16.812 20.28 16.812 21.6C16.812 22.92 17.88 24 19.2 24C20.52 24 21.6 22.92 21.6 21.6C21.6 20.28 20.52 19.2 19.2 19.2Z"
                        fill="#e23965"
                      />
                    </svg>
                  </div>
                  <div className="dCardMark">
                    <svg
                      width="20"
                      height="26"
                      viewBox="0 0 20 26"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.1429 0H2.85714C1.28571 0 0.014286 1.3 0.014286 2.88889L0 26L10 21.6667L20 26V2.88889C20 1.3 18.7143 0 17.1429 0ZM17.1429 21.6667L10 18.5178L2.85714 21.6667V2.88889H17.1429V21.6667Z"
                        fill="#E23965"
                      />
                    </svg>
                  </div>

                  <div className="dCardtext">
                    <div className="dCardScore">
                      <span className="dCardStar">{v.star}</span>
                      <span>
                        <StarScore star={v.star} />
                      </span>
                      <span>({v.ratecount})</span>
                    </div>
                    <div className="dCardTitle">{v.title}</div>
                    <div className="dCardTeacher">{v.teacher}</div>
                    <div className="dCardPersonCount">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 8C10.2091 8 12 6.20914 12 4C12 1.79086 10.2091 0 8 0C5.79086 0 4 1.79086 4 4C4 6.20914 5.79086 8 8 8Z"
                          fill="#9d9faa"
                        />
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8 9C5.33 9 0 10.34 0 13V16H16V13C16 10.34 10.67 9 8 9Z"
                          fill="#9d9faa"
                        />
                      </svg>
                      {v.students}人
                    </div>
                    <div className="dCardClock">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M7.992 0C3.576 0 0 3.584 0 8C0 12.416 3.576 16 7.992 16C12.416 16 16 12.416 16 8C16 3.584 12.416 0 7.992 0ZM8 14.4C4.464 14.4 1.6 11.536 1.6 8C1.6 4.464 4.464 1.6 8 1.6C11.536 1.6 14.4 4.464 14.4 8C14.4 11.536 11.536 14.4 8 14.4Z"
                          fill="#9d9faa"
                        />
                        <path
                          d="M8.53334 4.2666H7.46667V8.46332L11.2 10.6666L11.7333 9.80627L8.53334 7.93873V4.2666Z"
                          fill="#9d9faa"
                        />
                      </svg>
                      {v.videLength}
                    </div>
                    <div className="dCardPrice">NT$ {v.special}</div>
                  </div>
                </li>
              </a>
            );
          })}
        </Slider>
      </ul>
    </div>
  );
};

export default RecentClass;


