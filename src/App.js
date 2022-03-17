import React, {useState} from "react";
import { Switch, Route, Redirect, NavLink } from "react-router-dom";

import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  
  const [contacts, setContacts] = useState([{'name':'Camilo', 'phone':'phone', 'email':'email'},
                                            {'name':'Andres', 'phone':'fono', 'email':'Correo'}]);
  const [appoinments, setAppoinments] = useState([{'title':'Nombre', 'contact':'Contacto', 'date':'Fecha', 'time':'hora'}]);

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
            <AppointmentsPage appoinments={appoinments} addNewApp={addNewApp} contacts={contacts}/>
          </Route>
        </Switch>
      </main>
    </>
  );
}

export default App;
