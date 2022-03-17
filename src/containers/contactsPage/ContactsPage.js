import React, {useState, useEffect} from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";

export const ContactsPage = ({contacts, addNewContact}) => {
  //States
  const [name, setName] = useState('');
  const[phone, setPhone] = useState('');
  const[email, setEmail] = useState('');
  const[isDuplicated, setIsDuplicated] = useState(false);
  
  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
 //Hooks
 useEffect(()=>{
  let namesList = contacts.map(value => value['name'])
  for (let i = 0; i <= namesList.length-1; i++){
    if (namesList[i]===name){
      setIsDuplicated(true);
    }
  }
  //console.log(isDuplicated);
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
      </section>
    </div>
  );
};
