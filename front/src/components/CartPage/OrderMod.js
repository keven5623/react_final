import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
import OrderDetail from "../CartPage/OrderDetail";
const OrderMod = () => {
  const State = {
    titles: [
      {
        id: 1,
        title: "縮圖",
      },
      {
        id: 2,
        title: "縮圖",
      },
      {
        id: 3,
        title: "標題/作者",
      },

      {
        id: 4,
        title: "原價",
      },

      {
        id: 5,
        title: "特價",
      },
      {
        id: 6,
        title: "刪除",
      },
    ],
  };

  return (
    <Fragment>
      <div className="dHr">
        <div className="tabletitle">
          {State.titles.map((v) => {
            return <div key={v.id}>{v.title}</div>;
          })}
        </div>
        <hr />
      </div>
      <ul className="dCartList">
       <OrderDetail />
      </ul>
    </Fragment>
  );
};

export default OrderMod;
