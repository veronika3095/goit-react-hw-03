/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(contact => (
        <Contact key={contact.id} contact={contact} onDelete={onDeleteContact} />
      ))}
    </ul>
  );
};

export default ContactList;