import { Section } from './Section/Section';
import UserForm from './UserForm/UserForm';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';
import NotFound from './NotFound/NotFound';

import { useSelector } from 'react-redux';
import { getContactsValue } from 'redux/contactsSlice';

const App = () => {
  const contacts = useSelector(getContactsValue);

  return (
    <>
      <Section>
        <h1>Phonebook</h1>
        <UserForm />

        <h2>Contacts</h2>
        <Filter />

        {contacts.length ? <Contacts /> : <NotFound />}
      </Section>
    </>
  );
};

export default App;
