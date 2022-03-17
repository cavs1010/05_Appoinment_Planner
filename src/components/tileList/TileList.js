import React from "react";
import { Tile } from "../tile/Tile"

export const TileList = ({contacts}) => {
  console.log(contacts);
  return (
    <div>
      {contacts.map((contact)=>{
        return (<Tile key={contact.name} phone={contact.phone} email={contact.email}></Tile>);}
      )}
    </div>
  );
};
