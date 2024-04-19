import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import EditIcon from '@mui/icons-material/Edit';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';

import styles from './EditContact.module.css';
import { useDispatch } from 'react-redux';
import { editContact } from '../../redux/contacts/operations';
import toast from 'react-hot-toast';

export default function EditContact({ userData }) {
  const [open, setOpen] = useState(false);

  const [editUserData, setEditUserData] = useState(userData);

  const dispatch = useDispatch();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button onClick={handleClickOpen} id={styles.editBtn}>
        <EditIcon />
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onChange: evt => {
            setEditUserData(prevState => {
              return { ...prevState, [evt.target.name]: evt.target.value };
            });
          },
          onSubmit: event => {
            event.preventDefault();
            if (
              editUserData.name.length < 2 ||
              editUserData.number.length < 7
            ) {
              toast.error('To short data entered', {
                position: 'top-center',
                reverseOrder: false,
                duration: 1500,
              });
              return;
            } else if (
              editUserData.name.length > 30 ||
              editUserData.number.length > 12
            ) {
              toast.error('To long data entered', {
                position: 'top-center',
                reverseOrder: false,
                duration: 1500,
              });
              return;
            }

            dispatch(editContact(editUserData));
            handleClose();
          },
        }}
      >
        <div className={styles.editForm}>
          <DialogTitle>Editing a contact</DialogTitle>
          <DialogContent id={styles.formContent}>
            <TextField
              className={styles.formInput}
              autoFocus
              required
              margin="dense"
              id="name"
              name="name"
              minLength="7"
              maxLength="12"
              label="Edit Name"
              value={editUserData.name}
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              autoFocus
              required
              margin="dense"
              id="number"
              name="number"
              label="Phone number"
              value={editUserData.number}
              type="text"
              fullWidth
              variant="standard"
              minLength="3"
              maxLength="12"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Subscribe</Button>
          </DialogActions>
        </div>
      </Dialog>
    </>
  );
}
