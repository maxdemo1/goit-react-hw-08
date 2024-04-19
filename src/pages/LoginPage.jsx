import { Helmet } from 'react-helmet-async';
import LoginForm from '../components/LoginForm/LoginForm';

const LoginPage = () => {
  return (
    <>
      <Helmet>
        <title>Sign in</title>
      </Helmet>
      <LoginForm />
    </>
  );
};

export default LoginPage;
