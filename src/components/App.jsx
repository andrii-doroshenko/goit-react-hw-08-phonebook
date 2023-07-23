import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import UserForm from './UserForm/UserForm';
import Contacts from '../pages/ContactsPage/ContactsPage';
// import NotFound from './NotFound/NotFound';
import NotFoundPage from 'pages/NotFoundPage/NotFoundPage';

import { useSelector } from 'react-redux';
import { getContactsValue } from 'redux/contactsSlice';

const App = () => {
  const contacts = useSelector(getContactsValue);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<UserForm />} />
        <Route
          path="contacts"
          // element={contacts.length ? <Contacts /> : <NotFound />}
          element={<Contacts />}
        />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default App;
