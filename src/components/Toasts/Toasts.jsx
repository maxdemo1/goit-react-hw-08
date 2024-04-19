import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import {
  hotToastAddSelector,
  hotToastDeleteSelector,
  hotToastEditSelector,
} from '../../redux/contacts/selectors';
import { useEffect } from 'react';
import {
  isLoggedInSelector,
  userNameSelector,
} from '../../redux/auth/selectors';

const Toasts = () => {
  const addToast = useSelector(hotToastAddSelector);
  const deleteToast = useSelector(hotToastDeleteSelector);
  const editToast = useSelector(hotToastEditSelector);
  const loggedIn = useSelector(isLoggedInSelector);
  const userName = useSelector(userNameSelector);

  useEffect(() => {
    if (loggedIn) {
      toast.success(`Welcome ${userName}`, {
        position: 'top-center',
        reverseOrder: false,
        duration: 1200,
        id: 'addToast',
      });

      return;
    }
  }, [loggedIn, userName]);

  useEffect(() => {
    if (addToast) {
      toast.success('Contact added', {
        position: 'top-center',
        reverseOrder: false,
        duration: 1200,
        id: 'addToast',
      });

      return;
    }
  }, [addToast]);
  useEffect(() => {
    if (deleteToast) {
      toast.error('Contact deleted', {
        position: 'top-center',
        reverseOrder: false,
        duration: 1200,
        id: 'deleteToast',
      });
      console.log('here');
      return;
    }
  }, [deleteToast]);

  useEffect(() => {
    if (editToast) {
      toast.success('Contact edited', {
        position: 'top-center',
        reverseOrder: false,
        duration: 1200,
        id: 'editToast',
      });

      return;
    }
  }, [editToast]);

  return (
    <Toaster
      toastOptions={{
        style: {
          backgroundColor: '#3a3d40',
          fontSize: 14,
          color: '#fff',
        },
      }}
    />
  );
};

export default Toasts;
