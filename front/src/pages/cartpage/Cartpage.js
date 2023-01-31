import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Top from "../../components/top/Top";
import OrderMod from "../../components/CartPage/OrderMod";
import Marks from "../../components/CartPage/Mark";
import cart from "../../components/CartPage/img/cart.svg";
import collectCourse from "../../components/CartPage/img/collectCourse.svg";
const Cartpage = () => {
  let title = [
    {
      key: 1,
      title: "購物車",
      iconPath: cart,
      compos: OrderMod,
    },
    {
      key: 2,
      title: "我收藏的課程",
      iconPath: collectCourse,
      compos: Marks,
    },
  ];

  return (
    <Fragment>
      <div className="headerss"></div>

      {title.map((t) => {
        return (
          <div className="dCartContainer" key={t.key}>
            <div className="dcartPageTitle">
              <span className="dCartTitle">
                {t.title}
                <img src={t.iconPath} />
              </span>
            </div>
            <div className="cartcompos">
              <t.compos />
            </div>
          </div>
        );
      })}
      <Top />

      {/* <div className="header"></div>
      <div className="dCartContainer">
        <div className="dcartPageTitle">
          <span className="dCartTitle">
            購物車
            <svg
              width="26"
              height="26"
              viewBox="0 -2 25 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.2 19.2C5.88 19.2 4.812 20.28 4.812 21.6C4.812 22.92 5.88 24 7.2 24C8.52 24 9.6 22.92 9.6 21.6C9.6 20.28 8.52 19.2 7.2 19.2ZM0 0V2.4H2.4L6.72 11.508L5.1 14.448C4.908 14.784 4.8 15.18 4.8 15.6C4.8 16.92 5.88 18 7.2 18H21.6V15.6H7.704C7.536 15.6 7.404 15.468 7.404 15.3L7.44 15.156L8.52 13.2H17.46C18.36 13.2 19.152 12.708 19.56 11.964L23.856 4.176C23.952 4.008 24 3.804 24 3.6C24 2.94 23.46 2.4 22.8 2.4H5.052L3.924 0H0ZM19.2 19.2C17.88 19.2 16.812 20.28 16.812 21.6C16.812 22.92 17.88 24 19.2 24C20.52 24 21.6 22.92 21.6 21.6C21.6 20.28 20.52 19.2 19.2 19.2Z"
                fill="#4967FF"
              />
            </svg>
          </span>
        </div>
        <OrderDetail />
        <div className="dcartPageTitle">
          <div className="dcartPageTitle">
            <span className="dCartTitle">
              我收藏的課程
              <svg
                width="16"
                height="26"
                viewBox="0 -3 20 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.85714 0H17.1429C18.7143 0 20 1.3 20 2.88889V26L10 21.6667L0 26L0.014286 2.88889C0.014286 1.3 1.28571 0 2.85714 0Z"
                  fill="#E23965"
                />
                <path
                  d="M17.1429 0H2.85714C1.28571 0 0.014286 1.3 0.014286 2.88889L0 26L10 21.6667L20 26V2.88889C20 1.3 18.7143 0 17.1429 0ZM17.1429 21.6667L10 18.5178L2.85714 21.6667V2.88889H17.1429V21.6667Z"
                  fill="#E23965"
                />
              </svg>
            </span>
          </div>
        </div>
        <Mark />
      </div> */}
    </Fragment>
  );
};
export default Cartpage;
