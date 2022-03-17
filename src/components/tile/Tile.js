import React from "react";

export const Tile = ({contact}) => {
  return (
    <div className="tile-container">
     {Object.entries(contact).map((element, index)=>{
       return <p key={index} className={index===0?"tile-title":"tile"}>
                  {element[1]}
              </p>
       })}
    </div>
  );
};
