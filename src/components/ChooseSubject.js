import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import logo from "../logo/WhatsApp Image 2023-07-12 at 9.58.35 AM.png";
function ChooseSubject() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://13.48.26.232:5000/api/v1/get_allsubjectlist"
        );

        setSubjects(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    localStorage.removeItem("user_322");
    navigate("/");
  };
  // const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/question/${id}`);
  };

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
            <Link to="/chooseEdit" className="link-item">
              Edit Question
            </Link>
            <Link to="/seeprogress" className="link-item">
              Students Progress
            </Link>
            <Link to="/adminnotifiaction" className="link-item">
              Notification
            </Link>
            {/* <a className="link-item" onClick={handleLogout}>
        Logout
      </a> */}
          </div>
        </nav>
      </div>
      <div className="book-table1">
        <table>
          <thead>
            <tr>
              <th> Select a Subject for add question</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((book, index) => (
              <tr key={book.sub_id} onClick={() => handleClick(book.sub_id)}>
                <td>{book.sub_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default ChooseSubject;
