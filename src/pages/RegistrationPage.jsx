import { Helmet } from 'react-helmet-async';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';

const RegistrationPage = () => {
  return (
    <>
      <Helmet>
        <title>Sign up</title>
      </Helmet>
      <RegistrationForm />
    </>
  );
};

export default RegistrationPage;
