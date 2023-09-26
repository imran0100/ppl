import React, { useState, useEffect } from "react";
import "./BookTable.css";
import ReactScrollAnimation from "react-scroll-animation";
import "animate.css/animate.min.css"; // Import the animation styles

function BookTable() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section2Right = document.querySelector("tr");
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
  const books = [
    {
      id: 1,
      name: "Air Law",
      data1: "YES",
      data2: "YES",
    },
    {
      id: 2,
      name: "Principles of Flight",
      data1: "YES",
      data2: "YES",
    },
    {
      id: 3,
      name: "Operational procedures",
      data1: "YES",
      data2: "YES",
    },
    {
      id: 4,
      name: "Meteorology",
      data1: "YES",
      data2: "YES",
    },
    {
      id: 5,
      name: "Communications",
      data1: "YES",
      data2: "YES",
    },
    {
      id: 6,
      name: "Flight planning and performance",
      data1: "YES",
      data2: "YES",
    },
    {
      id: 7,
      name: "Navigation",
      data1: "YES",
      data2: "YES",
    },
    {
      id: 8,
      name: "Human performance and limitations",
      data1: "YES",
      data2: "YES",
    },
    {
      id: 9,
      name: "Aircraft general knowledge",
      data1: "YES",
      data2: "YES",
    },
  ];

  return (
    // <ReactScrollAnimation animateIn="zoomIn" animateOnce={true}>
    <div className="table-container">
      <div className={`book-table ${shouldAnimate ? "active" : ""}`}>
        <table>
          <thead>
            <tr>
              <th>Subject</th>
              <th style={{ textAlign: "center" }}>EASA 2016</th>
              <th style={{ textAlign: "center" }}>EASA 2021</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td>{book.name}</td>
                <td style={{ textAlign: "center" }}>{book.data1}</td>
                <td style={{ textAlign: "center" }}>{book.data2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    // </ReactScrollAnimation>
  );
}

export default BookTable;
