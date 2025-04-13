import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from '../../components/ContactForm/ContactForm.module.css';

const RegistrationPage = () => {
  const dispatch = useDispatch();

  const schema = Yup.object().shape({
    name: Yup.string().min(2, 'Min 2 symbols').required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Min 6 symbols').required('Required'),
  });

  const handleSubmit = (values, actions) => {
    dispatch(register(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <label htmlFor="name" className={css.label}>
          Name
        </label>
        <Field name="name" type="text" className={css.input} />
        <ErrorMessage name="name" component="p" className={css.error} />

        <label htmlFor="email" className={css.label}>
          Email
        </label>
        <Field name="email" type="email" className={css.input} />
        <ErrorMessage name="email" component="p" className={css.error} />

        <label htmlFor="password" className={css.label}>
          Password
        </label>
        <Field name="password" type="password" className={css.input} />
        <ErrorMessage name="password" component="p" className={css.error} />

        <button type="submit" className={css.button}>
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationPage;
