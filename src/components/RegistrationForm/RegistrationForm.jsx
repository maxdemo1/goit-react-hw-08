import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import styles from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const dataValidationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Incorrect data entered')
    .required('*Requied field')
    .matches(
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
      'Incorrect data entered'
    )
    .max(100, 'Too long for the email'),
  name: Yup.string()
    .required('*Required field')
    .max(40, 'To long')
    .min(2, 'To short'),
  password: Yup.string()
    .min(7, 'Please input at least seven symbols')
    .max(20, 'To long')
    .required('*Required field'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = data => {
    dispatch(register(data));
  };
  return (
    <div className={styles.formContainer}>
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
          <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>
              Email
              <Field
                className={styles.formInput}
                type="text"
                name="email"
                placeholder="examble@gmail.com"
              ></Field>
            </label>
            <div className={styles.erroField}>
              <ErrorMessage
                name="email"
                style={{ display: 'flex' }}
                render={msg => <span className={styles.formError}>{msg}</span>}
              />
            </div>
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>
              Login
              <Field
                type="text"
                className={styles.formInput}
                name="name"
                placeholder="Login"
              ></Field>
            </label>
            <div className={styles.erroField}>
              <ErrorMessage
                name="name"
                render={msg => <span className={styles.formError}>{msg}</span>}
              />
            </div>
          </div>

          <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>
              Password
              <Field
                type="text"
                className={styles.formInput}
                name="password"
                placeholder="Password"
              ></Field>
            </label>
            <div className={styles.erroField}>
              <ErrorMessage
                name="password"
                render={msg => <span className={styles.formError}>{msg}</span>}
              />
            </div>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Sign Up
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
