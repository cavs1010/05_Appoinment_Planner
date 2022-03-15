import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  
  const [contacts, setContacts] = useState([{'name':'CAmilo', 'phone':'phone', 'email':'email'}]);
  const [appoinments, setAppoinments] = useState([]);

  const ROUTES = {
    CONTACTS: "/contacts",
    APPOINTMENTS: "/appointments",
  };

  const addNewContact = (name, phone, email)=>{
    let newContact = {'name':name, 'phone':phone, 'email':email};
    setContacts((prev) =>{
      return [...prev, newContact]
    });
  }

  const addNewApp = (title, contact, date, time) =>{
    let newApp = {'title':title, 'contact':contact, 'date':date, 'time':time};
    setAppoinments((prev) =>{
      return [...prev, newApp]
    });
  }

  // Function that checks everything is working
  const handleOnClick = ()=>{
    addNewContact('Camilo', 2535490, 'cavs1010@gmail.com');
    addNewApp('Mr',2343,'April 15','5:00 pm');
  };


  return (
    <>
      <nav>
        <NavLink to={ROUTES.CONTACTS} activeClassName="active">
          Contacts
        </NavLink>
        <NavLink to={ROUTES.APPOINTMENTS} activeClassName="active">
          Appointments
        </NavLink>
      </nav>
      <main>
        <Switch>
          <Route exact path="/">
            <Redirect to={ROUTES.CONTACTS} />
          </Route>
          <Route path={ROUTES.CONTACTS}>
            <ContactsPage contacts={contacts} addNewContact={addNewContact}/>
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            <AppointmentsPage appoinments={appoinments} addNewApp={addNewApp}/>
          </Route>
        </Switch>
        <button onClick={handleOnClick}>
          Proving
        </button>
      </main>
    </>
  );
}

export default App;
