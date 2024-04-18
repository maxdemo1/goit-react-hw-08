import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import CloseIcon from '@mui/icons-material/Close';
import EditIcon from '@mui/icons-material/Edit';
import styles from './Contact.module.css';
import { useState } from 'react';
import EditContact from '../EditContactForm/EditContact';
import DeleteModal from '../DeleteModal/DeleteModal';

const Contact = ({ contactData }) => {
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const changeModalIsOpen = () => {
    setDeleteModalIsOpen(prevState => !prevState);
  };

  const [editContactFormState, setEditContactFormState] = useState(false);

  const ShowCloseEditForm = () => {
    setEditContactFormState(prevState => !prevState);
  };
  return (
    <>
      <li className={styles.userItem}>
        <div>
          <div className={styles.nameContainer}>
            <PersonIcon />
            {!editContactFormState && <p>{contactData.name}</p>}
          </div>
          <div className={styles.phoneContainer}>
            <PhoneIcon />
            {!editContactFormState && <p>{contactData.number}</p>}
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
          <button
            type="button"
            onClick={() => {
              ShowCloseEditForm();
            }}
          >
            <EditIcon className={styles.btnIcons} />
          </button>
        </div>

        {editContactFormState && (
          <EditContact
            prevUserData={contactData}
            closeForm={ShowCloseEditForm}
          />
        )}
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
