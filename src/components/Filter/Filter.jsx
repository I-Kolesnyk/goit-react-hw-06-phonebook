import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { StyledLabel, StyledInput } from './Filter.styled';

function Filter() {
  const dispatch = useDispatch();
  return (
    <StyledLabel>
      Find contacts by name
      <StyledInput
        name="filter"
        type="text"       
        onChange={event => dispatch(setFilter(event.currentTarget.value))}
      />
    </StyledLabel>
  );
}

export default Filter;
