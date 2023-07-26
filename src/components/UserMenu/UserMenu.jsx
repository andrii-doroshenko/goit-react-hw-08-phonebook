import CSS from './UserMenu.module.css';
import { BsFillPersonFill } from 'react-icons/bs';
import { useSelector } from 'react-redux';
import { getContactsValue } from 'redux/contactsSlice';

const UserMenu = () => {
  const users = useSelector(getContactsValue);

  return (
    <div className={CSS.userMenu}>
      <BsFillPersonFill className={CSS.userIcon} />
      <span className={CSS.userMenu__name}>
        Welcom, <b>{users.name}</b>
      </span>
      <button type="button" className={CSS.userMenu__btn}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
