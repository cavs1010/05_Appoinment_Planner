import React, {useState, useEffect} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";

export const ContactsPage = ({contacts, addNewContact}) => {
 
  const [name, setName] = useState('Nombre');
  const[phone, setPhone] = useState('telefono');
  const[email, setEmail] = useState('correo');

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewContact(name, phone, email);
    setName('');
    setPhone('');
    setEmail('');
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
  };


  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
 useEffect(()=>{
   console.log('El nombre se cambio')
 },[name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2> 
        <ContactForm
          name={name} setName={setName}
          phone={phone} setPhone={setPhone}
          email={email} setEmail={setEmail}
          handleSubmit={handleSubmit}/>
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
      </section>
    </div>
  );
};
