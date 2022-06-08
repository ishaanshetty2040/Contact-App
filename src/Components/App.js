import React, { useState } from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    console.log(contact);
  };
  return (
    <div>
      <Header />
      <AddContact addContactHandler={addContactHandler} />
      <ContactList contacts={contacts} /> {/* Giving property name */}
    </div>
  );
}

export default App;
