// import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// import "./Admin.css"; // Import the CSS file
// import { useNavigate, Link } from "react-router-dom";
// import logo from "../logo/WhatsApp Image 2023-07-12 at 9.58.35 AM.png";
// function Admin() {
//   const navigate = useNavigate();
//   const [isOpen, setIsOpen] = useState(false);
//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };
//   const handleLogout = () => {
//     localStorage.removeItem("user_322");
//     navigate("/");
//   };
//   const handleAddQuestion = () => {
//     navigate("/choose");
//   };
//   const handleEdit = () => {
//     navigate("/aaa");
//   };

//   const handleProgress = () => {
//     navigate("/seeprogress");
//   };
//   const handleNotification = () => {
//     navigate("/adminnotifiaction");
//   };
//   return (
//     <>
//       {" "}
//       <div id="container-nav" className={`navbar ${isOpen ? "open" : ""}`}>
//         <nav className={`navbar ${isOpen ? "open" : ""}`}>
//           <img className="link-item" src={logo} alt="logo" />
//           <div className="menu-icon" onClick={toggleMenu}>
//             <div className="bar"></div>
//             <div className="bar"></div>
//             <div className="bar"></div>
//           </div>
//           <div className={`nav-links ${isOpen ? "show" : ""}`}>
//             <Link to="/choose" className="link-item">
//               Add Question
//             </Link>
//             <Link to="/aaa" className="link-item">
//               Edit Question
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
//       </div>{" "}
//       <div className="admin-container">
//         <div className="admin-item item1" onClick={handleAddQuestion}>
//           Add Question
//         </div>
//         <div className="admin-item item2" onClick={handleEdit}>
//           Edit Question
//         </div>
//         <div className="admin-item item3" onClick={handleProgress}>
//           View Students Progress
//         </div>
//         <div className="admin-item item4" onClick={handleNotification}>
//           Notification
//         </div>

//         <div className="admin-item item5" onClick={handleLogout}>
//           Logout
//         </div>
//       </div>
//     </>
//   );
// }

// export default Admin;
import React, { useState } from "react";
import { FaUserAlt, FaFileMedical, FaRegEdit, FaBell } from "react-icons/fa";
import { FaBarsProgress } from "react-icons/fa6";
// import { useNavigate } from "react-router-dom";
import "./Admin.css"; // Import the CSS file
import { useNavigate, Link } from "react-router-dom";
import logo from "../logo/WhatsApp Image 2023-07-12 at 9.58.35 AM.png";
function Admin() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLogout = () => {
    localStorage.removeItem("user_322");
    navigate("/");
  };
  const handleAddQuestion = () => {
    navigate("/choose");
  };
  const handleEdit = () => {
    navigate("/aaa");
  };

  const handleProgress = () => {
    navigate("/seeprogress");
  };
  const handleNotification = () => {
    navigate("/adminnotifiaction");
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
            <Link to="/choose" className="link-item">
              Add Question
            </Link>
            <Link to="/aaa" className="link-item">
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
      </div>{" "}
      <div className="admin-container">
        <div style={{ padding: "0 1rem", marginTop: "1rem" }}>
          {" "}
          <div className="dashboard-section">
            <h2>Admin Dashboard</h2>

            <div className="dashboard-section1">
              <div className="dashboard-user">
                <FaUserAlt size={25} />
              </div>
              {/* <h3>{user.first_name}</h3> */}
              <h3>Admin</h3>

              <div className="dashboard-item">
                <button onClick={handleLogout} className="logout-btn">
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>

        <hr className="dashboard-divider" />
        <div className="dashboard-grid">
          <div className="admin-item item1" onClick={handleAddQuestion}>
            {/* <div className="diamond1"></div> */}
            <div style={{ color: "#076c07" }}>
              <FaFileMedical size={70} />
            </div>
            <p>Add Question</p>
          </div>
          <div className="admin-item item2" onClick={handleEdit}>
            {/* <div className="diamond2"></div> */}
            <div style={{ color: "rgb(24 23 196)" }}>
              <FaRegEdit size={70} />
            </div>
            <p>Edit Question</p>
          </div>
          <div className="admin-item item3" onClick={handleProgress}>
            {/* <div className="diamond3"></div> */}

            <div style={{ color: " #ff9200" }}>
              <FaBarsProgress size={70} />
            </div>
            <p> View Students Progress</p>
          </div>
          <div className="admin-item item4" onClick={handleNotification}>
            {/* <div className="diamond4"></div> */}

            <div style={{ color: "  #8c0909" }}>
              <FaBell size={70} />
            </div>
            <p> Notification</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Admin;
