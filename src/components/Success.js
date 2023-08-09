import React from "react";
import { useNavigate } from "react-router-dom";
import "./Success.css"; // Import the CSS file for this component

function Success() {
  const navigate = useNavigate();
  const handlePayment = () => {
    // fetch("http://13.127.37.70:5000/api/v1/payment-success", {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   // body: JSON.stringify({ sessionid, userid }),
    // })
    //   .then((res) => {
    //     if (res.ok) return res.json();
    //     return res.json().then((json) => Promise.reject(json));
    //   })
    //   .then((data) => {
    //     console.log(data.message);
    //     navigate("/dashboard");
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
    const existingData = JSON.parse(localStorage.getItem("user_322"));
    const updatedData = { ...existingData, subscription: true };
    localStorage.setItem("user_322", JSON.stringify(updatedData));
    navigate("/dashboard");
  };

  return (
    <div className="success-container">
      <h3 className="success-header">Payment Successful</h3>
      <button className="success-button" onClick={handlePayment}>
        Proceed
      </button>
    </div>
  );
}

export default Success;
