import toast, { Toaster } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import {
  hotToastAddSelector,
  hotToastDeleteSelector,
  hotToastEditSelector,
} from '../../redux/contacts/selectors';
import { useEffect } from 'react';

const Toasts = () => {
  const addToast = useSelector(hotToastAddSelector);
  const deleteToast = useSelector(hotToastDeleteSelector);
  const editToast = useSelector(hotToastEditSelector);

  useEffect(() => {
    if (addToast) {
      toast.success('Contact added', {
        position: 'top-right',
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
        position: 'top-right',
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
        position: 'top-right',
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
