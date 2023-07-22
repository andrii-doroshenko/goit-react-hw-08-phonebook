import CSS from './Contacts.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact, getContactsValue } from 'redux/contactsSlice';
import { getFilterValue } from 'redux/filterSlice';
import Card from 'components/Card/Card';
import { Confirm } from 'notiflix/build/notiflix-confirm-aio';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const Contacts = () => {
  const contacts = useSelector(getContactsValue);
  const filterValue = useSelector(getFilterValue);
  const dispatch = useDispatch();

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
    <ul className={CSS.contacts}>
      <Card
        handleDeleteContact={handleDeleteContact}
        filteredContacts={filteredContacts}
      />
    </ul>
  );
};

export default Contacts;
