import React, { useState } from "react";

function ChangeHomePageContent() {
  const [data, setData] = useState({
    header: "Latest Version Of EASA 2016 And 2021 Question Bank",
    description:
      "Our database contains high percentage of REAL EXAM QUESTIONS. Students mark questions after their examination, then we eliminate questionsaccording to feedback.",
  });

  return (
    <section className="section">
      <div className="side active">
        <input onChange={(e) => setData(e.target.value)} value={data.header} />
        <textarea
          onChange={(e) => setData(e.target.value)}
          style={{ height: "55px" }}
          value={data.description}
        />
        <div className="div-button">
          <button>Change Content</button>
        </div>
      </div>
      <div className="side-content"></div>
    </section>
  );
}

export default ChangeHomePageContent;
