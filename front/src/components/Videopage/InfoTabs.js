import React from "react";
// import { useState } from "react";

const InfoTabs = () => {

  // const [toggleState, setToggleState] = useState(1);

  // const toggleTab = (index) => {
  //   setToggleState(index);
  // };
  return (
    <div className="infoBtn">
      <div>
        <button type="button"><span>課程介紹</span></button>
      </div>
      <div>
        <button type="button"><span>課程公告</span></button>
      </div>
      <div>
        <button type="button"><span>問與答</span></button>
      </div>
      <div>
        <button type="button"><span>評論</span></button>
      </div>
    </div>
  )
}

export default InfoTabs;