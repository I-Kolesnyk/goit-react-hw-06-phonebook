import { useDispatch, useSelector } from 'react-redux';
import { setFilter, getFilterValue } from 'redux/filterSlice';
import { StyledLabel, StyledInput } from './Filter.styled';

function Filter() {
  const dispatch = useDispatch();
  const filterValue = useSelector(getFilterValue);
  return (
    <StyledLabel>
      Find contacts by name
      <StyledInput
        name="filter"
        type="text"       
        onChange={event => dispatch(setFilter(event.currentTarget.value))}
        value={filterValue}
      />
    </StyledLabel>
  );
}

export default Filter;
