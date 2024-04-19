import { useEffect } from 'react';
import ContactForm from '../components/ContactForm/ContactForm';
import ContactList from '../components/ContactList/ContactList';
import SearchBox from '../components/SearchBox/SearchBox';
import { useDispatch } from 'react-redux';
import { fetchContacts } from '../redux/contacts/operations';
import DeleteModal from '../components/DeleteModal/DeleteModal';
import styles from './Pages.module.css';
import { Helmet } from 'react-helmet-async';

const ContactsPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={styles.contactsContainer}>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <DeleteModal />
      <ContactForm />
      <SearchBox />
      <ContactList />
    </div>
  );
};

export default ContactsPage;
