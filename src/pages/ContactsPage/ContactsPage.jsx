import CSS from './Contacts.module.css';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  getLoadingValue,
  fetchContacts,
  getContactsValue,
  deleteContact,
} from 'redux/contactsSlice';
import { getFilterValue } from 'redux/filterSlice';
import Card from 'components/Card/Card';
import Filter from 'components/Filter/Filter';
import NotFound from 'components/NotFound/NotFound';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Contacts = () => {
  const contacts = useSelector(getContactsValue);
  const isLoading = useSelector(getLoadingValue);
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filterValue.toLowerCase())
  );

  const handleDeleteContact = id => {
    Confirm.show(
      'Deleteing Confirm',
      'This contact will be deleted!',
      'Yes',
      'No',
      () => {
        dispatch(deleteContact(id));
        Notify.success(`The contact has been deleted!`);
      },
      () => {
        Notify.info('Deletion canceled!');
      }
    );
  };

  return (
    <>
      <Filter />

      {isLoading ? (
        <p>Loading...</p>
      ) : contacts.length ? (
        <ul className={CSS.contacts}>
          <Card
            handleDeleteContact={handleDeleteContact}
            filteredContacts={filteredContacts}
          />
        </ul>
      ) : (
        <NotFound />
      )}
    </>
  );
};

export default Contacts;
