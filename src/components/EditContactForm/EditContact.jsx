import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { editContact } from '../../redux/contacts/operations';
import { useDispatch } from 'react-redux';
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

const EditContact = ({ prevUserData, closeForm }) => {
  const dispatch = useDispatch();

  const { id, name, number } = prevUserData;

  const changeUser = data => {
    if (name === data.name && number === data.number) return;
    dispatch(editContact({ id, ...data }));

    closeForm();
  };

  return (
    <Formik
      initialValues={{
        name: name,
        number: number,
      }}
      validationSchema={dataValidationSchema}
      onSubmit={changeUser}
    >
      <Form>
        <Field type="text" name="name" />
        <ErrorMessage name="name" render={msg => <span>{msg}</span>} />
        <Field type="text" name="number" />
        <ErrorMessage name="number" render={msg => <span>{msg}</span>} />
        <button type="submit">submit</button>
        <button
          type="button"
          onClick={() => {
            closeForm();
          }}
        >
          cancel
        </button>
      </Form>
    </Formik>
  );
};

export default EditContact;
