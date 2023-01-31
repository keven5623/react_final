import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const AddOrder = () => {
  const [now, setNow] = useState("");
  const getTime = () => {
    const now = new Date();
    let nowHr = now.getHours().toString().padStart(2, "0");
    let nowMinute = now.getMinutes().toString().padStart(2, "0");
    let nowSec = now.getSeconds().toString().padStart(2, "0");
    let nowMonth = (now.getMonth() + 1).toString().padStart(2, "0");
    let nowDate = now.getDate().toString().padStart(2, "0");

    let finalNow =
      now.getFullYear() +
      "-" +
      nowMonth +
      "-" +
      nowDate +
      " " +
      nowHr +
      ":" +
      nowMinute +
      ":" +
      nowSec;
    setNow(finalNow);
  };

  useEffect(() => {
    getTime();
    const setIntervalNow = setInterval(() => {
      getTime();
    }, 1000);
  }, []);

  return (
    <div className="addOrder">
      <div className="titleBox">
        <h3>委託下單</h3>
        <p className="now">現在時間：{now}</p>
      </div>

      <form action="GET">
        <label htmlFor="stockKey">
          <p className="pr12">股票代碼</p>
          <input
            type="text"
            required="required"
            name="stockKey"
            id="stockKey"
            autoComplete="off"
          />
        </label>
        <label htmlFor="stockName">
          <p className="pr12">股票名稱</p>
          <input
            type="text"
            required="required"
            name="stockName"
            id="stockName"
            autoComplete="off"
          />
        </label>
        <p>單價</p>
        <label htmlFor="limitPrice">
          <input
            type="radio"
            required="required"
            name="priceType"
            value="limitPrice"
            className="radioButton"
          />
          <p className="pr7">限價</p>
          <input
            type="number"
            name="priceType"
            id="limitPrice"
            autoComplete="off"
          />
        </label>
        <label htmlFor="MarketPrice">
          <input
            type="radio"
            required="required"
            name="priceType"
            id="MarketPrice"
            value="MarketPrice"
            className="radioButton"
          />
          <p className="pr7">市價</p>
        </label>
        <label htmlFor="limitUpPrice">
          <input
            type="radio"
            required="required"
            name="priceType"
            id="limitUpPrice"
            value="limitUpPrice"
            className="radioButton"
          />
          <p className="pr7">漲停</p>
        </label>
        <label htmlFor="limitDownPrice">
          <input
            type="radio"
            required="required"
            name="priceType"
            id="limitDownPrice"
            value="limitDownPrice"
            className="radioButton"
          />
          <p className="pr7">跌停</p>
        </label>
        <label htmlFor="closingPrice">
          <input
            type="radio"
            required="required"
            name="priceType"
            id="closingPrice"
            value="closingPrice"
            className="radioButton"
          />
          <p className="pr6">平盤</p>
        </label>
        <label dataT="股" htmlFor="orderValue" className="orderValueLabel">
          <p className="pr12">交易單位</p>

          <input
            type="number"
            required="required"
            name="orderValue"
            id="orderValue"
            autoComplete="off"
          />
        </label>
        <div className="agreeArea">
          <label htmlFor="agree">
            <input
              type="checkbox"
              required="required"
              id="agree"
              name="agreeYes"
            />
            <h6>
              我已同意
              <span>
                <Link to="/">交易申請注意事項</Link>
              </span>
            </h6>
          </label>
        </div>
        <input type="submit" value="賣出" id="sale" />
        <input type="submit" value="買進" id="buy" />
      </form>
    </div>
  );
};

export default AddOrder;
