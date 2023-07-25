import { BsFillPersonFill } from 'react-icons/bs';

const UserMenu = () => {
  return (
    <div className={CSS.userMenu}>
      <BsFillPersonFill />
      <span className={CSS.userMenu__name}>userName</span>
      <button type="button" className={CSS.userMenu__btn}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;
