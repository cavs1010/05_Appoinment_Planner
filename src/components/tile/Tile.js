import React from "react";

export const Tile = ({object}) => {
  return (
    <div className="tile-container">
     {Object.entries(object).map((element, index)=>{
       return <p key={index} className={index===0?"tile-title":"tile"}>
                  {element[1]}
              </p>
       })}
    </div>
  );
};
