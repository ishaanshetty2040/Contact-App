import React from "react";
import ContactCard from "./ContactCard";

const ContactList = (props) => {
  console.log(props);

  const renderContactList = props.contacts.map((contact) => {
    return <ContactCard contact={contact}></ContactCard>;
  });
  return (
    <div className="ui celled list">
      {renderContactList} {/* This is a reference not a call to the function */}
    </div>
  );
};
export default ContactList;
