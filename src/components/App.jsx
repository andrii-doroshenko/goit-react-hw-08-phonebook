import { Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import UserForm from './UserForm/UserForm';
import { useDispatch, useSelector } from 'react-redux';
import { lazy, useEffect } from 'react';
import { refreshUser } from 'services/operations';
import { selectIsRefreshing } from 'redux/contactsSlice';
import { RestrictedRout } from './RestrictedRout';
import { PrivateRout } from './PrivateRout';
import Preloader from './Preloader/Preloader';

const ContactsPage = lazy(() => import('pages/ContactsPage/ContactsPage'));
const LoginPage = lazy(() => import('pages/LoginPage/LoginPage'));
const RegisterPage = lazy(() => import('pages/RegisterPage/RegisterPage'));
const NotFoundPage = lazy(() => import('pages/NotFoundPage/NotFoundPage'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      {isRefreshing ? (
        <Preloader />
      ) : (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<UserForm />} />
            <Route
              path="/login"
              element={
                <RestrictedRout component={LoginPage} redirectTo="/contacts" />
              }
            />
            <Route
              path="/register"
              element={
                <RestrictedRout
                  component={RegisterPage}
                  redirectTo="/contacts"
                />
              }
            />
            <Route
              path="/contacts"
              element={
                <PrivateRout component={ContactsPage} redirectTo="/login" />
              }
            />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      )}
    </>
  );
};

export default App;
