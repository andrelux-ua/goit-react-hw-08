import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';
import {
  selectFilteredContacts,
  selectIsLoading,
} from '../../redux/contactsSlice';

const ContactList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className={css.contactList}>
      <ul className={css.scrollList}>
        {filteredContacts.length === 0 && !isLoading ? (
          <p className={css.message}>There are no contacts available</p>
        ) : (
          filteredContacts.map(({ id, name, number }) => (
            <li key={id}>
              <Contact id={id} name={name} number={number} />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default ContactList;
