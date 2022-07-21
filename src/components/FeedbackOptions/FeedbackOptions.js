import PropTypes from 'prop-types';

export const FeedbackOptions = ({ options, handlerFeedback }) => {
  return (
    <div>
      {options.map(item => (
        <button
          type="button"
          name={item}
          onClick={handlerFeedback}
          key={item}
          style={{ marginRight: '10px' }}
        >
          {item[0].toUpperCase() + item.slice(1)}
        </button>
      ))}
    </div>
  );
};

FeedbackOptions.propTypes = {
  handlerFeedback: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.string),
};
