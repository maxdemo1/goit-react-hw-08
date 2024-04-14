import ReactModal from 'react-modal';
import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contacts/operations';
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
      >
        <h3>Delete this contact?</h3>
        <button
          type="button"
          onClick={() => {
            dispatch(deleteContact(id));
          }}
        >
          ✅Yes
        </button>
        <button
          type="button"
          onClick={() => {
            modalClose();
          }}
        >
          ❌No
        </button>
      </ReactModal>
    </div>
  );
};

export default DeleteModal;
