import css from './ConfirmModal.module.css';

const ConfirmModal = ({ name, onConfirm, onCancel }) => {
  return (
    <div className={css.overlay}>
      <div className={css.modal}>
        <p>
          Delete contact <strong>{name}</strong>?
        </p>
        <div className={css.actions}>
          <button onClick={onConfirm} className={css.confirm}>
            Yes
          </button>
          <button onClick={onCancel} className={css.cancel}>
            No
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmModal;
