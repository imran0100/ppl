import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./Admin.css"; // Import the CSS file
import { useNavigate, Link } from "react-router-dom";
import logo from "../logo/WhatsApp Image 2023-07-12 at 9.58.35 AM.png";
import "./AdminNotification.css"; // Make sure to create this CSS file

const AdminNotification = () => {
  const [notification, setNotification] = useState("");
  const [notificationsList, setNotificationsList] = useState([]);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    localStorage.removeItem("user_322");
    navigate("/");
  };
  const handleNotificationChange = (e) => {
    setNotification(e.target.value);
  };

  const handlePostNotification = () => {
    if (notification.trim() !== "") {
      setNotificationsList([...notificationsList, notification]);
      setNotification("");
    }
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
            <Link to="/aaa" className="link-item">
              Edit Question
            </Link>
            <Link to="/seeprogress" className="link-item">
              Students Progress
            </Link>

            <a className="link-item" onClick={handleLogout}>
              Logout
            </a>
          </div>
        </nav>
      </div>
      <div className="notification-form">
        <h2>Post Notification</h2>
        <textarea
          value={notification}
          onChange={handleNotificationChange}
          placeholder="Enter notification here..."
        />
        <button onClick={handlePostNotification}>Post Notification</button>

        <div className="posted-notifications">
          <h3>Posted Notifications</h3>
          <ul>
            {notificationsList.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default AdminNotification;
