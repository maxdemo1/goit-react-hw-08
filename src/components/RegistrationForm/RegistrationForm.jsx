import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import styles from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const dataValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Incorrect data entered')
    .required('Requied field')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Please input correct email - example@gmail.com'
    )
    .max(120, 'Too long for the email'),

  password: Yup.string(),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = data => {
    dispatch(register(data));
  };
  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
        name: '',
      }}
      onSubmit={handleSubmit}
      validationSchema={dataValidationSchema}
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
        <label>
          <Field type="text" name="name"></Field>
        </label>
        <ErrorMessage
          name="name"
          render={msg => <span className={styles.formError}>{msg}</span>}
        />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
