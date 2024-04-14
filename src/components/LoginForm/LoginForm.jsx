import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../redux/auth/operations';
import styles from './LoginForm.module.css';
import {
  isLoggedInSelector,
  userNameSelector,
} from '../../redux/auth/selectors';

const LoginForm = () => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(isLoggedInSelector);
  const userName = useSelector(userNameSelector);

  const handleSubmit = data => {
    dispatch(login(data));
  };

  return (
    <div>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>
            dasdasdasdas
            <Field type="text" name="email"></Field>
          </label>
          <ErrorMessage
            name="email"
            render={msg => <span className={styles.formError}>{msg}</span>}
          />
          <label>
            <Field type="text" name="password"></Field>
          </label>
          <ErrorMessage
            name="password"
            render={msg => <span className={styles.formError}>{msg}</span>}
          />
          <button type="submit">Submit</button>
        </Form>
      </Formik>

      {isLoggedIn && (
        <div>
          Is logged IN
          <h2>Welcome {userName}</h2>
        </div>
      )}
    </div>
  );
};

export default LoginForm;
