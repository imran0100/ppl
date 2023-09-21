import React, { useEffect, useState } from "react";
import "./Dashboard.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function ChooseSubject() {
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://13.48.26.232:5000/api/v1/get_allsubjectlist"
        );

        setSubjects(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/question/${id}`);
  };

  return (
    <div className="book-table1">
      <table>
        <thead>
          <tr>
            <th> Select a Subject</th>
          </tr>
        </thead>
        <tbody>
          {subjects.map((book, index) => (
            <tr key={book.sub_id} onClick={() => handleClick(book.sub_id)}>
              <td>{book.sub_name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ChooseSubject;
