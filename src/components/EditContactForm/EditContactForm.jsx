import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import css from '../ContactForm/ContactForm.module.css';

const schema = Yup.object().shape({
  name: Yup.string().min(2).required(),
  number: Yup.string()
    .matches(/^\d{3}-\d{3}-\d{4}$/, 'Format: xxx-xxx-xxxx')
    .required(),
});

const EditContactForm = ({ contact, onSubmit, onCancel }) => {
  return (
    <Formik
      initialValues={{ name: contact.name, number: contact.number }}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      <Form className={css.form}>
        <label className={css.label}>Name</label>
        <Field name="name" type="text" className={css.input} />
        <label className={css.label}>Number</label>
        <Field name="number" type="text" className={css.input} />
        <div style={{ display: 'flex', gap: '5px', marginTop: '5px' }}>
          <button type="submit">Save</button>
          <button type="button" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default EditContactForm;
