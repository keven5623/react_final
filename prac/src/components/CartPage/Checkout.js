import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";

const Checkout = () => {
  return (
    <div className="checkoutorder">
      <div className="dOrderTitle">訂單明細</div>
      <div>
        <span className="sSubtotaltitle">小計</span>
        <span className="sSubtotal">NT $2,400</span>
      </div>
      <div className="sDiscount">
        <input type="checkbox" />
        我要使用折扣碼<span className="sNoSpecial">無法使用</span>
      </div>
      <div className="icodeitems">
        <input className="iDiscountCode" type="text" />
        <input className="iCodeSubmit" type="submit" value="確定" />
      </div>
      <div className="dTotalPrice">NT$ 2,400</div>
      <input className="iorder" type="button" value="結帳" />
    </div>
  );
};

export default Checkout;
