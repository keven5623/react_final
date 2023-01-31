import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import toplay from "./img/toplay.svg";
const Coupon = () => {
  let State = {
    coupon: [
      {
        discount: "限時一週66折",
        course: "SAM老師的全方位股票分析法",
        deadLine: {
          year: 2023,
          month: 1,
          Date: 5,
          hour: 14,
          min: 44,
          sec: 0,
        },
        startTime: {
          year: 2023,
          month: 1,
          Date: 1,
          hour: 2,
          min: 0,
          sec: 0,
        },
      },
    ],
  };

  function countDown() {
    let timeDiff = null;
    let timeLeft = {};
    const deadTime = new Date(
      State.coupon[0].deadLine.year,
      State.coupon[0].deadLine.month - 1,
      State.coupon[0].deadLine.Date,
      State.coupon[0].deadLine.hour - 8,
      State.coupon[0].deadLine.min,
      State.coupon[0].deadLine.sec
    );

    const deadTimeUTC = Date.UTC(
      deadTime.getFullYear(),
      deadTime.getMonth(),
      deadTime.getDate(),
      deadTime.getHours(),
      deadTime.getMinutes(),
      deadTime.getSeconds(),
      deadTime.getMilliseconds()
    );

    const nowtimeUTC = Date.now();
    timeDiff = deadTimeUTC - nowtimeUTC;
    if (timeDiff > 0) {
      timeLeft = {
        days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((timeDiff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((timeDiff / (1000 * 60)) % 60),
        seconds: Math.floor((timeDiff / 1000) % 60),
      };
    }
    return timeLeft;
  }

  const [timeLeft, setTimeLeft] = useState(countDown());

  useEffect(() => {
    let start = setInterval(() => {
      setTimeLeft(countDown());
    }, 1000);
    return function () {
      clearInterval(start);
    };
  }, [timeLeft]);
  
  if (timeLeft.seconds >= 0) {
    return (
      <div className="divSale">
        【{State.coupon[0].discount}】{State.coupon[0].course}
        <span>{timeLeft.days}</span>天<span>{timeLeft.hours}</span>時
        <span>{timeLeft.minutes}</span>分<span>{timeLeft.seconds}</span>秒
        <Link to="/">
          <button>
            立即查看
            <svg
              width="24"
              height="26"
              viewBox="3 3 11 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.5964 8.69663L5.23279 12.3885C4.6925 12.7019 4 12.3228 4 11.6922L4 4.30846C4 3.67783 4.6925 3.29871 5.23279 3.61216L11.5964 7.30403C12.1345 7.6162 12.1345 8.38445 11.5964 8.69663Z"
                fill="white"
              />
            </svg>{" "}
          </button>
        </Link>
      </div>
    );
  }
};

export default Coupon;
