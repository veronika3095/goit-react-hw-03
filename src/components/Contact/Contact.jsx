/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react';
import styles from './Contact.module.css';

const Contact = ({ contact, onDelete }) => {
  const handleDelete = () => {
    onDelete(prevContacts => prevContacts.filter(c => c.id !== contact.id));
  };

  return (
    <li className={styles.item}>
      <div className={styles.info}>
        <div className={styles.name}>{contact.name}</div>
        <div className={styles.number}>{contact.number}</div>
      </div>
      <button className={styles.deleteButton} onClick={handleDelete}>
        Delete
      </button>
    </li>
  );
};

export default Contact;