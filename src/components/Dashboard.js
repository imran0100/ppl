// // import React from "react";

// // function Dashboard() {
// //   return (
// //     <div>
// //       Choose Subject

// //     </div>
// //   );
// // }

// // export default Dashboard;
// // import React, { useState } from "react";
// import "./Dashboard.css";

// const Dashboard = () => {
//   const [username, setUsername] = useState("");
//   const [isLoggedOut, setIsLoggedOut] = useState(false);

//   const handleUsernameClick = () => {
//     setIsLoggedOut(true);
//   };

//   const handleLogout = () => {
//     setUsername("");
//     setIsLoggedOut(false);
//   };

//   const handleBookSelection = (book) => {
//     // Handle book selection logic here
//     console.log("Selected book:", book);
//   };

//   return (
//     <div className="dashboard-container">
//       <div className="sidebar">
//         <div className="username" onClick={handleUsernameClick}>
//           {isLoggedOut ? "Logged Out" : username || "Guest"}
//         </div>
//         {username && !isLoggedOut && (
//           <button className="logout-btn" onClick={handleLogout}>
//             Logout
//           </button>
//         )}
//       </div>
//       <div className="main-content">
//         <h2>Dashboard</h2>
//         <div className="book-options">

//         </div>
//       </div>
//     </div>
//   );
// };

// import "./Dashboard.css";
// const data = [
//   {
//     id: 1,
//     subject: "Air Law",
//   },
//   {
//     id: 2,
//     subject: "Principles of Flight",
//   },
//   {
//     id: 3,
//     subject: "Operational procedures",
//   },
//   {
//     id: 4,
//     subject: "Meteorology",
//   },
//   {
//     id: 5,
//     subject: "Flight planning and performance",
// //   },
// //   {
// //     id: 6,
// //     subject: "Navigation",
// //   },
// //   {
// //     id: 7,
// //     subject: "Human performance and limitations",
// //   },
// //   {
// //     id: 8,
// //     subject: "Human performance and limitations",
// //   },
// //   {
// //     id: 9,
// //     subject: "Aircraft general knowledge",
// //   },
// // ];

// const Dashboard = () => {
//   return (
//     <div className="dashboard-container">
//       <div className="dashboard-section">
//         <h2>Dashboard</h2>

//         <div className="dashboard-section">
//           <h3>User</h3>
//         </div>
//       </div>

//       <hr className="dashboard-divider" />
//       <h3>Select a Subject:</h3>
//       <div className="dashboard-section">
//         <div className="subject-options">
//           {data.map((item) => {
//             return <div>{item.subject}</div>;
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

// export default Dashboard;

import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import logo from "../logo/WhatsApp Image 2023-07-12 at 9.58.35 AM.png";
import { FaUserAlt } from "react-icons/fa";
const Dashboard = () => {
  // const subje = [
  //   {
  //     id: 1,
  //     sub_name: "Air Law",
  //   },
  //   {
  //     id: 2,
  //     sub_name: "Principles of Flight",
  //   },
  //   {
  //     id: 3,
  //     sub_name: "Operational procedures",
  //   },
  //   {
  //     id: 4,
  //     sub_name: "Meteorology",
  //   },
  //   {
  //     id: 5,
  //     sub_name: "Communications",
  //   },
  //   {
  //     id: 6,
  //     sub_name: "Flight planning and performance",
  //   },
  //   {
  //     id: 7,
  //     sub_name: "Navigation",
  //   },
  //   {
  //     id: 8,
  //     sub_name: "Human performance and limitations",
  //   },
  //   {
  //     id: 9,
  //     sub_name: "Aircraft general knowledge",
  //   },
  // ];

  const [subjects, setSubjects] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
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

  const handleProgress = () => {
    navigate("/progress");
  };
  const handleLogout = () => {
    localStorage.removeItem("user_322");
    navigate("/");
  };
  const handleTest = (id) => {
    navigate(`/test/${id}`);
  };
  let user = JSON.parse(localStorage.getItem("user_322"));
  // console.log(user.first_name);
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
      <div className="dashboard-container">
        <div className="dashboard-section">
          <h2>Dashboard</h2>

          <div className="dashboard-section1">
            <div className="dashboard-user">
              <FaUserAlt size={25} />
            </div>
            <h3>{user.first_name}</h3>
            {/* <h3>Imran</h3> */}

            <div className="dashboard-item">
              <button onClick={handleLogout} className="logout-btn">
                Logout
              </button>
              <button onClick={handleProgress} className="see-progress-btn">
                See Your Progress
              </button>
              <button
                onClick={() => navigate("/notification")}
                className="see-progress-btn notify"
              >
                Notifications
              </button>
            </div>
          </div>
        </div>

        <hr className="dashboard-divider" />

        <div className="dashboard-section">
          <div
            style={{
              width: "100%",
            }}
          >
            {" "}
            <div className="subject-heading"> Select a Subject</div>
            {subjects.map((book, index) => (
              <div onClick={() => handleTest(book.sub_id)} key={book.id}>
                <div className="sub-style">{book.sub_name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
//////////////////////////////////////////////////////////////////////////////////////////////
