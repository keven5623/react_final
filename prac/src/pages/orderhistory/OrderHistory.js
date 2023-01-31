import React, { Fragment } from "react";
import { Link } from "react-router-dom";

import Top from "../../components/top/Top";
import history from "../../assets/imgs/history.svg";

const Cartpage = () => {
  let title = [
    {
      key: 1,
      title: "訂單紀錄",
      iconPath: history,
      compos: history,
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
            <t.compos />
          </div>
        );
      })}
      <Top />
    </Fragment>
  );
};
export default Cartpage;
