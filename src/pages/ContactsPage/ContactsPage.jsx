import ContactForm from '../../components/ContactForm/ContactForm';
import ContactList from '../../components/ContactList/ContactList';
import SearchBox from '../../components/SearchBox/SearchBox';
import Loader from '../../components/Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/auth/operations';
import { selectIsError, selectIsLoading } from '../../redux/contacts/slice';
import css from '../../components/App/App.module.css';

const ContactsPage = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div className={css.fixedHeader}>
      <h1 className={css.titleLayout}>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      {isLoading && !isError && <Loader />}
      {isError && (
        <p className={css.errorMessage}>
          Unfortunately, there was an issue, and we couldn't establish a
          connection.
        </p>
      )}
      <ContactList />
    </div>
  );
};

export default ContactsPage;
