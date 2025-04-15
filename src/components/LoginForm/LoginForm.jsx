import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/operations';
import css from '../../components/ContactForm/ContactForm.module.css';

const schema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string()
    .min(6, 'Min 6 characters')
    .required('Password is required'),
});

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    dispatch(login(values));
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
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
          Login
        </button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
