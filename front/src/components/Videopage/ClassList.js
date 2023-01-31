import React from "react";

const ClassList = () => {
  return (
    <div className="classListContainer">
      <div className="classListHead" >
        <span>課程列表</span>
      </div>
      <div className="classListChapter">
        <div className="expandSvg">
          <svg
            width="19"
            height="19"
            viewBox="0 0 17 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.5 15L0.27276 0.749998L16.7272 0.75L8.5 15Z"
              fill="#9D9FAA"
            />
          </svg>
        </div>
        <div className="classListChapterTag"><span>第一章 主題概念</span></div>
      </div>
    </div>
  )
}

export default ClassList;