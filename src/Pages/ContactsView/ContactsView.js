import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import { Filter } from 'components/Filter/Filter';
import { ContactList } from 'components/ContactList/ContactList';
// import { UserMenu } from 'components/UserMenu/UserMenu';
import s from './ContactsView.module.css';

export function ContactsView() {
  return (
    <>
      {/* <UserMenu /> */}
      <ContactForm />
      <h2 className={s.contactTitle}>Contacts</h2>
      <Filter />
      <ContactList />
    </>
  );
}
