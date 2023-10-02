import React, { useState, useEffect } from "react";
import "./BookTable.css";
import axios from "axios";
function BookTable() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const [books, setBooks] = useState([]);
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
  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://13.48.26.232:5000/api/v1/get_allsubjectlist"
      );
      setBooks(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

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
                <td>{book.sub_name}</td>
                <td style={{ textAlign: "center" }}>{book.EASA_2016}</td>
                <td style={{ textAlign: "center" }}>{book.EASA_2021}</td>
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
