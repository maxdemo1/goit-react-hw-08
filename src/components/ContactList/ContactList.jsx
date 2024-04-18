import { useSelector } from 'react-redux';
import Toasts from '../Toasts/Toasts';
import Contact from '../Contact/Contact';
import styles from './ContactList.module.css';
import { selectFilteredContacts } from '../../redux/filters/selectors';

const ContactList = () => {
  const visibleContacts = useSelector(selectFilteredContacts);

  return (
    <ul className={styles.contactsList}>
      <Toasts />
      {visibleContacts.map(contact => {
        return <Contact contactData={contact} key={contact.id} />;
      })}
    </ul>
  );
};

export default ContactList;
