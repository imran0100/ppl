import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Success.css"; // Import the CSS file for this component
import axios from "axios";
function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const existing = JSON.parse(localStorage.getItem("user_322"));
      const response = await axios.post(
        "http://13.48.26.232:5000/api/v1/payment-success",
        {
          sessionId: existing.sessionId,
          userId: existing.userId,
        }
      );
      console.log(response, "dahsihdia");
      navigate("/dashboard");

      // ...
    }
    fetchData();
  }, []);

  return (
    <div className="success-container">
      <h3 className="success-header">Payment Successful</h3>
      <p className="success-button">Please wait...</p>
    </div>
  );
}

export default Success;
