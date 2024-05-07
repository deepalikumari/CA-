import React, { useState } from "react";
import QuestionBox from "./QuestionBox";
import "./css/result.css";

const Result = ({ correctAnswers, totalQuestions, onRestart }) => {
  const [restart, setRestart] = useState(false);

  const percentage = (correctAnswers / totalQuestions) * 100;

  const getComment = () => (
    percentage === 100
      ? "Excellent!"
      : percentage === 80
      ? "Great job!"
      : percentage === 60
      ? "Good effort!"
      : percentage === 40
      ? "Not bad! TRY AGAIN"
      : "Sorry, you need to study more."
  );

  const comment = getComment();

  const handleRestart = () => {
    onRestart();
    setRestart(true);
  };

  return (
    <div className="main">

      {restart ? (
        <QuestionBox restart={restart} setRestart={setRestart} />
      ) : (
        <div className="res">
          <div className="content" id="content">

            <h1>Quiz Result</h1>
            <p>Total Questions: {totalQuestions}</p>
            <p>Number of correct answers: {correctAnswers}</p>
          </div>

          <p id="cmnt">{comment}</p>
          <p id="per">{percentage}%</p>
        </div>
      )}

        <button className="RBtn" onClick={handleRestart}>
          TRY AGAIN
        </button>
      </div>

  );
};

export default Result;
