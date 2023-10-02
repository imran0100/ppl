// import React, { useState, useEffect } from "react";
// import "./AAA.css";
// import { useParams } from "react-router-dom";

// import { useNavigate, Link } from "react-router-dom";
// import logo from "../logo/WhatsApp Image 2023-07-12 at 9.58.35 AM.png";
// const AAA = () => {
//   const [questions, setQuestions] = useState([]);
//   const [editIndex, setEditIndex] = useState(-1);

//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);
//   const { id } = useParams();

//   useEffect(() => {
//     // Fetch data from the API
//     fetch("http://13.48.26.232:5000/api/v1/getallquestion")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log("my data", data.data);
//         console.log(id);
//         // Filter questions based on subject ID
//         const filteredQuestions = data.data.filter(
//           (question) => question.sub_id === Number(id)
//         );
//         setQuestions(filteredQuestions);
//       })
//       .catch((error) => {
//         console.error("Error fetching data from API:", error);
//       });
//   }, [id]);

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   const handleLogout = () => {
//     localStorage.removeItem("user_322");
//     navigate("/");
//   };
//   const handleEdit = (index) => {
//     setEditIndex(index);
//   };

//   const handleDelete = (index) => {
//     // Make the DELETE request to the API
//     fetch(`http://13.48.26.232:5000/api/v1/deletequestion/${index}`, {
//       method: "PUT", // Change the HTTP method to DELETE
//     })
//       .then((response) => {
//         if (response.ok) {
//           // Successfully deleted, update the UI by removing the deleted question
//           // Remove the question at the specified index
//           const updatedQuestions = questions.filter(
//             (i) => i.quesion_Id !== index
//           );
//           setQuestions(updatedQuestions);
//           setEditIndex(-1);
//         } else {
//           // Handle error here if needed
//           console.error("Failed to delete question");
//         }
//       })
//       .catch((error) => {
//         console.error("Error deleting question:", error);
//       });
//   };

//   const handleSave = (index, updatedQuestion) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[index] = updatedQuestion;
//     setQuestions(updatedQuestions);
//     setEditIndex(-1);
//   };

//   return (
//     <>
//       <div id="container-nav" className={`navbar ${isOpen ? "open" : ""}`}>
//         <nav className={`navbar ${isOpen ? "open" : ""}`}>
//           <img className="link-item" src={logo} alt="logo" />
//           <div className="menu-icon" onClick={toggleMenu}>
//             <div className="bar"></div>
//             <div className="bar"></div>
//             <div className="bar"></div>
//           </div>
//           <div className={`nav-links ${isOpen ? "show" : ""}`}>
//             <Link to="/admin" className="link-item">
//               Admin Dashboard
//             </Link>
//             <Link to="/choose" className="link-item">
//               Add Question
//             </Link>

//             <Link to="/seeprogress" className="link-item">
//               Students Progress
//             </Link>
//             <Link to="/adminnotifiaction" className="link-item">
//               Notification
//             </Link>
//             <a className="link-item" onClick={handleLogout}>
//               Logout
//             </a>
//           </div>
//         </nav>
//       </div>
//       <div className="question-bank">
//         {questions.map((question, index) => (
//           <div key={index} className="question">
//             {editIndex === index ? (
//               <QuestionEditForm
//                 question={question}
//                 onSave={(updatedQuestion) => handleSave(index, updatedQuestion)}
//                 onCancel={() => setEditIndex(-1)}
//               />
//             ) : (
//               <QuestionDisplay
//                 question={question}
//                 onEdit={() => handleEdit(index)}
//                 onDelete={() => handleDelete(question.quesion_Id)}
//               />
//             )}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// const QuestionDisplay = ({ question, onEdit, onDelete }) => (
//   <div>
//     <h3>{question.qustion_name}</h3>
//     <ul>
//       {question.options.map((option, index) => (
//         <li key={index}>{option}</li>
//       ))}
//     </ul>
//     <div className="edit-buttons">
//       <button onClick={onEdit}>Edit</button>
//       <button style={{ backgroundColor: "red" }} onClick={onDelete}>
//         Delete
//       </button>
//     </div>
//   </div>
// );

// const QuestionEditForm = ({ question, onSave, onCancel }) => {
//   const [editedQuestion, setEditedQuestion] = useState(question);

//   const handleOptionChange = (e, index) => {
//     const updatedOptions = [...editedQuestion.options];
//     updatedOptions[index] = e.target.value;
//     setEditedQuestion({ ...editedQuestion, options: updatedOptions });
//   };

//   const handleCorrectAnswerChange = (e) => {
//     const correctAnswer = e.target.value;
//     setEditedQuestion({ ...editedQuestion, correct_answer: correctAnswer });
//   };

//   const handleSave = () => {
//     onSave(editedQuestion);
//   };

//   return (
//     <div>
//       <h3>Edit Question</h3>
//       <input
//         style={{ marginBottom: "1.2rem" }}
//         type="text"
//         value={editedQuestion.qustion_name}
//         onChange={(e) =>
//           setEditedQuestion({
//             ...editedQuestion,
//             question_name: e.target.value,
//           })
//         }
//       />
//       <ul style={{ marginBottom: "1rem" }}>
//         {editedQuestion.options.map((option, index) => (
//           <li key={index}>
//             <input
//               type="text"
//               value={option}
//               onChange={(e) => handleOptionChange(e, index)}
//             />
//           </li>
//         ))}
//       </ul>
//       <label>
//         Correct Answer:
//         <select
//           value={editedQuestion.correct_answer}
//           onChange={handleCorrectAnswerChange}
//         >
//           {editedQuestion.options.map((option, index) => (
//             <option key={index} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//       </label>
//       <button className="save" onClick={handleSave}>
//         Save
//       </button>
//       <button className="cancel" onClick={onCancel}>
//         Cancel
//       </button>
//     </div>
//   );
// };

// export default AAA;

// import React, { useState, useEffect } from "react";
// import "./AAA.css";
// import { useParams } from "react-router-dom";

// import { useNavigate, Link } from "react-router-dom";
// import logo from "../logo/WhatsApp Image 2023-07-12 at 9.58.35 AM.png";
// const AAA = () => {
//   const [questions, setQuestions] = useState([]);
//   const [editIndex, setEditIndex] = useState(-1);

//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);
// const { id } = useParams();

// useEffect(() => {
//   // Fetch data from the API
//   fetch("http://13.48.26.232:5000/api/v1/getallquestion")
//     .then((response) => response.json())
//     .then((data) => {
//       console.log("my data", data.data);
//       console.log(id);
//       // Filter questions based on subject ID
//       const filteredQuestions = data.data.filter(
//         (question) => question.sub_id === Number(id)
//       );
//       setQuestions(filteredQuestions);
//     })
//     .catch((error) => {
//       console.error("Error fetching data from API:", error);
//     });
// }, [id]);
//   console.log(questions, "question test");
// const toggleMenu = () => {
//   setIsOpen(!isOpen);
// };
// const handleLogout = () => {
//   localStorage.removeItem("user_322");
//   navigate("/");
// };
//   const handleEdit = (index) => {
//     setEditIndex(index);
//   };

// const handleDelete = (index) => {
//   // Make the DELETE request to the API
//   fetch(`http://13.48.26.232:5000/api/v1/deletequestion/${index}`, {
//     method: "PUT", // Change the HTTP method to DELETE
//   })
//     .then((response) => {
//       if (response.ok) {
//         // Successfully deleted, update the UI by removing the deleted question
//         // Remove the question at the specified index
//         const updatedQuestions = questions.filter(
//           (i) => i.quesion_Id !== index
//         );
//         setQuestions(updatedQuestions);
//         setEditIndex(-1);
//       } else {
//         // Handle error here if needed
//         console.error("Failed to delete question");
//       }
//     })
//     .catch((error) => {
//       console.error("Error deleting question:", error);
//     });
// };

//   const handleSave = (index, updatedQuestion) => {
//     // Make the PUT request to the API
//     // fetch(
//     //   `http://13.48.26.232:5000/api/v1/updateQuestionDetails/${updatedQuestion.quesion_Id}`,
//     //   {
//     //     method: "PATCH",
//     //     headers: {
//     //       "Content-Type": "application/json",
//     //     },
//     //     body: JSON.stringify({ updatedQuestion }),
//     //   }
//     // )
//     //   .then((response) => {
//     //     if (response.ok) {
//     //       // Successfully updated, update the UI with the edited question
//     //       const updatedQuestions = [...questions];
//     //       updatedQuestions[index] = updatedQuestion;
//     //       setQuestions(updatedQuestions);
//     //       setEditIndex(-1);
//     //     } else {
//     //       // Handle error here if needed
//     //       console.error("Failed to update question");
//     //     }
//     //   })
//     //   .catch((error) => {
//     //     console.error("Error updating question:", error);
//     //   });
//     // console.log(updatedQuestion, "kfaosjiasjhifashkask");
//     function updateQuestionData(quesionId, updatedData) {
// const apiUrl = `http://13.48.26.232:5000/api/v1/updateQuestionDetails/${quesionId}`;

// return fetch(apiUrl, {
//   method: "PATCH",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify(updatedData),
// })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(
//         `Failed to update question (HTTP ${response.status})`
//       );
//     }
//     return response.json();
//   })
//   .then((data) => {
//     return data; // You can return the response data if needed
//   })
//   .catch((error) => {
//     console.error("Error updating question:", error);
//     throw error; // You can handle the error further or re-throw it
//   });
//     }

//     // Example usage:
//     const questionId = 26; // Replace with the actual question ID
//     const updatedData = {
//       // Replace with the updated question data
//       qustion_name: "Updated Question Name",
//       options: ["Option 1", "Option 2", "Option 3", "Option 4"],
//       correct_answer: "Option 2",
//     };
//     console.log(updatedData, "test23333");
//     updateQuestionData(questionId, updatedData)
//       .then((response) => {
//         console.log("Question updated successfully:", response);
//       })
//       .catch((error) => {
//         console.error("Failed to update question:", error);
//       });
//   };

//   return (
//     <>
// <div id="container-nav" className={`navbar ${isOpen ? "open" : ""}`}>
//   <nav className={`navbar ${isOpen ? "open" : ""}`}>
//     <img className="link-item" src={logo} alt="logo" />
//     <div className="menu-icon" onClick={toggleMenu}>
//       <div className="bar"></div>
//       <div className="bar"></div>
//       <div className="bar"></div>
//     </div>
//     <div className={`nav-links ${isOpen ? "show" : ""}`}>
//       <Link to="/admin" className="link-item">
//         Admin Dashboard
//       </Link>
//       <Link to="/choose" className="link-item">
//         Add Question
//       </Link>

//       <Link to="/seeprogress" className="link-item">
//         Students Progress
//       </Link>
//       <Link to="/adminnotifiaction" className="link-item">
//         Notification
//       </Link>
//       <a className="link-item" onClick={handleLogout}>
//         Logout
//       </a>
//     </div>
//   </nav>
// </div>
//       <div className="question-bank">
//         {questions.map((question, index) => (
//           <div key={index} className="question">
//             {editIndex === index ? (
//               <QuestionEditForm
//                 question={question}
//                 onSave={(updatedQuestion) => handleSave(index, updatedQuestion)}
//                 onCancel={() => setEditIndex(-1)}
//               />
//             ) : (
//               <QuestionDisplay
//                 question={question}
//                 onEdit={() => handleEdit(index)}
//                 onDelete={() => handleDelete(question.quesion_Id)}
//               />
//             )}
//           </div>
//         ))}
//       </div>
//     </>
//   );
// };

// const QuestionDisplay = ({ question, onEdit, onDelete }) => (
//   <div>
//     <h3>{question.qustion_name}</h3>
//     <ul>
//       {question.options.map((option, index) => (
//         <li key={index}>{option}</li>
//       ))}
//     </ul>
//     <div className="edit-buttons">
//       <button onClick={onEdit}>Edit</button>
//       <button style={{ backgroundColor: "red" }} onClick={onDelete}>
//         Delete
//       </button>
//     </div>
//   </div>
// );

// const QuestionEditForm = ({ question, onSave, onCancel }) => {
//   const [editedQuestion, setEditedQuestion] = useState(question);

//   const handleOptionChange = (e, index) => {
//     const updatedOptions = [...editedQuestion.options];
//     updatedOptions[index] = e.target.value;
//     setEditedQuestion({ ...editedQuestion, options: updatedOptions });
//   };

//   const handleCorrectAnswerChange = (e) => {
//     const correctAnswer = e.target.value;
//     setEditedQuestion({ ...editedQuestion, correct_answer: correctAnswer });
//   };

//   const handleSave = () => {
//     onSave(editedQuestion);
//   };

//   return (
//     <div>
//       <h3>Edit Question</h3>
//       <input
//         style={{ marginBottom: "1.2rem" }}
//         type="text"
//         value={editedQuestion.qustion_name}
//         onChange={(e) =>
//           setEditedQuestion({
//             ...editedQuestion,
//             question_name: e.target.value,
//           })
//         }
//       />
//       <ul style={{ marginBottom: "1rem" }}>
//         {editedQuestion.options.map((option, index) => (
//           <li key={index}>
//             <input
//               type="text"
//               value={option}
//               onChange={(e) => handleOptionChange(e, index)}
//             />
//           </li>
//         ))}
//       </ul>
//       <label>
//         Correct Answer:
//         <select
//           value={editedQuestion.correct_answer}
//           onChange={handleCorrectAnswerChange}
//         >
//           {editedQuestion.options.map((option, index) => (
//             <option key={index} value={option}>
//               {option}
//             </option>
//           ))}
//         </select>
//       </label>
//       <button className="save" onClick={handleSave}>
//         Save
//       </button>
//       <button className="cancel" onClick={onCancel}>
//         Cancel
//       </button>
//     </div>
//   );
// };

// export default AAA;

import React, { useState, useEffect } from "react";
import "./AAA.css";
import { useParams, useNavigate, Link, useLocation } from "react-router-dom";
import logo from "../logo/WhatsApp Image 2023-07-12 at 9.58.35 AM.png";
import axios from "axios";
const AAA = () => {
  const [questions, setQuestions] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const location = useLocation();
  let user = JSON.parse(localStorage.getItem("user_322"));

  const selectedOption = new URLSearchParams(location.search).get(
    "selectedOption"
  );
  console.log(id, selectedOption, "test bodth");
  useEffect(() => {
    // Fetch data from the API
    fetch("http://13.48.26.232:5000/api/v1/getallquestion")
      .then((response) => response.json())
      .then((data) => {
        console.log("my data", data.data);
        console.log(id);
        // Filter questions based on subject ID
        const filteredQuestions = data.data.filter(
          (question) =>
            question.sub_id === Number(id) &&
            question.question_type === selectedOption
        );
        setQuestions(filteredQuestions);
      })
      .catch((error) => {
        console.error("Error fetching data from API:", error);
      });
  }, [id]);

  const handleLogout = () => {
    localStorage.removeItem("user_322");
    navigate("/");
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleEdit = (index) => {
    setEditIndex(index);
  };

  // const handleDelete = (index) => {
  //   const updatedQuestions = questions.filter((_, i) => i !== index);
  //   setQuestions(updatedQuestions);
  //   setEditIndex(-1);
  // };
  const handleDelete = (index) => {
    // Make the DELETE request to the API
    fetch(`http://13.48.26.232:5000/api/v1/deletequestion/${index}`, {
      method: "PUT", // Change the HTTP method to DELETE
    })
      .then((response) => {
        if (response.ok) {
          // Successfully deleted, update the UI by removing the deleted question
          // Remove the question at the specified index
          const updatedQuestions = questions.filter(
            (i) => i.quesion_Id !== index
          );
          setQuestions(updatedQuestions);
          setEditIndex(-1);
        } else {
          // Handle error here if needed
          console.error("Failed to delete question");
        }
      })
      .catch((error) => {
        console.error("Error deleting question:", error);
      });
  };

  const handleSave = (index, updatedQuestion, ind) => {
    const apiSenddata = {
      qustion_name: updatedQuestion.qustion_name,
      options: updatedQuestion.options,
      correct_answer: updatedQuestion.correct_answer,
    };

    const apiUrl = `http://13.48.26.232:5000/api/v1/updateQuestionDetails/${index}`;
    console.log("index", index);
    axios
      .patch(apiUrl, apiSenddata)
      .then((response) => {
        const updatedQuestions = [...questions];

        updatedQuestions[ind] = updatedQuestion;
        setQuestions(updatedQuestions);
        setEditIndex(-1);
      })
      .catch((error) => {
        console.error(
          "An error occurred while updating question details:",
          error
        );
      });

    console.log(apiSenddata, "data to send");
    // const updatedQuestions = [...questions];

    // updatedQuestions[index] = updatedQuestion;
    // setQuestions(updatedQuestions);
    // setEditIndex(-1);
  };

  return (
    <>
      <div id="container-nav" className={`navbar ${isOpen ? "open" : ""}`}>
        <nav className={`navbar ${isOpen ? "open" : ""}`}>
          <img className="link-item" src={logo} alt="logo" />
          <div className="menu-icon" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className={`nav-links ${isOpen ? "show" : ""}`}>
            <Link to="/admin" className="link-item">
              Admin Dashboard
            </Link>
            <Link to="/choose" className="link-item">
              Add Question
            </Link>

            <Link to="/seeprogress" className="link-item">
              Students Progress
            </Link>
            <Link to="/adminnotifiaction" className="link-item">
              Notification
            </Link>
            <a className="link-item" onClick={handleLogout}>
              Logout
            </a>
          </div>
        </nav>
      </div>
      <div className="question-bank">
        {/* <h1>Question Bank</h1> */}
        {questions.map((question, ind) => (
          <div key={ind} className="question">
            {editIndex === ind ? (
              <QuestionEditForm
                question={question}
                onSave={(updatedQuestion) =>
                  handleSave(question.quesion_Id, updatedQuestion, ind)
                }
                onCancel={() => setEditIndex(-1)}
              />
            ) : (
              <QuestionDisplay
                question={question}
                onEdit={() => handleEdit(ind)}
                onDelete={() => handleDelete(question.quesion_Id)}
              />
            )}
          </div>
        ))}
      </div>
    </>
  );
};

const QuestionDisplay = ({ question, onEdit, onDelete }) => (
  <div>
    <h3>{question.qustion_name}</h3>
    <ul>
      {question.options.map((option, index) => (
        <li key={index}>{option}</li>
      ))}
    </ul>
    <div className="edit-buttons">
      <button onClick={onEdit}>Edit</button>
      <button style={{ backgroundColor: "red" }} onClick={onDelete}>
        Delete
      </button>
    </div>
  </div>
);

const QuestionEditForm = ({ question, onSave, onCancel }) => {
  const [editedQuestion, setEditedQuestion] = useState(question);

  const handleOptionChange = (e, index) => {
    const updatedOptions = [...editedQuestion.options];
    updatedOptions[index] = e.target.value;
    setEditedQuestion({ ...editedQuestion, options: updatedOptions });
  };

  const handleCorrectAnswerChange = (e) => {
    const correctAnswer = e.target.value;
    setEditedQuestion({ ...editedQuestion, correct_answer: correctAnswer });
  };
  console.log(editedQuestion, "test edited");
  const handleSave = () => {
    onSave(editedQuestion);
  };

  return (
    <div>
      <h3>Edit Question</h3>
      <input
        style={{ marginBottom: "1.2rem" }}
        type="text"
        value={editedQuestion.qustion_name}
        onChange={(e) =>
          setEditedQuestion({
            ...editedQuestion,
            qustion_name: e.target.value,
          })
        }
      />
      <ul style={{ marginBottom: "1rem" }}>
        {editedQuestion.options.map((option, index) => (
          <li key={index}>
            <input
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(e, index)}
            />
          </li>
        ))}
      </ul>
      <label>
        Correct Answer:
        <select
          value={editedQuestion.correct_answer}
          onChange={handleCorrectAnswerChange}
        >
          {editedQuestion.options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      </label>
      <button className="save" onClick={handleSave}>
        Save
      </button>
      <button className="cancel" onClick={onCancel}>
        Cancel
      </button>
    </div>
  );
};

export default AAA;
