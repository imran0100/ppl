// // import React, { useState } from "react";
// // import LoginPage from "./LoginPage";
// // import SignUpPage from "./SignUpPage";
// // import logo from "../logo/WhatsApp Image 2023-07-12 at 9.58.35 AM.jpeg";
// // import "animate.css/animate.min.css";
// // import BookTable from "./BookTable";
// // import AboutDatabasePage from "./AboutDatabasePage";
// // import PricingPage from "./PricingPage";
// // import Section2 from "./Section2";
// // import Section3 from "./Section3";
// // function HomePage() {
// //   const [showLoginPage, setShowLoginPage] = useState(false);
// //   const [showSignUpPage, setShowSignUpPage] = useState(false);

// //   const handleShowSignUp = () => {
// //     setShowSignUpPage(!showSignUpPage);
// //     setShowLoginPage(false);
// //   };

// //   const handleShowLogin = () => {
// //     setShowLoginPage(!showLoginPage);
// //     setShowSignUpPage(false);
// //   };

// //   return (
// //     <div className="container animate__animated animate__fadeIn">
// //       <div id="container-nav">
// //         <nav>
// //           <img className="link-item" src={logo} alt="logo" />

// //           <div>
// //             <a className="link-item" href="#" alt="login">
// //               Login
// //             </a>
// //             <a className="link-item" href="#">
// //               Signup
// //             </a>
// //           </div>
// //         </nav>
// //       </div>
// //       <section className="section">
// //         {showLoginPage && <LoginPage />}
// //         {showSignUpPage && <SignUpPage />}
// //         <div className="side">
// //           <h1>Latest Version Of EASA 2016 And 2021 Question Bank</h1>
// //           <p>
// //             Our database contains high percentage of REAL EXAM QUESTIONS.
// //             Students mark questions after their examination, then we eliminate
// //             questions according to feedback.
// //           </p>
// //           <div className="div-button">
// //             <button onClick={handleShowLogin}>Login</button>
// //             <button onClick={handleShowSignUp}>Signup</button>
// //           </div>
// //         </div>
// //         <div className="side-content"></div>
// //       </section>
// //       <BookTable />
// //       <AboutDatabasePage />
// //       <PricingPage />
// //       <Section2 />
// //       <Section3 />
// //     </div>
// //   );
// // }

// // export default HomePage;

// import logo from "../logo/WhatsApp Image 2023-07-12 at 9.58.35 AM.png";
// import "animate.css/animate.min.css";
// import BookTable from "./BookTable";
// import AboutDatabasePage from "./AboutDatabasePage";
// import PricingPage from "./PricingPage";
// import Section2 from "./Section2";
// import Section3 from "./Section3";
// import { useNavigate, Link } from "react-router-dom";
// import Footer from "./Footer";

// import TestPage from "./TestPage";
// import ChooseSubject from "./ChooseSubject";
// import Faq from "./Faq";
// import Contact from "./Contact";
// import Dashboard from "./Dashboard";
// import PricingTable2 from "./PricingTable2";
// import PricingTable from "./PricingTable";
// import Video from "./Video";
// import AAA from "./AAA";
// import UserProgress from "./UserProgress";
// function HomePage() {
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     localStorage.getItem("user_322")
//       ? navigate("/dashboard")
//       : navigate("/login");
//   };
//   const handleSignup = () => {
//     navigate("/signup");
//   };

//   return (
//     <div className="container animate__animated animate__fadeIn">
//       <div id="container-nav">
//         <nav>
//           <img
//             onClick={() => navigate("/")}
//             className="link-item"
//             src={logo}
//             alt="logo"
//           />

//           <div style={{ display: "flex", gap: "1rem" }}>
//             <Link to="/faq" className="link-item">
//               FAQ
//             </Link>
//             <Link to="/contact" className="link-item">
//               CONTACT US
//             </Link>

//             {localStorage.getItem("user_322") ? (
//               <Link to="/dashboard" className="link-item">
//                 {localStorage.getItem("user_322") ? "GO TO DASHBOARD" : "LOGIN"}
//               </Link>
//             ) : (
//               <Link to="/login" className="link-item">
//                 {localStorage.getItem("user_322") ? "GO TO DASHBOARD" : "LOGIN"}
//               </Link>
//             )}
//             {!localStorage.getItem("user_322") && (
//               <Link to="/signup" className="link-item">
//                 REGISTER
//               </Link>
//             )}
//           </div>
//         </nav>
//       </div>
//       <section className="section">
//         <div className="side">
//           <h1>Latest Version Of EASA 2016 And 2021 Question Bank</h1>
//           <p>
//             Our database contains high percentage of REAL EXAM QUESTIONS.
//             Students mark questions after their examination, then we eliminate
//             questions according to feedback.
//           </p>
//           <div className="div-button">
//             <button onClick={handleLogin}>
//               {localStorage.getItem("user_322") ? "Go to Dashboard" : "Login"}
//             </button>
//             {!localStorage.getItem("user_322") && (
//               <button onClick={handleSignup}>Register</button>
//             )}
//           </div>
//         </div>
//         <div className="side-content"></div>
//       </section>
//       <BookTable />
//       <AboutDatabasePage />
//       {/* <PricingPage /> */}
//       <Video />
//       <Section2 />
//       <Section3 />
//       {/* <ChooseSubject /> */}
//       <TestPage />
//       {/* <Dashboard /> */}
//       {/* <PricingTable /> */}
//       {/* <PricingTable2 /> */}

//       {/* <UserProgress /> */}
//       {/* <AAA /> */}
//       <Footer />
//     </div>
//   );
// }

