import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";
import { Form } from "semantic-ui-react";

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
    <Form onSubmit={handleSubmit}>
      <Form.Field>
        <label>Title:</label>
        <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}></input>
      </Form.Field>
      <Form.Field>
        <label>Date:</label>
        <input type="date" value={date} onChange={(event) => setDate(event.target.value)} min={getTodayString()}></input>
      </Form.Field>
      <Form.Field>
        <label>Time:</label>
        <input type="time" value={time} onChange={(event) => setTime(event.target.value)}></input>
      </Form.Field>
      <Form.Field>
        <label>Contact:</label>
        <ContactPicker contacts={contacts} onChange={(event) => setContact(event.target.value)} contact={contact}/> 
      </Form.Field>
      <Form.Field>
        <input type='submit'/>
      </Form.Field>
    </Form>
  );
};
