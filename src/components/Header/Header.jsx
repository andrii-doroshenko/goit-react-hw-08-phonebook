import CSS from './Header.module.css';
import { NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();

  return (
    <header>
      <div className={CSS.container}>
        <nav>
          <ul>
            <li>
              <NavLink
                to="/"
                className={location.pathname === '/' ? CSS.active : ''}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contacts"
                className={location.pathname === '/contacts' ? CSS.active : ''}
              >
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
