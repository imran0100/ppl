import React, { useState, useEffect } from "react";
import "./Section3.css";

function Section3() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section2Right = document.querySelector(".section3");
      const section2Top = section2Right.offsetTop;
      const windowTop = window.scrollY + window.innerHeight;

      if (windowTop > section2Top) {
        setShouldAnimate(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <section className="section3">
      <h2 className={`${shouldAnimate ? "active" : ""}`}>Amazing Features</h2>
      <p>We’ve got a lot of amazing and cool features.</p>
      <div className="row">
        <div className="col">
          <h3>Updated Database</h3>
          <p>
            Latest EASA2016 and EASA2021 Database for ATPL exams. Updated
            database with student feedback.
          </p>
        </div>
        <div className="col">
          <h3>Real Exam Questions</h3>
          <p>
            Students mark questions after the real examination. Marked as 'seen
            on the real exam' property is available in the question details.
          </p>
        </div>
        <div className="col">
          <h3>Unlimited Tests</h3>
          <p>
            AtplQuestions enables you to run unlimited numbers of practice tests
            from EASA ECQB Database.
          </p>
        </div>
        <div className="col">
          <h3>Explanations</h3>
          <p>
            Explanations are prepared by professionals on the relevant topic and
            helps you to have a better understanding of the question.
          </p>
        </div>
        <div className="col">
          <h3>PayPal Integration</h3>
          <p>
            PAYPAL integration is completed. You can purchase package via
            PayPal.
          </p>
        </div>
        <div className="col">
          <h3>LMS</h3>
          <p>
            Special Interface for ATOs. Assigning customize tests to students
            from the database.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Section3;
