import emptyImg from 'images/noImage.webp';
import CSS from './NotFound.module.css';

const NotFound = () => (
  <picture className={CSS.picture}>
    <img
      className={CSS.imageNotFound}
      src={emptyImg}
      alt="Not found"
      width={250}
      height={250}
    />
    <b>
      Your phonebook is empty!
    </b>
  </picture>
);

export default NotFound;
