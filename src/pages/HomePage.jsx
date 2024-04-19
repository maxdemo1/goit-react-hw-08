import { useSelector } from 'react-redux';
import { isLoggedInSelector } from '../redux/auth/selectors';

const HomePage = () => {
  const isLoggedIn = useSelector(isLoggedInSelector);
  return (
    <div>
      <h3 style={{ marginTop: ' 80px', textAlign: 'center' }}>
        Welcome to our contact book.
      </h3>

      {!isLoggedIn && (
        <h4 style={{ marginTop: 20, textAlign: 'center' }}>
          Please register or log in😉
        </h4>
      )}
    </div>
  );
};

export default HomePage;
