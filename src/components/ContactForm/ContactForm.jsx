import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsOps';
import css from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const phonebookSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, 'Must be min 3 chars')
      .max(50, 'Maximum 50 characters!')
      .matches(/^[a-zA-ZА-Яа-яЇїІіЄєҐґ'’ -]+$/, 'Name cannot contain numbers!')
      .required('This field is required!'),
    number: Yup.string()
      .matches(
        /^\d{3}-\d{3}-\d{4}$/,
        'Only numbers in the format xxx-xxx-xxxx !'
      )
      .min(3, 'Must be min 3 chars')
      .max(50, 'Maximum 50 characters!')
      .required('Phone number is required'),
  });

  const handleSubmit = (values, actions) => {
    dispatch(
      addContact({
        name: values.name,
        number: values.number,
      })
    );
    actions.resetForm();
  };

  return (
    <div className={css.forma}>
      <Formik
        initialValues={{ name: '', number: '' }}
        onSubmit={handleSubmit}
        validationSchema={phonebookSchema}
      >
        <Form className={css.form}>
          <label htmlFor="name" className={css.label}>
            Name
          </label>
          <Field
            className={css.input}
            type="text"
            name="name"
            id="name"
          ></Field>
          <ErrorMessage name="name" component="p" className={css.error} />
          <label htmlFor="number" className={css.label}>
            Number xxx-xxx-xxxx
          </label>
          <Field
            className={css.input}
            type="text"
            name="number"
            id="number"
          ></Field>
          <ErrorMessage name="number" component="p" className={css.error} />

          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    </div>
  );
};

export default ContactForm;
