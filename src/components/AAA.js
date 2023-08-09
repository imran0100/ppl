import React, { useState } from "react";
import "./AAA.css";
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
    <div className="question-bank">
      <h1>Question Bank</h1>
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
