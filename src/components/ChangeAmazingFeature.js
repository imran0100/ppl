import React, { useState, useEffect } from "react";
import "./Section3.css";
import axios from "axios";
function ChangeAmazingFeature() {
  const [data, setData] = useState({
    heading: "Amazing Features",
    description: "We’ve got a lot of amazing and cool features.",
    subheading1: "Updated Database",
    subdescription1:
      "Latest EASA2016 and EASA2021 Database for ATPL exams. Updated database with student feedback.",
    subheading2: "Real Exam Questions",
    subdescription2:
      "Students mark questions after the real examination. Marked as 'seen on the real exam' property is available in the question details.",
    subheading3: "Unlimited Tests",
    subdescription3:
      "AtplQuestions enables you to run unlimited numbers of practice tests from EASA ECQB Database.",
    subheading4: "Explanations",
    subdescription4:
      "Explanations are prepared by professionals on the relevant topic and helps you to have a better understanding thequestion",
    subheading5: "PayPal Integration",
    subdescription6:
      " PAYPAL integration is completed. You can purchase package via PayPal.",
    subheading7: "LMS",
    subdescription7:
      "Special Interface for ATOs. Assigning customize tests to students from the database.",
  });
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://13.48.26.232:5000/api/v1/");

        console.log(response);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const handleSave = async () => {
    try {
      console.log("hiii");
      // Make a POST request to the API endpoint and await the response
      const response = await axios.post(
        "http://13.48.26.232:5000"
        // resultDataApi
      );
      console.log(response);
      // Handle the response data here and update the state
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error("Error making POST request:", error);
      console.log("hii");
    }
  };
  return (
    <section className="section3">
      <input
        onChange={(e) => setData(e.target.value)}
        style={{ width: "25%" }}
        value={data.heading}
        className="active"
      />
      <input
        onChange={(e) => setData(e.target.value)}
        style={{ width: "85%" }}
        value={data.description}
      />
      <div className="row">
        <div className="col">
          <input
            onChange={(e) => setData(e.target.value)}
            value={data.subheading1}
          />
          <textarea
            onChange={(e) => setData(e.target.value)}
            value={data.subdescription1}
          />
        </div>
        <div className="col">
          <input
            onChange={(e) => setData(e.target.value)}
            value={data.subheading2}
          />
          <textarea
            onChange={(e) => setData(e.target.value)}
            value={data.subdescription2}
          />
        </div>
        <div className="col">
          <input
            onChange={(e) => setData(e.target.value)}
            value={data.subheading3}
          />
          <textarea
            onChange={(e) => setData(e.target.value)}
            value={data.subdescription3}
          />
        </div>
        <div className="col">
          <input
            onChange={(e) => setData(e.target.value)}
            value={data.subheading4}
          />
          <textarea
            onChange={(e) => setData(e.target.value)}
            value={data.subdescription4}
          />
        </div>
        <div className="col">
          <input
            onChange={(e) => setData(e.target.value)}
            value={data.subheading5}
          />
          <textarea
            onChange={(e) => setData(e.target.value)}
            value={data.subdescription6}
          />
        </div>
        <div className="col">
          <input
            onChange={(e) => setData(e.target.value)}
            value={data.subheading7}
          />
          <textarea
            onChange={(e) => setData(e.target.value)}
            value={data.subdescription7}
          />
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <button onClick={handleSave} className="ChangeUi">
          Save Changes
        </button>
      </div>
    </section>
  );
}

export default ChangeAmazingFeature;
