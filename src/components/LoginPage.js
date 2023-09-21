// // import React, { useState } from "react";
// // import "./Login.css"; // Import the CSS file
// // import { Link } from "react-router-dom";
// // import { useNavigate } from "react-router-dom";
// // import axios from "axios";
// // const LoginPage = () => {
// //   const [email, setEmail] = useState("");
// //   const [password, setPassword] = useState("");
// //   const [errors, setErrors] = useState({});
// //   const navigate = useNavigate();

// //   const handleLogin = () => {
// //     let admin = false;
// //     if (admin) {
// //       navigate("/admin");
// //     } else {
// //       navigate("/dashboard");
// //     }
// //   };
// //   const validateForm = () => {
// //     let isValid = true;
// //     const errors = {};

// //     // Email validation
// //     if (!email) {
// //       isValid = false;
// //       errors.email = "Email is required";
// //     } else if (!/\S+@\S+\.\S+/.test(email)) {
// //       isValid = false;
// //       errors.email = "Email is invalid";
// //     }

// //     // Password validation
// //     if (!password) {
// //       isValid = false;
// //       errors.password = "Password is required";
// //     }

// //     setErrors(errors);
// //     return isValid;
// //   };
// //   ////////////////////////////////////////////////////////////////////////

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     if (validateForm()) {
// //       //I3ran3@gmail.com //8820768204
// //       // Form is valid, proceed with login logic
// //       const userData = {
// //         email,
// //         password,
// //       };

// //       axios
// //         .post("http://13.127.37.70:5000/api/v1/signin", userData)
// //         .then((response) => {
// //           // Handle the successful response from the API
// //           console.log("Login successful!");
// //           console.log(response.data); // You may log the response or perform other actions as needed
// //           localStorage.setItem("user_322", JSON.stringify(response.data.data));
// //         })
// //         .catch((error) => {
// //           // Handle errors that occur during the API call
// //           console.error("Error during login:", error.massage);
// //         });
// //       // For example, make an API call to authenticate the user

// //       handleLogin();
// //       console.log("Login successful!");
// //     }
// //   };

// //   return (
// //     <div className="login-container">
// //       <form className="login-form" onSubmit={handleSubmit}>
// //         <div className="form-group">
// //           <label>Email:</label>
// //           <input
// //             type="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //           />
// //           {errors.email && <span className="error">{errors.email}</span>}
// //         </div>
// //         <div className="form-group">
// //           <label>Password:</label>
// //           <input
// //             type="password"
// //             value={password}
// //             onChange={(e) => setPassword(e.target.value)}
// //           />
// //           {errors.password && <span className="error">{errors.password}</span>}
// //         </div>
// //         <button type="submit" className="submit">
// //           Login
// //         </button>
// //         <p className="signup-message">
// //           Don't have an account? <Link to="/signup">Sign up here</Link>
// //         </p>
// //       </form>
// //     </div>
// //   );
// // };

// // export default LoginPage;
// import React, { useState } from "react";
// import "./Login.css"; // Import the CSS file
// import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const LoginPage = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});
//   const navigate = useNavigate();

//   const handleLogin = () => {
//     let admin = false;
//     if (admin) {
//       navigate("/admin");
//     } else {
//       navigate("/dashboard");
//     }
//   };

//   const validateForm = () => {
//     let isValid = true;
//     const errors = {};

//     // Email validation
//     if (!email) {
//       isValid = false;
//       errors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       isValid = false;
//       errors.email = "Email is invalid";
//     }

//     // Password validation
//     if (!password) {
//       isValid = false;
//       errors.password = "Password is required";
//     }

//     setErrors(errors);
//     return isValid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       const userData = {
//         email,
//         password,
//       };

//       axios
//         .post("http://13.127.37.70:5000/api/v1/signin", userData)
//         .then((response) => {
//           console.log("Login successful!");
//           console.log(response.data);
//           localStorage.setItem("user_322", JSON.stringify(response.data.data));
//           handleLogin();
//         })
//         .catch((error) => {
//           console.error("Error during login:", error.response.data.massage);
//           if (error.response && error.response.data) {
//             setErrors(error.response.data); // Update the errors state with the API response error data
//           } else {
//             setErrors({ general: "An error occurred during login." });
//           }
//         });
//     }
//   };

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleSubmit}>
//         <div className="form-group">
//           <label>Email:</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//           />
//           {errors.email && <span className="error">{errors.email}</span>}
//         </div>
//         <div className="form-group">
//           <label>Password:</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//           />
//           {errors.password && <span className="error">{errors.password}</span>}
//         </div>
//         {errors.general && <span className="error">{errors.general}</span>}
//         <button type="submit" className="submit">
//           Login
//         </button>
//         <p className="signup-message">
//           Don't have an account? <Link to="/signup">Sign up here</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;
import React, { useState } from "react";
import "./Login.css"; // Import the CSS file
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import logo from "../logo/WhatsApp Image 2023-07-12 at 9.58.35 AM.png";
import Footer from "./Footer";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogin = () => {
    let admin = JSON.parse(localStorage.getItem("user_322"));
    console.log(admin.isAdmin, "fiksahkash");
    if (admin) {
      if (admin.isAdmin) {
        navigate("/admin");
      } else {
        navigate("/dashboard");
      }
    }
  };
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const validateForm = () => {
    let isValid = true;
    const errors = {};

    // Email validation
    if (!email) {
      isValid = false;
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      isValid = false;
      errors.email = "Email is invalid";
    }

    // Password validation
    if (!password) {
      isValid = false;
      errors.password = "Password is required";
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const userData = {
        email,
        password,
      };
      //this code i working fine///
      axios
        .post("http://13.48.26.232:5000/api/v1/signin", userData)
        .then((response) => {
          console.log("Login successful!");
          console.log(response.data);
          localStorage.setItem("user_322", JSON.stringify(response.data.data));
          handleLogin();
        })
        .catch((error) => {
          console.error("Error during login:", error.response?.data);

          if (
            error.response &&
            error.response.data &&
            error.response.data.message
          ) {
            setErrors({ general: error.response.data.message });
          } else {
            setErrors({ general: "An error occurred during login." });
          }
        });
      //////////////////////////////////////////////////////////////////////////////////
      // if (email === "1@2.com" && password === "123") {
      //   const upadated = { ...userData, isAdmin: true };
      //   localStorage.setItem("user_322", JSON.stringify(upadated));
      //   handleLogin();
      // } else {
      //   localStorage.setItem("user_322", JSON.stringify(userData));
      //   handleLogin();
      // }
    }
  };

  return (
    <>
      {" "}
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
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email:</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>
          {errors.general && <span className="error">{errors.general}</span>}
          <button type="submit" className="submit">
            Login
          </button>
          <p className="signup-message">
            Don't have an account? <Link to="/signup">Sign up here</Link>
          </p>
        </form>
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default LoginPage;
