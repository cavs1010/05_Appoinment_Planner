import React, {useState} from "react";

export const ContactsPage = (props) => {
 
  const [name, setName] = useState('CAAAA');
  const[phone, setPhone] = useState('asaas');
  const[email, setEmail] = useState('sasa');

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
