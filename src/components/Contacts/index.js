import { useState, useEffect } from "react";
import Form from "./Form";
import List from "./List";
import "./styles.css";

function Contacts() {
  const [contacts, setContacts] = useState([
    {
      fullname: "rasul",
      phone_number: "123123",
    },
    {
      fullname: "sönmez",
      phone_number: "456465",
    },
    {
      fullname: "esma",
      phone_number: "798789",
    },
    {
      fullname: "asaf",
      phone_number: "132465798",
    },
  ]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts]);
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts} />
      <Form addContact={setContacts} contacts={contacts} />
    </div>
  );
}

export default Contacts;
