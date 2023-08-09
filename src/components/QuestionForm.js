import React, { useState } from "react";
import "./QuestionForm.css"; // Import the CSS file
import axios from "axios";
import { useParams } from "react-router-dom";
const QuestionForm = () => {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [correctAnswer, setCorrectAnswer] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const { id } = useParams();
  const handleOptionChange = (index, value) => {
    const updatedOptions = [...options];
    updatedOptions[index] = value;
    setOptions(updatedOptions);
  };

  const validateForm = () => {
    let isValid = true;
    const errors = {};

    if (!question) {
      isValid = false;
      errors.question = "Question is required";
    }

    if (!options.every((option) => option.trim())) {
      isValid = false;
      errors.options = "All options are required";
    }

    if (!correctAnswer) {
      isValid = false;
      errors.correctAnswer = "Correct answer is required";
    }

    setErrors(errors);
    return isValid;
  };
  console.log(id);
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const data = {
        sub_id: id,
        qustion_name: question,
        options,
        correct_answer: correctAnswer,
      };
      //http://13.127.37.70:5000/api/v1/createquestion//s
      // Make an API call to send data to the backend
      const apiUrl = "http://13.127.37.70:5000/api/v1/createquestion";

      // Make the API call using Axios

      axios
        .post(apiUrl, data)
        .then((response) => {
          console.log("Data sent successfully:", response.data);
          setSuccessMessage("Question added successfully!");
          // Show the success message for 3 seconds (3000 milliseconds)
          setShowSuccessMessage(true);
          setTimeout(() => {
            setShowSuccessMessage(false);
          }, 2000);

          // Clear form fields after successful submission
          setQuestion("");
          setOptions(["", "", "", ""]);
          setCorrectAnswer("");
          setErrors({});
        })
        .catch((error) => {
          console.error("Error sending data:", error);
          // Handle the error if the API call fails
        });
      console.log("Data:", data);
    }
  };

  return (
    <div className="question-form-container">
      <form className="question-form" onSubmit={handleSubmit}>
        {showSuccessMessage && <div className="success">{successMessage}</div>}
        <div className="form-group">
          <label>Question:</label>
          <textarea
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            rows="3"
          />
          {errors.question && <span className="error">{errors.question}</span>}
        </div>
        <div className="form-group">
          <label>Options:</label>
          {options.map((option, index) => (
            <input
              type="text"
              value={option}
              onChange={(e) => handleOptionChange(index, e.target.value)}
              key={index}
            />
          ))}
          {errors.options && <span className="error">{errors.options}</span>}
        </div>
        <div className="form-group">
          <label>Correct Answer:</label>
          <select
            value={correctAnswer}
            onChange={(e) => setCorrectAnswer(e.target.value)}
          >
            <option value="">Select an option</option>
            {options.map((option, index) => (
              <option value={option} key={index}>
                {option}
              </option>
            ))}
          </select>
          {errors.correctAnswer && (
            <span className="error">{errors.correctAnswer}</span>
          )}
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default QuestionForm;
