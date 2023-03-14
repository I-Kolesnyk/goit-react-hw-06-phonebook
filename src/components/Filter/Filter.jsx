import PropTypes from 'prop-types';
import { StyledLabel, StyledInput } from './Filter.styled';

function Filter({ value, onChange }) {
  return (
    <StyledLabel>
      Find contacts by name
      <StyledInput
        name="filter"
        type="text"
        value={value}
        onChange={onChange}
      />
    </StyledLabel>
  );
}

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
