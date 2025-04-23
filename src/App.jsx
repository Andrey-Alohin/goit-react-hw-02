import { useEffect, useState } from "react";
import Description from "./components/Description/Description";
import Feedback from "./components/Feedback/Feedback";
import Options from "./components/Options/Options";
import Notification from "./components/Notification/Notification";

function App() {
  const feedbackLocalKey = "feedback";
  const [feedback, SetFeedback] = useState(function getFeedback() {
    return window.localStorage.getItem(feedbackLocalKey) !== null
      ? JSON.parse(window.localStorage.getItem(feedbackLocalKey))
      : { good: 0, neutral: 0, bad: 0 };
  });
  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;
  const positiveFeedback = Math.round((feedback.good / totalFeedback) * 100);
  useEffect(() => {
    if (totalFeedback > 0) {
      window.localStorage.setItem(feedbackLocalKey, JSON.stringify(feedback));
    }
  }, [feedback, totalFeedback]);
  function updateFeedback(feedbackType) {
    SetFeedback({
      ...feedback,
      [feedbackType]: feedback[feedbackType] + 1,
    });
  }
  function resetFeedback() {
    SetFeedback({
      good: 0,
      neutral: 0,
      bad: 0,
    });
    window.localStorage.removeItem(feedbackLocalKey);
  }
  return (
    <>
      <Description />
      <Options
        onUpdate={updateFeedback}
        onReset={resetFeedback}
        totalFeedback={totalFeedback}
      />
      {totalFeedback > 0 ? (
        <Feedback
          feedback={feedback}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      ) : (
        <Notification />
      )}
    </>
  );
}

export default App;
