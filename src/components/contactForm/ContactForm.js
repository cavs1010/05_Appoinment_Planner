import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input type="text" onChange={(event) => setName(event.target.value)}/>
      <label>Phone:</label>
      <input type="text" onChange={(event) => setPhone(event.target.value)} pattern="[0-9]+"/>
      <label>Email:</label>
      <input type="text" onChange={(event) => setEmail(event.target.value)}/>
      <input type='submit'/>
    </form>
  );
};
