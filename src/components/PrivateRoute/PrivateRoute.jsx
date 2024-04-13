import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { userTokenSelector } from '../../redux/auth/selectors';

const PrivateRoute = ({ children, redirectTo = '/' }) => {
  const userToken = useSelector(userTokenSelector);
  return userToken === null ? <Navigate to={redirectTo} replace /> : children;
};

export default PrivateRoute;
