// import React, { useState } from "react";
// import "./SignUp.css"; // Import the CSS file
// import { Link } from "react-router-dom";

// const Signup = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//   const [errors, setErrors] = useState({});

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
//     } else if (password.length < 6) {
//       isValid = false;
//       errors.password = "Password must be at least 6 characters long";
//     }

//     // Confirm password validation
//     if (!confirmPassword) {
//       isValid = false;
//       errors.confirmPassword = "Confirm Password is required";
//     } else if (confirmPassword !== password) {
//       isValid = false;
//       errors.confirmPassword = "Passwords do not match";
//     }

//     setErrors(errors);
//     return isValid;
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (validateForm()) {
//       // Form is valid, proceed with signup logic
//       // For example, make an API call to register the user
//       console.log("Signup successful!");
//     }
//   };

//   return (
//     <div className="signup-container">
//       <form className="signup-form" onSubmit={handleSubmit}>
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
//         <div className="form-group">
//           <label>Confirm Password:</label>
//           <input
//             type="password"
//             value={confirmPassword}
//             onChange={(e) => setConfirmPassword(e.target.value)}
//           />
//           {errors.confirmPassword && (
//             <span className="error">{errors.confirmPassword}</span>
//           )}
//         </div>
//         <button className="submit" type="submit">
//           Sign Up
//         </button>
//         <p className="signin-message">
//           Already signed up? <Link to="/login">Sign up here</Link>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Signup;
import React, { useState } from "react";
import "./SignUp.css"; // Import the CSS file
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import logo from "../logo/WhatsApp Image 2023-07-12 at 9.58.35 AM.png";

const Signup = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [baseAirfield, setBaseAirfield] = useState("");
  const [licenseNo, setLicenseNo] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const validateForm = () => {
    let isValid = true;
    const errors = {};

    // Name validation
    if (!name) {
      isValid = false;
      errors.name = "Name is required";
    }

    // Address validatio
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
    } else if (password.length < 6) {
      isValid = false;
      errors.password = "Password must be at least 6 characters long";
    }

    // Confirm password validation
    if (!confirmPassword) {
      isValid = false;
      errors.confirmPassword = "Confirm Password is required";
    } else if (confirmPassword !== password) {
      isValid = false;
      errors.confirmPassword = "Passwords do not match";
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      //   // Form is valid, proceed with signup logic
      //   // For example, make an API call to register the user
      //   console.log("Signup successful!");
      // }
      const userData = {
        first_name: name,
        address: address,
        baseAirfield: baseAirfield,
        licenseNo: licenseNo,
        email: email,
        password: password,
      };

      axios
        .post("http://13.48.26.232:5000/api/v1/register", userData)
        .then((response) => {
          // Handle the successful response from the API
          console.log("Signup successful!");
          navigate("/login");

          console.log(response.data); /// // You may log the response or perform other actions as needed
        })
        .catch((error) => {
          // Handle errors that occur during the API call
          console.error("Error signing up:", error);
        });
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
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              Name:<span className="mandatory">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>
          <div className="form-group">
            <label>Address:</label>
            <input
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            {errors.address && <span className="error">{errors.address}</span>}
          </div>
          <div className="form-group">
            <label>Base Airfield:</label>
            <input
              type="text"
              value={baseAirfield}
              onChange={(e) => setBaseAirfield(e.target.value)}
            />
            {errors.baseAirfield && (
              <span className="error">{errors.baseAirfield}</span>
            )}
          </div>
          <div className="form-group">
            <label>License Number:</label>
            <input
              type="text"
              value={licenseNo}
              onChange={(e) => setLicenseNo(e.target.value)}
            />
            {errors.licenseNo && (
              <span className="error">{errors.licenseNo}</span>
            )}
          </div>
          <div className="form-group">
            <label>
              Email:<span className="mandatory">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>
          <div className="form-group">
            <label>
              Password:<span className="mandatory">*</span>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>
          <div className="form-group">
            <label>
              Confirm Password:<span className="mandatory">*</span>
            </label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            {errors.confirmPassword && (
              <span className="error">{errors.confirmPassword}</span>
            )}
          </div>
          <button className="submit" type="submit">
            Sign Up
          </button>
          <p className="signin-message">
            Already signed up? <Link to="/login">Log in here</Link>
          </p>
        </form>
      </div>
    </>
  );
};

export default Signup;
