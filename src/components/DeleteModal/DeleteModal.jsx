import ReactModal from 'react-modal';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
import styles from './DeleteModal.module.css';

ReactModal.setAppElement('#root');

const DeleteModal = ({ openState, id, modalClose }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <ReactModal
        isOpen={openState}
        shouldCloseOnOverlayClick={true}
        onRequestClose={() => {
          modalClose();
        }}
        className={styles.modal}
        style={{
          overlay: {
            backgroundColor: 'rgb(36 33 33 / 70%)',
          },
        }}
      >
        <h4>Delete this contact?</h4>
        <div className={styles.buttonContainer}>
          <button
            className={styles.btn}
            type="button"
            onClick={() => {
              dispatch(deleteContact(id));
            }}
          >
            ✅Yes
          </button>
          <button
            className={styles.btn}
            type="button"
            onClick={() => {
              modalClose();
            }}
          >
            ❌No
          </button>
        </div>
      </ReactModal>
    </div>
  );
};

export default DeleteModal;
