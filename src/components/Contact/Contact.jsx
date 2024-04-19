import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import CloseIcon from '@mui/icons-material/Close';

import styles from './Contact.module.css';
import { useState } from 'react';
import DeleteModal from '../DeleteModal/DeleteModal';
import EditContact from '../EditContact/EditContact';

const Contact = ({ contactData }) => {
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const changeModalIsOpen = () => {
    setDeleteModalIsOpen(prevState => !prevState);
  };

  return (
    <>
      <li className={styles.userItem}>
        <div>
          <div className={styles.nameContainer}>
            <PersonIcon />
            {contactData.name}
          </div>
          <div className={styles.phoneContainer}>
            <PhoneIcon />
            {contactData.number}
          </div>
        </div>
        <div className={styles.buttonsContainer}>
          <button
            type="button"
            className={styles.deleteButton}
            onClick={() => {
              changeModalIsOpen();
            }}
          >
            <CloseIcon className={styles.btnIcons} />
          </button>
          <EditContact userData={contactData} />
        </div>
      </li>
      {deleteModalIsOpen && (
        <DeleteModal
          openState={deleteModalIsOpen}
          id={contactData.id}
          modalClose={changeModalIsOpen}
        />
      )}
    </>
  );
};

export default Contact;
