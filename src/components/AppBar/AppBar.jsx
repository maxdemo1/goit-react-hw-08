import { useSelector } from 'react-redux';

import { isLoggedInSelector } from '../../redux/auth/selectors';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';

const AppBar = () => {
  const isLoggedIn = useSelector(isLoggedInSelector);

  return (
    <>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </>
  );
};

export default AppBar;
