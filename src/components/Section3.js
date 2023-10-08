import React, { useState, useEffect } from "react";
import "./Section3.css";
import axios from "axios";
function Section3() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://server.theultimateppl.com/api/v1/get_all_amazing_fearture"
        );
        console.log(response.data.data[0]);
        setData(response.data.data[0]);
      } catch (error) {
        if (error.response && error.response.status === 404) {
          // Handle 404 error here
          console.error("Data not found on the server.");
        } else {
          // Handle other errors
          console.error("Error fetching data:", error.message);
        }
      }
    };

    fetchData();
  }, []);
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
      <h2 className={`${shouldAnimate ? "active" : ""}`}>{data.heading}</h2>
      <p>{data.description}</p>
      <div className="row">
        <div className="col">
          <h3>{data.sub_head1}</h3>
          <p>{data.sub_description1}</p>
        </div>
        <div className="col">
          <h3>{data.sub_head2}</h3>
          <p>{data.sub_description2}</p>
        </div>
        <div className="col">
          <h3>{data.sub_head3}</h3>
          <p>{data.sub_description3}</p>
        </div>
        <div className="col">
          <h3>{data.sub_head4}</h3>
          <p>{data.sub_description4}</p>
        </div>
        <div className="col">
          <h3>{data.sub_head5}</h3>
          <p>{data.sub_description5}</p>
        </div>
        <div className="col">
          <h3>{data.sub_head6}</h3>
          <p>{data.sub_description6}</p>
        </div>
      </div>
    </section>
  );
}

export default Section3;
