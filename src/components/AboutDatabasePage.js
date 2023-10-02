import React, { useState, useEffect } from "react";
import "./AboutDatabasePage.css";
import { FaBook, FaSearch, FaList } from "react-icons/fa";
import axios from "axios";
function AboutDatabasePage() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://13.48.26.232:5000/api/v1/get_alldatabase"
        );

        setData(response.data.data[0]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
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
          {data.heading}
        </h2>
        <p>{data.description}</p>

        <div className="row">
          <div className="col-1">
            <h3>{data.sub_head1}</h3>
            <div className="cl">
              {" "}
              <div className="icon">
                <FaBook className="icon-color" size={30} />
              </div>
              {data.sub_description1}
            </div>
          </div>
          <div className="col-1">
            <h3>{data.sub_head2}</h3>
            <div className="cl">
              {" "}
              <div className="icon">
                <FaSearch className="icon-color" size={30} />
              </div>
              {data.sub_description2}
            </div>
          </div>
          <div className="col-1">
            <h3>{data.sub_head3}</h3>
            <div className="cl">
              {" "}
              <div className="icon">
                <FaList className="icon-color" size={30} />
              </div>
              {data.sub_description3}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default AboutDatabasePage;
