import PropTypes from 'prop-types';
import { ListItem, StyledButton } from './ContactItem.styled';

function ContactItem({ id, name, number, onClick }) {
  return (
    <ListItem>
      <p>
        {name}: {number}
      </p>
      <StyledButton
        type="button"
        onClick={() => {
          onClick(id);
        }}
      >
        Delete
      </StyledButton>
    </ListItem>
  );
}

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactItem;
