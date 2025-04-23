import css from "./Options.module.css";
function Options({ onUpdate, onReset, totalFeedback }) {
  return (
    <div className={css.optionsContainer}>
      <button className={css.optionsBtn} onClick={() => onUpdate("good")}>
        Good
      </button>
      <button className={css.optionsBtn} onClick={() => onUpdate("neutral")}>
        Neutral
      </button>
      <button className={css.optionsBtn} onClick={() => onUpdate("bad")}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          className={`${css.optionsBtn} ${css.resetBtn}`}
          onClick={onReset}
        >
          Reset
        </button>
      )}
    </div>
  );
}

export default Options;
