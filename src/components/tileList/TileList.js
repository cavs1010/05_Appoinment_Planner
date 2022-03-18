import React from "react";
import { Tile } from "../tile/Tile"

export const TileList = ({objectsToDisplay}) => {
  return (
    <div>
      {objectsToDisplay.map((object, index)=>{
        return (<Tile key={index} object={object} />);}
      )}
    </div>
  );
};
