import { NavLink } from 'react-router-dom';

const AuthNav = () => {
  return (
    <div>
      <NavLink to="authorization">Authorization</NavLink>
      <NavLink to="registration">Registration</NavLink>
    </div>
  );
};

export default AuthNav;
