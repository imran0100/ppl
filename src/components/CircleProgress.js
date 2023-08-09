import React from "react";
import PropTypes from "prop-types";
import "./CircleProgress.css";

const CircleProgress = ({ percentage }) => {
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
