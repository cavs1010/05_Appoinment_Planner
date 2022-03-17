import React from "react";

export const ContactPicker = ({contacts, onChange}) => {
  return (
    <select onChange={onChange}>
      <option value=''>--No contact selected--</option>
      {contacts.map((element, index)=>{
        return  <option key={index} value={element['name']}>
                  {element['name']}
                </option>
      })}
    </select>
  );
};
