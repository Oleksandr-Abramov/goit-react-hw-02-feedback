export const FeedbackOptions = ({ options, handlerFeedback }) => {
  return (
    <div>
      {options.map(item => (
        <button type="button" name={item} onClick={handlerFeedback} key={item}>
          {item[0].toUpperCase() + item.slice(1)}
        </button>
      ))}
    </div>
  );
};
