import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";

const OrderHistory = () => {
  return (
    <ul className="dCartList">
      <li>
        <img src="https://picsum.photos/250/150" alt="" />
        <div className="dCartitem">
          <Link to="/">
            <div className="dCartTiltle">20堂課教你存好股，打造投資現金流</div>
          </Link>
          <div className="dCartTeacher">Mr. 某男的</div>
        </div>
        <div className="dOldPrice">NT$ 1,600</div>
        <div className="dSpecailPrice">NT$ 1,200</div>
        <div className="dHr"></div>
      </li>
    </ul>
  );
};

export default OrderHistory;
