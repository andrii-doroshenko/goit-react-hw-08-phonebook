import CSS from './UserForm.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addContact,
  fetchContacts,
  getContactsValue,
  getLoadingValue,
} from 'redux/contactsSlice';
import { Notify } from 'notiflix';

const UserForm = () => {
  const state = useSelector(getContactsValue);
  const isLoading = useSelector(getLoadingValue);
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleStateChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        break;
    }
  };

  const handleAddUser = e => {
    e.preventDefault();

    if (
      state.some(
        contact =>
          contact.name.toLowerCase() === name.toLowerCase() ||
          contact.number === number
      )
    ) {
      Notify.warning(`${name} is already in contacts`);
      return;
    }

    dispatch(addContact({ name, number }));
    Notify.success(`${name} has been added!`);
    setName('');
    setNumber('');
  };

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Add new contact</h1>
      <form
        action=""
        autoComplete="off"
        className={CSS.userForm}
        onSubmit={handleAddUser}
      >
        <label htmlFor="formNameInput" className={CSS.userForm__label}>
          Name
        </label>
        <input
          type="text"
          name="name"
          placeholder="Andrii"
          pattern="^[a-zA-Zа-яА-Я]+([ -][a-zA-Zа-яА-Я]+)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          id="formNameInput"
          className={CSS.userForm__input}
          value={name}
          onChange={handleStateChange}
        />

        <label htmlFor="formNumberInput" className={CSS.userForm__label}>
          Number
        </label>
        <input
          type="tel"
          name="number"
          placeholder="+380681234567"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          id="formNumberInput"
          className={CSS.userForm__input}
          value={number}
          onChange={handleStateChange}
        />

        <button
          type="submit"
          disabled={isLoading}
          className={CSS.userForm__btn}
        >
          {isLoading ? 'Loading...' : 'Add Contact'}
        </button>
      </form>
    </>
  );
};

export default UserForm;
