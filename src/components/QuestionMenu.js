// import React from "react";

// const QuestionMenu = ({
//   totalQuestions,
//   currentQuestion,
//   handleQuestionChange,
// }) => {
//   const questionNumbers = Array.from(
//     { length: totalQuestions },
//     (_, index) => index + 1
//   );

//   return (
//     <div className="questionMenu">
//       {questionNumbers.map((number) => (
//         <div
//           key={number}
//           className={`questionMenuItem ${
//             currentQuestion === number - 1 ? "active" : ""
//           }`}
//           onClick={() => handleQuestionChange(number - 1)}
//         >
//           {number}
//         </div>
//       ))}
//     </div>
//   );
// };

// export default QuestionMenu;
import React from "react";

const QuestionMenu = ({
  totalQuestions,
  currentQuestion,
  handleQuestionChange,
  resultData,
}) => {
  const questionNumbers = Array.from(
    { length: totalQuestions },
    (_, index) => index + 1
  );

  return (
    <div className="questionMenu">
      {questionNumbers.map((number) => {
        const isCorrect = resultData[number - 1]?.isCorrect;
        return (
          <div
            key={number}
            className={`questionMenuItem ${
              currentQuestion === number - 1 ? "active" : ""
            } ${isCorrect ? "correct" : isCorrect === false ? "wrong" : ""}`}
            onClick={() => handleQuestionChange(number - 1)}
          >
            {number}
          </div>
        );
      })}
    </div>
  );
};

export default QuestionMenu;
