import CSS from './Header.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/contactsSlice';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import LoginMenu from 'components/LoginMenu/LoginMenu';

const Header = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header>
      <div className={CSS.container}>
        <div className={CSS.logo}>
          <Link to="/">Phonebook</Link>
        </div>
        <Navigation />
        {isLoggedIn ? <UserMenu /> : <LoginMenu />}
      </div>
    </header>
  );
};

export default Header;
