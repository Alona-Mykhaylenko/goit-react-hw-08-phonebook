import React from "react";

import ContactForm from "../../components/contactForm/ContactForm";
import ContactList from "../../components/contactList/ContactList";
import Filter from "../../components/filter/Filter";
import styles from "./contactsView.module.css";

const ContactsView = () => {
  return (
    <div className={styles.formBox}>
      <h1 className={styles.header}>Phonebook</h1>
      <ContactForm />

      <h2 className={styles.header}>Contacts</h2>
      <Filter />

      <ContactList />
    </div>
  );
};

export default ContactsView;
