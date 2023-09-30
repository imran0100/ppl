import { useState } from "react";
import "./AboutDatabasePage.css";
import { FaBook, FaSearch, FaList } from "react-icons/fa";

function ChangeAboutDatabase() {
  const [data, setData] = useState({
    mainHeading: "About Database",
    mainDescription:
      "Our website has two versions of EASA Database. EASA 2016 and EASA 2021, both databases consist of questions appearing on the Real Exams most frequently.",
    subHeading1: "EASA 2016 (ECQB 7.0) Database",
    subDescription1:
      "The Last Updated EASA ECQB 7.0 Question Bank, Approximately 100 new questions added every month, We keep updated our database with students feedback.",
    subHeading2: "EASA 2021 Database",
    subDescription2:
      " The EASA 2021 database has been released! This database has a different structure of learning objectives. Some objectives were added or moved, while others were taken out.",
    subHeading3: "Multiple Choice Questions",
    subDescription3:
      "The EASA 2021 database has been released! This database has a different structure of learning objectives. Some objectives were added or moved, while others were taken out",
  });
  return (
    <div>
      <section>
        <input
          style={{ width: "25%" }}
          className="section-heading active"
          value={data.mainHeading}
          onChange={(e) => setData(e.target.value)}
        />
        <input
          onChange={(e) => setData(e.target.value)}
          value={data.mainDescription}
        />

        <div className="row">
          <div className="col-1">
            <input
              onChange={(e) => setData(e.target.value)}
              value={data.subHeading1}
            />
            <div className="cl" style={{ width: "27rem" }}>
              {" "}
              <div className="icon">
                <FaBook className="icon-color" size={30} />
              </div>
              <textarea
                onChange={(e) => setData(e.target.value)}
                value={data.subDescription1}
              />
            </div>
          </div>
          <div className="col-1">
            <input
              onChange={(e) => setData(e.target.value)}
              value={data.subHeading2}
            />
            <div className="cl" style={{ width: "27rem" }}>
              {" "}
              <div className="icon">
                <FaSearch className="icon-color" size={30} />
              </div>
              <textarea
                onChange={(e) => setData(e.target.value)}
                value={data.subDescription2}
              />
            </div>
          </div>
          <div className="col-1">
            <input
              onChange={(e) => setData(e.target.value)}
              value={data.subHeading3}
            />
            <div className="cl" style={{ width: "27rem" }}>
              {" "}
              <div className="icon">
                <FaList className="icon-color" size={30} />
              </div>
              <textarea
                onChange={(e) => setData(e.target.value)}
                value={data.subDescription3}
              />
            </div>
          </div>
        </div>
        <div style={{ textAlign: "center" }}>
          <button className="ChangeUi">Save Changes</button>
        </div>
      </section>
    </div>
  );
}

export default ChangeAboutDatabase;