// export default HomePage;
// import React, { useState } from "react";
// import LoginPage from "./LoginPage";
// import SignUpPage from "./SignUpPage";
// import logo from "../logo/WhatsApp Image 2023-07-12 at 9.58.35 AM.jpeg";
// import "animate.css/animate.min.css";
// import BookTable from "./BookTable";
// import AboutDatabasePage from "./AboutDatabasePage";
// import PricingPage from "./PricingPage";
// import Section2 from "./Section2";
// import Section3 from "./Section3";
// function HomePage() {
//   const [showLoginPage, setShowLoginPage] = useState(false);
//   const [showSignUpPage, setShowSignUpPage] = useState(false);

//   const handleShowSignUp = () => {
//     setShowSignUpPage(!showSignUpPage);
//     setShowLoginPage(false);
//   };

//   const handleShowLogin = () => {
//     setShowLoginPage(!showLoginPage);
//     setShowSignUpPage(false);
//   };

//   return (
//     <div className="container animate__animated animate__fadeIn">
//       <div id="container-nav">
//         <nav>
//           <img className="link-item" src={logo} alt="logo" />

//           <div>
//             <a className="link-item" href="#" alt="login">
//               Login
//             </a>
//             <a className="link-item" href="#">
//               Signup
//             </a>
//           </div>
//         </nav>
//       </div>
//       <section className="section">
//         {showLoginPage && <LoginPage />}
//         {showSignUpPage && <SignUpPage />}
//         <div className="side">
//           <h1>Latest Version Of EASA 2016 And 2021 Question Bank</h1>
//           <p>
//             Our database contains high percentage of REAL EXAM QUESTIONS.
//             Students mark questions after their examination, then we eliminate
//             questions according to feedback.
//           </p>
//           <div className="div-button">
//             <button onClick={handleShowLogin}>Login</button>
//             <button onClick={handleShowSignUp}>Signup</button>
//           </div>
//         </div>
//         <div className="side-content"></div>
//       </section>
//       <BookTable />
//       <AboutDatabasePage />
//       <PricingPage />
//       <Section2 />
//       <Section3 />
//     </div>
//   );
// }

// export default HomePage;

import logo from "../logo/WhatsApp Image 2023-07-12 at 9.58.35 AM.png";
import "animate.css/animate.min.css";
import BookTable from "./BookTable";
import AboutDatabasePage from "./AboutDatabasePage";
import PricingPage from "./PricingPage";
import Section2 from "./Section2";
import Section3 from "./Section3";
import { useNavigate, Link } from "react-router-dom";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import TestPage from "./TestPage";
import ChooseSubject from "./ChooseSubject";
import Faq from "./Faq";
import Contact from "./Contact";
import Dashboard from "./Dashboard";
import PricingTable2 from "./PricingTable2";
import PricingTable from "./PricingTable";
import Video from "./Video";
import AAA from "./AAA";
import ScrollAnimation from "./ScrollAnimation";

function HomePage() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    setShouldAnimate(true);
  }, []);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const handleLogin = () => {
    localStorage.getItem("user_322")
      ? navigate("/dashboard")
      : navigate("/login");
  };
  const handleSignup = () => {
    navigate("/signup");
  };
  return (
    <div className="container animate__animated animate__fadeIn">
      <div id="container-nav" className={`navbar ${isOpen ? "open" : ""}`}>
        <nav className={`navbar ${isOpen ? "open" : ""}`}>
          <img
            onClick={() => navigate("/")}
            className="link-item"
            src={logo}
            alt="logo"
          />
          <div className="menu-icon" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className={`nav-links ${isOpen ? "show" : ""}`}>
            <Link to="/faq" className="link-item">
              FAQ
            </Link>
            <Link to="/contact" className="link-item">
              CONTACT US
            </Link>

            {localStorage.getItem("user_322") ? (
              <Link to="/dashboard" className="link-item">
                {localStorage.getItem("user_322") ? "GO TO DASHBOARD" : "LOGIN"}
              </Link>
            ) : (
              <Link to="/login" className="link-item">
                {localStorage.getItem("user_322") ? "GO TO DASHBOARD" : "LOGIN"}
              </Link>
            )}
            {!localStorage.getItem("user_322") && (
              <Link to="/signup" className="link-item">
                REGISTER
              </Link>
            )}
          </div>
        </nav>
      </div>
      <section className="section">
        <div className={`side ${shouldAnimate ? "active" : ""}`}>
          <h1>Latest Version Of EASA 2016 And 2021 Question Bank</h1>
          <p>
            Our database contains high percentage of REAL EXAM QUESTIONS.
            Students mark questions after their examination, then we eliminate
            questions according to feedback.
          </p>
          <div className="div-button">
            <button onClick={handleLogin}>
              {localStorage.getItem("user_322") ? "Go to Dashboard" : "Login"}
            </button>
            {!localStorage.getItem("user_322") && (
              <button onClick={handleSignup}>Register</button>
            )}
          </div>
        </div>
        <div className="side-content"></div>
      </section>
      <BookTable />
      <AboutDatabasePage />
      {/* <PricingPage /> */}
      <Video />
      <Section2 />
      {/* <ScrollAnimation /> */}
      <Section3 />
      {/* <ChooseSubject /> */}
      {/* <TestPage /> */}
      {/* <Dashboard /> */}
      {/* <PricingTable /> */}
      {/* <PricingTable2 /> */}

      {/* <UserProgress /> */}
      {/* <AAA /> */}
      <Footer />
    </div>
  );
}

export default HomePage;
