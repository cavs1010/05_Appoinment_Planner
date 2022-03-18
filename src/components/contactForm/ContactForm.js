import React from "react";
import { Form, Message } from "semantic-ui-react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
  isDuplicated
}) => {

  return (
    <Form onSubmit={handleSubmit} error={isDuplicated}>
      <Form.Field>
        <label>Name:</label>
        <input type="text" value={name} onChange={(event) => setName(event.target.value)}/>
      </Form.Field>
      <Form.Field>
        <label>Phone:</label>
        <input type="text" value={phone} onChange={(event) => setPhone(event.target.value)} pattern="[0-9]+"/>
      </Form.Field>
      <Form.Field>
        <label>Email:</label>
        <input type="text" value={email} onChange={(event) => setEmail(event.target.value)}/>
      </Form.Field>
      <Form.Field>
        <input type='submit'/>
        <Message error header='Opps!' content='This contact already exists'/>
      </Form.Field>
      
    </Form>
  );
};
