import { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import PersonIcon from '@mui/icons-material/Person';
import PhoneIcon from '@mui/icons-material/Phone';
import clsx from 'clsx';
import { useDispatch } from 'react-redux';

import styles from './ContactForm.module.css';
import { addContact } from '../../redux/contacts/operations';

const dataValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(/^\d+$/, 'Phone number is not valid')
    .required('Required')
    .min(10, 'Too Short!')
    .max(10, 'Too Long!'),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const addUser = (data, actions) => {
    dispatch(addContact({ ...data }));
    actions.resetForm();
  };

  const [userSvgColor, setUserSvgColor] = useState(true);
  const [phoneSvgColor, setPhoneSvgColor] = useState(true);
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      onSubmit={addUser}
      validationSchema={dataValidationSchema}
    >
      <Form style={{ marginBottom: 24 }}>
        <div className={styles.inputFieldContainer}>
          <label
            className={styles.inputLabel}
            onFocus={() => {
              setUserSvgColor(false);
            }}
            onMouseEnter={() => {
              setUserSvgColor(false);
            }}
            onMouseLeave={() => {
              setUserSvgColor(true);
            }}
            onBlur={() => {
              setUserSvgColor(true);
            }}
          >
            Name
            <Field
              type="text"
              name="name"
              className={styles.inputField}
            ></Field>
          </label>
          <PersonIcon
            className={clsx(styles.userLock, {
              [styles.focusSvg]: userSvgColor,
            })}
          />

          <div className={styles.erroField}>
            <ErrorMessage
              name="name"
              render={msg => <span className={styles.formError}>{msg}</span>}
            />
          </div>
        </div>
        <div className={styles.inputFieldContainer}>
          <label
            className={styles.inputLabel}
            onFocus={() => {
              setPhoneSvgColor(false);
            }}
            onMouseEnter={() => {
              setPhoneSvgColor(false);
            }}
            onMouseLeave={() => {
              setPhoneSvgColor(true);
            }}
            onBlur={() => {
              setPhoneSvgColor(true);
            }}
          >
            Number
            <Field type="text" name="number" className={styles.inputField} />
          </label>
          <PhoneIcon
            className={clsx(styles.userLock, {
              [styles.focusSvg]: phoneSvgColor,
            })}
          />
          <div className={styles.erroField}>
            <ErrorMessage
              name="number"
              render={msg => <span className={styles.formError}>{msg}</span>}
            />
          </div>
        </div>
        <button type="submit" className={styles.submitBtn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

export default ContactForm;
