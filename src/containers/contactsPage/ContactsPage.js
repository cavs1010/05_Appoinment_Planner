import React, {useState, useEffect} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from '../../components/tileList/TileList';

export const ContactsPage = ({contacts, addNewContact}) => {
  //States
  const [name, setName] = useState('');
  const[phone, setPhone] = useState('');
  const[email, setEmail] = useState('');
  const[isDuplicated, setIsDuplicated] = useState(false);
  
 //Hooks
 useEffect(()=>{
  let namesList = contacts.map(value => value['name'])
  for (let i = 0; i <= namesList.length-1; i++){
    if (namesList[i]===name){
      setIsDuplicated(true);
    }
  }
 },[name]);

   //Submission
   const handleSubmit = (e) => {
    e.preventDefault();
    if (isDuplicated === false){
      addNewContact(name, phone, email);
      setName('');
      setPhone('');
      setEmail('');
    }
  };

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
        <TileList contacts={contacts}/>
      </section>
    </div>
  );
};
