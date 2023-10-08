import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import axios from "axios";

// import { useNavigate } from "react-router-dom";
import { useNavigate, Link } from "react-router-dom";
import logo from "../logo/WhatsApp Image 2023-07-12 at 9.58.35 AM.png";
function ChooseSubjectEdit() {
  const [subjects, setSubjects] = useState([]);
  const [selectedOption, setSelectedOption] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://server.theultimateppl.com/api/v1/get_allsubjectlist"
        );

        setSubjects(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    localStorage.removeItem("user_322");
    navigate("/");
  };
  const navigate = useNavigate();
  const handleClick = (id) => {
    if (selectedOption) {
      navigate(`/aaa/${id}?selectedOption=${selectedOption}`);
    } else {
      setError(true); // Set error state to true if selectedOption is empty
    }
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
            <Link to="/choose" className="link-item">
              Add Question
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
        <div style={{ textAlign: "center" }}>
          <select
            value={selectedOption}
            onChange={(e) => {
              setSelectedOption(e.target.value);
              setError(false); // Clear error when user selects an option
            }}
          >
            <option value="">Choose syllabus to Edit Question</option>
            <option value="UK">UK</option>
            <option value="European Union">European Union</option>
          </select>
        </div>
        <div style={{ textAlign: "center", color: "red" }}>
          {error && <p>Please select an option before proceeding.</p>}
        </div>
        <table>
          <thead>
            <tr>
              <th>Select a Subject for edit and delete questions</th>
            </tr>
          </thead>
          <tbody>
            {subjects.map((book) => (
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

export default ChooseSubjectEdit;
