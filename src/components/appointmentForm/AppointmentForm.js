import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form>
      <label>Title:</label>
      <input type="text" onChange={(event) => setTitle(event.target.value)}></input>
      <label>Date:</label>
      <input type="date" onChange={(event) => setDate(event.target.value)}></input>
      <label>Time:</label>
      <input type="time" onChange={(event) => setTime(event.target.value)}></input>
      <label>Contact:</label>
      <ContactPicker contacts={contacts} onChange={(event) => setContact(event.target.value)}/>
    </form>
  );
};
