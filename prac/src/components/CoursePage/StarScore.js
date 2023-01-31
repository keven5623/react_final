import React, { useState, useEffect, Fragment } from "react";
import { Link } from "react-router-dom";
const StarScore = (props) => {
  
 
 
  let starBox = [];
   for (let i = 0; i < props.star; i++) {
     starBox.push("sOnStar");
   }

   if (starBox.length <= 5) {
     for (let i = 0; i <= 5 - props.star - 1; i++) {
       starBox.push("");
     }

     
   return (
     <Fragment>
       {starBox.map((v, i) => {
         return (
           <span key={i}>
             <svg
               className={starBox[i]}
               width="18"
               height="18"
               viewBox="0 0 18 16"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
             >
               <path
                 d="M8.99996 0L10.9832 6.10368H17.401L12.2089 9.87597L14.1921 15.9796L8.99996 12.2074L3.80786 15.9796L5.79106 9.87597L0.59896 6.10368H7.01675L8.99996 0Z"
                 fill="#9d9faa"
               />
             </svg>
           </span>
         );
       })}
     </Fragment>
   );
 };
}

export default StarScore;
