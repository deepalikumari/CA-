import React, { useState } from "react";
import "./css/box.css";
import questions from "../assets/questions.js";
import Result from "./Result.jsx"

export default function QuestionBox({ restart, setRestart }) {
  const [curr, setcurr] = useState(0);
  const [bright, setbright] = useState(false);
  const current = questions[curr];
  const [showResult, setShowResult] = useState(false);
  const [correctAnswers, setCorrectAnswers] = useState(0);


  const handlebright = () => {
    setbright(true);
  };

  const handleRemovebright = () => {
    setbright(false);
  };

  // handleClick function will change the question and options whenever an option is clicked
  const handleClick = (isCorrect) => {
    setcurr((prev) => {
      const next = prev + 1;
      if (next === 5) {
        setShowResult(true);
      }
      if (isCorrect) {
        setCorrectAnswers((prevCorrect) => prevCorrect + 1);
      }
      return next;
    });

};

// setting all the values to default so that the restart feature will work properly
const handleRestart = () => {
  setcurr(0);
  setbright(false);
  setShowResult(false);
  setCorrectAnswers(0);
  setRestart(false);
};

  return (
    
    // creating a div that will contain question and options
    <div className="container flex" id="boxContainer">
      {showResult ? (
        <Result correctAnswers={correctAnswers} totalQuestions={5} onRestart={handleRestart}/>
      ) : (
      <div id="ques" className={`queBox flex ${bright ? "brighted" : ""} darkMode`}>
        {/* this div will display the current question number */}

        <div className="num">
          <h4 className="queNum flex">{`${curr + 1}/${
            questions.length
          }`}</h4>
        </div>
        {/* it will display the question */}

        <div className={`queText flex ${bright ? "brightedText" : ""}`}>
          {current.text}
        </div>
        {/* this block will display the options using map higher order function */}

        <div className="options flex">
          {current.options.map((option) => (
            <button key={option.id} className="optionBtn" onClick={() => handleClick(option.isCorrect)}>
              {option.text}
            </button>
          ))}
        </div>


        {/* bright buttons are created here to highligt the question */}
        <div className="bright" id="highBtns">
          
          <button className="highBtn darkMode" id="high" onClick={handlebright}>Highlight</button>

          <button className="highBtn darkMode" id="rem" onClick={handleRemovebright}>Remove</button>

        </div>
      </div>
      )}
      </div>
    );
  }
