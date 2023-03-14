import PropTypes from 'prop-types';
import { MessageText } from './Message.styled';

function Message({ message }) {
  return <>{message && <MessageText>{message}</MessageText>}</>;
}

Message.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Message;
