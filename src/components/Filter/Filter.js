import { nanoid } from 'nanoid';
import css from './Filter.module.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateFilter } from 'redux/contacts/slice';
import { selectFilter } from 'redux/contacts/selectors';

function Filter() {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();
  const filterInputId = nanoid();

  const handleChange = ({ target: { value } }) => {
    dispatch(updateFilter(value.trim()));
  };

  return (
    <div className={css.filter}>
      <label className={css.label} htmlFor={filterInputId}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        name="filter"
        id={filterInputId}
        onChange={handleChange}
        value={filter}
      />
    </div>
  );
}

export default Filter;
