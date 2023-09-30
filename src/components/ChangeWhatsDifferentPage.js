import React, { useState, useEffect } from "react";
import image from "../logo/20230712_231252 (1) (1).png";
import "./Section2.css";

// Import the animation styles

function ChangeWhatsDifferentPage() {
  const [data, setData] = useState({
    header: "What Is The Difference?",
    description:
      "Apart many European countries, Sweden, Bulgaria, Lithuania, Hungary,Greece, Czech Republic, Italy,Portugal, Austria,Germany, Slovakia,Slovenia, Crotia,France, Iceland, Belgium, Denmark, Serbia,Spain already use ECQB7, possibly also UK; Poland also started to use ECQB 7.0 since June 2020. EASA 2021 Database has been released! We  strongly recommend checking with your flight school or CAA and find out which database is used for your official exam. EASA has removed a lot of questions for creating the new database but they have also added new chapters. There will be added more new questions, so the difference in question numbers will not be so big. New questions have been added to the new syllabus after receiving students feedback.",
  });

  return (
    <div className="section2">
      <div className="inside">
        {/* <ReactScrollAnimation animateIn="fadeIn" animateOnce={true}> */}
        <div className="img-div active">
          <div className="img-circle">
            <img className="img-phone" src={image} alt="Smartphone" />
          </div>
        </div>
        {/* </ReactScrollAnimation> */}
      </div>

      {/* <div className="section2-right"> */}
      <div className="section2-right active">
        <input onChange={(e) => setData(e.target.value)} value={data.header} />
        <textarea
          onChange={(e) => setData(e.target.value)}
          style={{ height: "200px" }}
          value={data.description}
        />
        <div style={{ textAlign: "center" }}>
          <button className="ChangeUi">Save Changes</button>
        </div>
      </div>
    </div>
  );
}

export default ChangeWhatsDifferentPage;
