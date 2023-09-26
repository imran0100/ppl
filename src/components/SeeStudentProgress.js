import React, { useState, useEffect } from "react";
import CircleProgress from "./CircleProgress";
import "./UserProgress.css"; // Import the CSS file

import { useNavigate, Link } from "react-router-dom";
import logo from "../logo/WhatsApp Image 2023-07-12 at 9.58.35 AM.png";
function SeeStudentProgress() {
  const [isOpen, setIsOpen] = useState(false);
  const [users, setUsers] = useState([]);
  const [totalResult, setTotalResult] = useState([]);

  useEffect(() => {
    // Fetch the first API
    fetch("http://13.48.26.232:5000/api/v1/allusers")
      .then((response) => response.json())
      .then((data) => {
        // Update the users state with the fetched data
        setUsers(data.data);
      })
      .catch((error) => {
        console.error("Error fetching users data:", error);
      });

    // Fetch the second API
    fetch("http://13.48.26.232:5000/api/v1/getall_total_result")
      .then((response) => response.json())
      .then((data) => {
        // Update the totalResult state with the fetched data
        setTotalResult(data.data);
      })
      .catch((error) => {
        console.error("Error fetching total result data:", error);
      });
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  console.log(totalResult[2].score, "daaaaaaaaaaaaaaaaaaa");
  const handleLogout = () => {
    localStorage.removeItem("user_322");
    navigate("/");
  };
  // ... your existing code ...
  const studentData = [
    { name: "Alice", percentage: 85.5 },
    { name: "Bob", percentage: 72.8 },
    { name: "Charlie", percentage: 91.2 },
    { name: "David", percentage: 78.3 },
    { name: "Emily", percentage: 95.7 },
    { name: "Frank", percentage: 63.9 },
    { name: "Grace", percentage: 88.1 },
    { name: "Hannah", percentage: 79.4 },
    { name: "Isaac", percentage: 92.6 },
    { name: "Jessica", percentage: 70.2 },
  ];
  const navigate = useNavigate();
  console.log(users, totalResult);
  return (
    <>
      {" "}
      {/* <div id="container-nav" className={`navbar ${isOpen ? "open" : ""}`}>
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
            <Link to="/dashboard" className="link-item">
              GO TO DASHBOARD
            </Link>
          </div>
        </nav>
      </div> */}
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
            <a className="link-item" onClick={handleLogout}>
              Logout
            </a>
          </div>
        </nav>
      </div>
      <div className="result-contain">
        <div className="heading-final">
          <p>User</p>
          <p>Overall Progress</p>
        </div>
        {users.map((book, index) => (
          <div className="result-final" key={index}>
            <div style={{ fontSize: "1.5rem", paddingLeft: "2rem" }}>
              {book.first_name}
            </div>

            <div className="cirle-ins">
              <div>
                <CircleProgress
                  // percentage={Number(
                  //   book.final_results[0] ? book.final_results[0].score : 0
                  // )}
                  percentage={2}
                />
              </div>
              <p className="circle-per">
                {/* {book.final_results[0] ? book.final_results[0].score : 0}% */}
                2
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SeeStudentProgress;
