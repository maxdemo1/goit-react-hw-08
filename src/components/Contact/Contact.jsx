import { FaUser } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa6';
import Toasts from '../Toasts/Toasts';

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
      <Toasts />
      <li className={styles.userItem}>
        <div>
          <div className={styles.nameContainer}>
            <FaUser />
            {!editContactFormState && <p>{contactData.name}</p>}
          </div>
          <div className={styles.phoneContainer}>
            <FaPhone />
            {!editContactFormState && <p>{contactData.number}</p>}
          </div>
        </div>

        <button
          type="button"
          className={styles.deleteButton}
          onClick={() => {
            changeModalIsOpen();
          }}
        >
          Delete
        </button>
        <button
          type="button"
          onClick={() => {
            ShowCloseEditForm();
          }}
        >
          Edit
        </button>
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
