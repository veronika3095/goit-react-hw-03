/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-escape */
/* eslint-disable react/prop-types */
import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import styles from './ContactForm.module.css';

const validationSchema = Yup.object({
  name: Yup.string()
    .min(3, 'Must be at least 3 characters')
    .max(50, 'Must be 50 characters or less')
    .required('Required'),
  number: Yup.string()
    .required('Required')
    .matches(
      /^[\d\(\)\-\s]+$/,
      'Phone number is not valid. Only numbers, spaces, dashes and parentheses are allowed.'
    ),
});

const ContactForm = ({ onAddContact, contacts }) => {
  const handleSubmit = (values, { resetForm }) => {
    const newContact = { ...values, id: nanoid() };
    if (!contacts.some(contact => contact.name === values.name)) {
      onAddContact(prevContacts => [...prevContacts, newContact]);
      resetForm();
    } else {
      alert('Contact already exists');
    }
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form className={styles.form}>
        <Field
          type="text"
          name="name"
          placeholder="Name"
          className={styles.input}
        />
        <ErrorMessage name="name" component="div" className={styles.error} />
        <Field
          type="text"
          name="number"
          placeholder="Phone number"
          className={styles.input}
        />
        <ErrorMessage name="number" component="div" className={styles.error} />
        <button type="submit" className={styles.submitButton}>Add Contact</button>
      </Form>
    </Formik>
  );
};

export default ContactForm;