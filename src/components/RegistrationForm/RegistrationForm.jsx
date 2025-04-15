import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';
import css from '../../pages/RegistrationPage/RegistrationPage.module.css';

const schema = Yup.object().shape({
  name: Yup.string().min(2, 'Min 2 characters').required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Min 6 characters')
    .required('Password is required'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();

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
        <Field type="text" name="name" id="name" className={css.input} />
        <ErrorMessage name="name" component="p" className={css.error} />

        <label htmlFor="email" className={css.label}>
          Email
        </label>
        <Field type="email" name="email" id="email" className={css.input} />
        <ErrorMessage name="email" component="p" className={css.error} />

        <label htmlFor="password" className={css.label}>
          Password
        </label>
        <Field
          type="password"
          name="password"
          id="password"
          className={css.input}
        />
        <ErrorMessage name="password" component="p" className={css.error} />

        <button type="submit" className={css.button}>
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
