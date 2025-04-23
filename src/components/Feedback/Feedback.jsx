import css from "./Feedback.module.css";
function Feedback({ feedback, totalFeedback, positiveFeedback }) {
  return (
    <div className={css.feedbackContainer}>
      <ul className={css.feedbackList}>
        <li className={css.feedbackItem}>
          <p>Good: {feedback.good}</p>
        </li>
        <li className={css.feedbackItem}>
          <p>Neutral: {feedback.neutral}</p>
        </li>
        <li className={css.feedbackItem}>
          <p>Bad: {feedback.bad}</p>
        </li>
        <li className={css.feedbackItem}>
          <p>Total: {totalFeedback}</p>
        </li>
        <li className={css.feedbackItem}>
          <p>Positive: {positiveFeedback}%</p>
        </li>
      </ul>
    </div>
  );
}

export default Feedback;
