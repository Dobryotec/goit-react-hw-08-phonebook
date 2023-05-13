import { nanoid } from 'nanoid';
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
    <div className="container inline-flex items-center flex-col justify-center gap-y-4 mt-4">
      <label className="font-semibold text-sky-500" htmlFor={filterInputId}>
        Find contacts by name
      </label>
      <input
        className="max-w-xl font-bold dark:text-stone-500 px-4 py-1.5 shadow-xl  border-solid border-4 border-amber-400 rounded focus:outline-none focus:border-sky-500  focus:ring-2 focus:ring-sky-500 "
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
