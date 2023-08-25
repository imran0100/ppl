import React, { useState } from "react";
import "./AAA.css";
import { useNavigate, Link } from "react-router-dom";
import logo from "../logo/WhatsApp Image 2023-07-12 at 9.58.35 AM.png";
const AAA = () => {
  const initialQuestionBank = [
    {
      question_name: "What is the capital of France?",
      options: ["London", "Paris", "Berlin", "Madrid"],
      correct_answer: "Paris",
    },
    {
      question_name: 'Which planet is known as the "Red Planet"?',
      options: ["Mars", "Venus", "Jupiter", "Saturn"],
      correct_answer: "Mars",
    },
    {
      question_name: 'Who wrote the play "Romeo and Juliet"?',
      options: [
        "William Shakespeare",
        "Jane Austen",
        "Charles Dickens",
        "Mark Twain",
      ],
      correct_answer: "William Shakespeare",
    },
    {
      question_name: "What is the chemical symbol for water?",
      options: ["H2O", "CO2", "O2", "NaCl"],
      correct_answer: "H2O",
    },
    {
      question_name: "Which country is famous for the Taj Mahal?",
      options: ["India", "China", "Egypt", "Italy"],
      correct_answer: "India",
    },
    // Add more questions as needed...
  ];

  const [questions, setQuestions] = useState(initialQuestionBank);
  const [editIndex, setEditIndex] = useState(-1);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    localStorage.removeItem("user_322");
    navigate("/");
  };
  const handleEdit = (index) => {
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedQuestions = questions.filter((_, i) => i !== index);
    setQuestions(updatedQuestions);
    setEditIndex(-1);
  };

  const handleSave = (index, updatedQuestion) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = updatedQuestion;
    setQuestions(updatedQuestions);
    setEditIndex(-1);
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
        {questions.map((question, index) => (
          <div key={index} className="question">
            {editIndex === index ? (
              <QuestionEditForm
                question={question}
                onSave={(updatedQuestion) => handleSave(index, updatedQuestion)}
                onCancel={() => setEditIndex(-1)}
              />
            ) : (
              <QuestionDisplay
                question={question}
                onEdit={() => handleEdit(index)}
                onDelete={() => handleDelete(index)}
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
    <h3>{question.question_name}</h3>
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

  const handleSave = () => {
    onSave(editedQuestion);
  };

  return (
    <div>
      <h3>Edit Question</h3>
      <input
        style={{ marginBottom: "1.2rem" }}
        type="text"
        value={editedQuestion.question_name}
        onChange={(e) =>
          setEditedQuestion({
            ...editedQuestion,
            question_name: e.target.value,
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
