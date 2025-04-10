import { useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/contactsOps';
import css from './Contact.module.css';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div className={css.listItem}>
        <p className={css.userName}>{name}</p>
        <p>{number}</p>
        <button
          type="button"
          onClick={handleDelete}
          className={css.buttonContact}
        >
          Delete
        </button>
      </div>
    </>
  );
};

export default Contact;
