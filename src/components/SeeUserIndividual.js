import React, { useState, useEffect } from "react";
import CircleProgress from "./CircleProgress";
import "./UserProgress.css"; // Import the CSS file

import { useNavigate, Link, useParams } from "react-router-dom";
import logo from "../logo/WhatsApp Image 2023-07-12 at 9.58.35 AM.png";
function SeeUserIndividual() {
  const [isOpen, setIsOpen] = useState(false);
  const [Progress, setProgress] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    // Fetch data from your API here
    // Replace this with your actual API endpoint
    fetch("http://13.48.26.232:5000/api/v1/getall_total_result")
      .then((response) => response.json())
      .then((data) => {
        console.log(data, "DATA");
        const filterData = data.data.filter((dat) => dat.userId === Number(id));
        setProgress(filterData);
        console.log(filterData, "FILTERED");
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  // ... your existing code ...
  const data = {
    studentName: "John Doe",
    rollNumber: "12345",
    subjects: [
      {
        id: 1,
        name: "Air Law",
        percentage: 85.5,
      },
      {
        id: 2,
        name: "Principles of Flight",
        percentage: 78.2,
      },
      {
        id: 3,
        name: "Operational procedures",
        percentage: 92.0,
      },
      {
        id: 4,
        name: "Meteorology",
        percentage: 70.8,
      },
      {
        id: 5,
        name: "Communications",
        percentage: 88.5,
      },
      {
        id: 6,
        name: "Flight planning and performance",
        percentage: 94.3,
      },
      {
        id: 7,
        name: "Navigation",
        percentage: 81.7,
      },
      {
        id: 8,
        name: "Human performance and limitations",
        percentage: 76.9,
      },
      {
        id: 9,
        name: "Aircraft general knowledge",
        percentage: 79.5,
      },
    ],
  };
  const highestScoresWithSubjectName = Progress.map((item) => {
    const subject = data.subjects.find((subject) => subject.id === item.sub_id);
    return {
      sub_id: item.sub_id,
      name: subject ? subject.name : "Unknown Subject",
      score: item.score,
    };
  });

  console.log(highestScoresWithSubjectName);
  const highestScores = {};

  highestScoresWithSubjectName.forEach((item) => {
    const subId = item.sub_id;
    const score = parseInt(item.score);

    if (!highestScores[subId] || score > highestScores[subId].score) {
      highestScores[subId] = { sub_id: subId, name: item.name, score: score };
    }
  });

  const highestScoresArray = Object.values(highestScores);

  console.log(highestScoresArray);
  // const navigate = useNavigate();

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
            <Link to="/admin" className="link-item">
              Admin Dashboard
            </Link>
            <Link to="/choose" className="link-item">
              Add Question
            </Link>
            <Link to="/chooseEdit" className="link-item">
              Edit Question
            </Link>

            <Link to="/adminnotifiaction" className="link-item">
              Notification
            </Link>
          </div>
        </nav>
      </div>
      <div className="result-contain">
        <div className="heading-final">
          <p>Subjects</p>
          <p>Progress</p>
        </div>
        {highestScoresArray.map((book, index) => (
          <div className="result-final" key={index}>
            <div style={{ fontSize: "1.5rem", paddingLeft: "2rem" }}>
              {book.name}
            </div>

            <div className="cirle-ins">
              <div>
                <CircleProgress percentage={book.score} />
              </div>
              <p className="circle-per">{book.score}%</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SeeUserIndividual;
