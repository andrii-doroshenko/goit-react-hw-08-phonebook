import CSS from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <div className={CSS.container}>
      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/contacts">Contacts</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
