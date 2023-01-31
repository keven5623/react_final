import React from "react";

const InfoHead = () => {
  return (
    <div>
      <div className="infoHead">
        <div className="infoHeadTitle">
          <span>20堂課教你存好股，打造投資現金流</span>
        </div>
        <div className="infoHeadPrice"><span>NT$ 1,600</span></div>
        <div className="infoHeadShopCart">
          <button type="button"><span>加入購物車</span></button>
        </div>
        <div className="infoHeadBuyNow">
          <button type="button"><span>立即購買</span></button>
        </div>
      </div>
      <div className="containerLine"></div>
    </div>
  )
}

export default InfoHead;