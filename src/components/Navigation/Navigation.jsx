import clsx from 'clsx';
import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {
  isLoggedInSelector,
  userNameSelector,
} from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';

function summaryClass(LinkState) {
  const { isActive } = LinkState;
  return clsx(styles.navLink, {
    [styles.activeLink]: isActive,
  });
}
const Navigation = ({ children }) => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  const userName = useSelector(userNameSelector);
  const dispatch = useDispatch();

  return (
    <>
      <header className={styles.header}>
        <NavLink className={summaryClass} to="/">
          Home
        </NavLink>
        {isLoggedIn && (
          <NavLink className={summaryClass} to="contacts">
            Contacts
          </NavLink>
        )}
        {!isLoggedIn && (
          <div>
            <NavLink className={summaryClass} to="authorization">
              Authorization
            </NavLink>
            <NavLink className={summaryClass} to="registration">
              Registration
            </NavLink>
          </div>
        )}
        {isLoggedIn && (
          <div>
            <p>Welcome {userName}</p>
            <button type="button" onClick={() => dispatch(logout())}>
              Logout
            </button>
          </div>
        )}
      </header>
      <main>{children}</main>
    </>
  );
};

export default Navigation;
