import React, { useState, useEffect } from "react";
import "./AboutDatabasePage.css";
import { FaBook, FaSearch, FaList } from "react-icons/fa";

function AboutDatabasePage() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section2Right = document.querySelector(".col-1");
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
    <div>
      <section>
        <h2 className={`section-heading ${shouldAnimate ? "active" : ""}`}>
          About Database
        </h2>
        <p>
          Our website has two versions of EASA Database. EASA 2016 and EASA
          2021, both databases consist of questions appearing on the Real Exams
          most frequently.
        </p>

        <div className="row">
          <div className="col-1">
            <h3>EASA 2016 (ECQB 7.0) Database</h3>
            <div className="cl">
              {" "}
              <div className="icon">
                <FaBook className="icon-color" size={30} />
              </div>
              The Last Updated EASA ECQB 7.0 Question Bank, Approximately 100
              new questions added every month, We keep updated our database with
              students feedback.
            </div>
          </div>
          <div className="col-1">
            <h3>EASA 2021 Database</h3>
            <div className="cl">
              {" "}
              <div className="icon">
                <FaSearch className="icon-color" size={30} />
              </div>
              The EASA 2021 database has been released! This database has a
              different structure of learning objectives. Some objectives were
              added or moved, while others were taken out.
            </div>
          </div>
          <div className="col-1">
            <h3>Multiple Choice Questions</h3>
            <div className="cl">
              {" "}
              <div className="icon">
                <FaList className="icon-color" size={30} />
              </div>
              Over 10,000 ATPL(A) multiple choice exam questions. Most of
              questions have detailed explanation taken from ICAO ANNEXES AND
              DOC SERIES.
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutDatabasePage;
