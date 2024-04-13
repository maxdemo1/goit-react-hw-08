import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { isLoggedInSelector } from '../../redux/auth/selectors';

const RestrictedRoute = ({ children, redirectTo = '/contacts' }) => {
  const isLoggedIn = useSelector(isLoggedInSelector);

  return isLoggedIn ? <Navigate to={redirectTo} replace /> : children;
};

export default RestrictedRoute;
