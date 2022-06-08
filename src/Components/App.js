import React from "react";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";

function App() {
  const contacts = [
    {
      id: "1",
      name: "Ishaan",
      email: "ishaanshetty12@gmail.com",
    },
    {
      id: "2",
      name: "Vasanth",
      email: "vasanthshetty@hotmail.com.com",
    },
  ];
  return (
    <div>
      <Header />
      <AddContact />
      <ContactList contacts={contacts} /> {/* Giving property name */}
    </div>
  );
}

export default App;
