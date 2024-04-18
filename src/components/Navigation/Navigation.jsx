import clsx from 'clsx';
import styles from './Navigation.module.css';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoggedInSelector } from '../../redux/auth/selectors';

function summaryClass(LinkState) {
  const { isActive } = LinkState;
  return clsx(styles.navLink, {
    [styles.activeLink]: isActive,
  });
}
const Navigation = () => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  return (
    <nav className={styles}>
      <NavLink className={summaryClass} to="/">
        Home
      </NavLink>
      {isLoggedIn && (
        <NavLink className={summaryClass} to="contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};

export default Navigation;
