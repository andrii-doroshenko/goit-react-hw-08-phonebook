import CSS from './Navigation.module.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/contactsSlice';

const Navigation = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav className={CSS.navigation}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        {isLoggedIn && (
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
