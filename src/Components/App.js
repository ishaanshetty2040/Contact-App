import React, { useState, useEffect } from "react";
/* import { uuid } from "uuidv4"; */
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || []
  );

  const addContactHandler = (contact) => {
    console.log(contact);
    setContacts([...contacts, contact]);
  };

  /*  useEffect(() => {
    const retriveContacts = window.localStorage.getItem(LOCAL_STORAGE_KEY);
    if (retriveContacts !== null) setContacts(JSON.parse(retriveContacts));
  }, []); */

  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} /> {/* Giving property name */}
    </div>
  );
}

export default App;
