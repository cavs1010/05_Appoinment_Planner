import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  
  const [contacts, setContacts] = useState([]);
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

  // Function that checks everything is working
  const handleOnClick = ()=>{
    addNewContact('Camilo', 2535490, 'cavs1010@gmail.com');
  };
  /*
  Implement functions to add data to
  contacts and appointments
  */

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
             {/* Add props to ContactsPage */}
            <ContactsPage />
          </Route>
          <Route path={ROUTES.APPOINTMENTS}>
            {/* Add props to AppointmentsPage */}
            <AppointmentsPage />
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
