import React, { useEffect } from "react";
import PropTypes from "prop-types";
import "./CircleProgress.css";

import axios from "axios";

const CircleProgress = ({ percentage, resultDataApi }) => {
  useEffect(() => {
    // Define an asynchronous function inside useEffect
    if (resultDataApi) {
      const fetchData = async () => {
        try {
          // Make a POST request to the API endpoint and await the response
          const response = await axios.post(
            "http://13.48.26.232:5000/api/v1/final_result",
            resultDataApi
          );
          console.log(response);
          // Handle the response data here and update the state
        } catch (error) {
          // Handle any errors that occurred during the request
          console.error("Error making POST request:", error);
        }
      };
      fetchData();
    }

    // Call the asynchronous function
  }, []);

  const radius = 45;
  const strokeWidth = 10;
  const strokeColor = "#18ad18";
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <svg className="progressCircle" viewBox="0 0 100 100">
      <circle className="progressCircleBackground" r={radius} cx={50} cy={50} />
      <circle
        className="progressCircleForeground"
        r={radius}
        cx={50}
        cy={50}
        style={{
          strokeDasharray: `${circumference}`,
          strokeDashoffset: `${offset}`,
          stroke: strokeColor,
          strokeWidth: strokeWidth,
        }}
      />
    </svg>
  );
};

CircleProgress.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default CircleProgress;
