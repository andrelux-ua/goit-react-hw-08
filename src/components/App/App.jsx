import ContactForm from '../ContactForm/ContactForm.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import Layout from '../Layout/Layout.jsx';
import Loader from '../Loader/Loader.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../../redux/contactsOps.js';
import { selectIsError, selectIsLoading } from '../../redux/contactsSlice.js';
import css from './App.module.css';

const App = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <Layout>
      <div className={css.fixedHeader}>
        <h1 className={css.titleLayout}>Phonebook</h1>
        <ContactForm />
        <SearchBox />
        {isLoading && !isError && <Loader />}
        {isError && (
          <p className={css.errorMessage}>
            Unfortunately, there was an issue, and we couldn't establish a
            connection. Please check your internet connection and try connecting
            again
          </p>
        )}
        <ContactList />
      </div>
    </Layout>
  );
};

export default App;
