import PropTypes from 'prop-types';

export const Notification = ({ message }) => <p>{message}</p>;

Notification.propTypes = {
  messag: PropTypes.string,
};
