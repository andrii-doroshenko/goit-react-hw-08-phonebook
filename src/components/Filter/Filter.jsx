import CSS from './Filter.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { addFilter, getFilterValue } from 'redux/filterSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const state = useSelector(getFilterValue);

  return (
    <div className={CSS.filter}>
      <label htmlFor="filter" className={CSS.userForm__label}>
        Find contacts by name
      </label>
      <input
        type="text"
        id="filter"
        className={CSS.filterInput}
        onChange={e => dispatch(addFilter(e.target.value))}
        value={state}
      />
    </div>
  );
};

export default Filter;