import AppBar from '../AppBar/AppBar';
import styles from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <AppBar />
      </header>
      <main>{children}</main>
    </>
  );
};

export default Layout;
