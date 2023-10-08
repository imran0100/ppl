import React, { useEffect, useState } from "react";
import axios from "axios";
import logo from "../logo/WhatsApp Image 2023-07-12 at 9.58.35 AM.png";

import "./Tttt.css"; // Import the CSS file for styling
import QuestionMenu from "./QuestionMenu";
import CircleProgress from "./CircleProgress";
import { useNavigate, Link, useParams } from "react-router-dom";
// import { useParams } from "react-router-dom";

const TestPage = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [resultData, setResultData] = useState([]);
  const [submitted, setSubmitted] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id, "id check");
  let user = JSON.parse(localStorage.getItem("user_322"));

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    fetchQuestions();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://13.48.26.232:5000/api/vi/getsession_details/${user.userId}`
        );
        let subscriptionData = response.data.data;
        if (subscriptionData) {
          const currentDate = new Date();
          const planStartDate = new Date(subscriptionData.planStartDate);
          const planEndDate = new Date(subscriptionData.planEndDate);

          if (
            subscriptionData.subscription_status === "subscription" &&
            currentDate >= planStartDate &&
            currentDate <= planEndDate
          ) {
            setSubscribed(true);
          }
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (selectedAnswer !== "") {
      handleNextQuestion();
    }
  }, [selectedAnswer]);
  const fetchQuestions = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        "http://13.48.26.232:5000/api/v1/getallquestion"
      );
      const filteredQuestions = response.data.data.filter(
        (ques) =>
          ques.sub_id === Number(id) &&
          user.question_type === ques.question_type
      );
      setQuestions(filteredQuestions);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  console.log("test 11111", questions);
  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
  };

  const handleNextQuestion = () => {
    const currentQuestionObj = questions[currentQuestion];
    const correctAnswer = currentQuestionObj.correct_answer;
    if (selectedAnswer === correctAnswer) {
      setScore(score + 1);
    }

    const questionData = {
      question_Id: currentQuestionObj.quesion_Id,
      question: currentQuestionObj.qustion_name,
      correctAnswer,
      userAnswer: selectedAnswer,
      isCorrect: selectedAnswer === correctAnswer,
    };

    setResultData((prevResultData) => [...prevResultData, questionData]);

    setSelectedAnswer("");
    // const sub = JSON.parse(localStorage.getItem("user_322"));
    !subscribed && navigate("/pricing");

    setCurrentQuestion(currentQuestion + 1);
    if (currentQuestion === questions.length - 1) {
      // If it's the last question, automatically submit the test
      handleSubmit();
    }
  };
  console.log("faishfaisjfskajkfkasf", subscribed);
  const handleSubmit = () => {
    setSubmitted(true);
  };
  if (loading) {
    return <div className="loading">Loading...</div>;
  }
  if (questions.length === 0) {
    return (
      <div className="loading">
        Stay tuned! We'll be adding questions for this subject shortly.
      </div>
    );
  }
  const handleQuestionChange = (questionNumber) => {
    if (questionNumber >= 0 && questionNumber < questions.length) {
      setCurrentQuestion(questionNumber);
    }
  };
  const resultDataApi = {
    userId: user.userId,
    sub_id: Number(id),
    score: (score / questions.length) * 100,
  };

  if (submitted) {
    return (
      <>
        {" "}
        <div id="container-nav" className={`navbar ${isOpen ? "open" : ""}`}>
          <nav className={`navbar ${isOpen ? "open" : ""}`}>
            <img className="link-item" src={logo} alt="logo" />
            <div className="menu-icon" onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
            <div className={`nav-links ${isOpen ? "show" : ""}`}>
              <Link to="/" className="link-item">
                HOME
              </Link>
              <Link to="/faq" className="link-item">
                FAQ
              </Link>
              <Link to="/contact" className="link-item">
                CONTACT US
              </Link>
              {localStorage.getItem("user_322") ? (
                <Link to="/dashboard" className="link-item">
                  {localStorage.getItem("user_322")
                    ? "GO TO DASHBOARD"
                    : "LOGIN"}
                </Link>
              ) : (
                <Link to="/login" className="link-item">
                  {localStorage.getItem("user_322")
                    ? "GO TO DASHBOARD"
                    : "LOGIN"}
                </Link>
              )}
            </div>
          </nav>
        </div>
        <div className="result-container">
          <h1>Test Results</h1>
          <div className="result-heading">
            {" "}
            <p style={{ fontSize: "2rem" }}>
              Score:{" "}
              <span
                style={{ color: "green", fontWeight: "600", fontSize: "2rem" }}
              >
                {score}
              </span>
            </p>
            <p style={{ fontSize: "2rem" }}>Progress</p>
            <div className="cirle-inside">
              <div>
                <CircleProgress
                  percentage={(score / resultData.length) * 100}
                  resultDataApi={resultDataApi}
                />
              </div>
              <p className="circle-percentage">
                {(score / resultData.length) * 100}%
              </p>
            </div>
          </div>
          {resultData.map((questionData, index) => (
            <div className="result-data" key={index}>
              <h4> {questionData.question}</h4>
              <p>
                Correct Answer:{" "}
                <span style={{ color: "green", fontWeight: "600" }}>
                  {questionData.correctAnswer}
                </span>
              </p>
              <p>
                Your Answer:{" "}
                <span
                  style={{
                    fontWeight: "600",
                    color: questionData.isCorrect ? "green" : "red",
                  }}
                >
                  {questionData.userAnswer || "Not attempted"}
                </span>
              </p>
            </div>
          ))}
        </div>
      </>
    );
  }

  const currentQuestionObj = questions[currentQuestion];
  return (
    <>
      {" "}
      <div id="container-nav" className={`navbar ${isOpen ? "open" : ""}`}>
        <nav className={`navbar ${isOpen ? "open" : ""}`}>
          <img className="link-item" src={logo} alt="logo" />
          <div className="menu-icon" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className={`nav-links ${isOpen ? "show" : ""}`}>
            <Link to="/" className="link-item">
              HOME
            </Link>
            <Link to="/faq" className="link-item">
              FAQ
            </Link>
            <Link to="/contact" className="link-item">
              CONTACT US
            </Link>
          </div>
        </nav>
      </div>
      <div className="Test-Container">
        <div className="tabcontent">
          {/* <p>Question {currentQuestion + 1}</p> */}
          <p style={{ marginBottom: "15px" }}>
            {currentQuestionObj.qustion_name}
          </p>
          <ul className="questionOptionList">
            {currentQuestionObj.options.map((answer, index) => (
              <li
                className={`questionOption ${
                  selectedAnswer === answer ? "selected" : ""
                }`}
                key={index}
                onClick={() => handleAnswerSelect(answer)}
                disabled={selectedAnswer !== ""}
              >
                <a className="cursor">{String.fromCharCode(65 + index)}</a>
                <div className="texter">
                  <span> {answer}</span>
                </div>
              </li>
            ))}
          </ul>

          <div>
            <button onClick={handleSubmit} className="next">
              Submit
            </button>
          </div>
        </div>
        <QuestionMenu
          totalQuestions={questions.length}
          currentQuestion={currentQuestion}
          handleQuestionChange={handleQuestionChange}
          resultData={resultData}
        />
      </div>
    </>
  );
};

export default TestPage;
