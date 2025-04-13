import { useDispatch } from 'react-redux';
import { deleteContact, updateContact } from '../../redux/contacts/operations';
import { useState } from 'react';
import css from './Contact.module.css';
import ConfirmModal from '../ConfirmModal/ConfirmModal';
import EditContactForm from '../EditContactForm/EditContactForm';
import toast from 'react-hot-toast';

const Contact = ({ id, name, number }) => {
  const dispatch = useDispatch();

  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleDelete = () => setShowModal(true);
  const handleCancelDelete = () => setShowModal(false);

  const handleConfirmDelete = () => {
    dispatch(deleteContact(id))
      .unwrap()
      .then(() => toast.success(`Deleted ${name}`))
      .catch(() => toast.error('Failed to delete contact'));
    setShowModal(false);
  };

  const handleEdit = () => setIsEditing(true);
  const handleCancelEdit = () => setIsEditing(false);

  const handleSaveEdit = values => {
    dispatch(updateContact({ id, updatedData: values }))
      .unwrap()
      .then(() => toast.success('Contact updated'))
      .catch(() => toast.error('Update failed'));
    setIsEditing(false);
  };

  return (
    <>
      {isEditing ? (
        <EditContactForm
          contact={{ name, number }}
          onSubmit={handleSaveEdit}
          onCancel={handleCancelEdit}
        />
      ) : (
        <div className={css.listItem}>
          <p className={css.userName}>{name}</p>
          <p>{number}</p>
          <div style={{ display: 'flex', gap: '6px' }}>
            <button className={css.buttonContact} onClick={handleEdit}>
              Edit
            </button>
            <button className={css.buttonContact} onClick={handleDelete}>
              Delete
            </button>
          </div>
        </div>
      )}

      {showModal && (
        <ConfirmModal
          name={name}
          onConfirm={handleConfirmDelete}
          onCancel={handleCancelDelete}
        />
      )}
    </>
  );
};

export default Contact;
