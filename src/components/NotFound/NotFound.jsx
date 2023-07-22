import emptyImg from 'images/noImage.webp';

const NotFound = () => (
  <picture style={{ textAlign: 'center' }}>
    <img src={emptyImg} alt="Not found" width={250} height={250} />
    <b>Phonebook is empty!</b>
  </picture>
);

export default NotFound;
