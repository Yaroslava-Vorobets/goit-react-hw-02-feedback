import PropTypes from 'prop-types';
import {Button} from './Notification.styled';


const Notification = ({ message }) => {
  return < Notification>{message}</ Notification>;
};

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;