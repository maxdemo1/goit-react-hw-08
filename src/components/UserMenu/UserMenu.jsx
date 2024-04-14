import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/auth/operations';
import { removeAllContacts } from '../../redux/contacts/slice';
import { userNameSelector } from '../../redux/auth/selectors';
const UserMenu = () => {
  const userName = useSelector(userNameSelector);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Welcome {userName}</p>
      <button
        type="button"
        onClick={() => {
          dispatch(removeAllContacts([]));
          dispatch(logout());
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
