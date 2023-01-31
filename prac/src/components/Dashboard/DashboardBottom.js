import React from "react";
import AddOrder from "./AddOrder";
import NowOrder from "./NowOrder";
import NowTotal from "./NowTotal";
import OrderHistory from "./OrderHistory";


const DashBoardBottom = () => {
  return (
    <div className="dashboardBottom">
      <div className="dashboardBottomRow1">
        <AddOrder />
        <NowOrder />
      </div>
      <div className="dashboardBottomRow2">
        <NowTotal />
        <OrderHistory />
      </div>
    </div>
  );
};

export default DashBoardBottom;
