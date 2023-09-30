// import "./BookTable.css";

// function ChangeBookTableContent() {
// const books = [
//   {
//     id: 1,
//     name: "Subjects",
//     data1: "Esa 2016",
//     data2: "Esa 2022",
//   },
//   {
//     subjects: [
//       {
//         id: 1,
//         name: "Air Law",
//         data1: "YES",
//         data2: "YES",
//       },
//       {
//         id: 2,
//         name: "Principles of Flight",
//         data1: "YES",
//         data2: "YES",
//       },
//       {
//         id: 3,
//         name: "Operational procedures",
//         data1: "YES",
//         data2: "YES",
//       },
//       {
//         id: 4,
//         name: "Meteorology",
//         data1: "YES",
//         data2: "YES",
//       },
//       {
//         id: 5,
//         name: "Communications",
//         data1: "YES",
//         data2: "YES",
//       },
//       {
//         id: 6,
//         name: "Flight planning and performance",
//         data1: "YES",
//         data2: "YES",
//       },
//       {
//         id: 7,
//         name: "Navigation",
//         data1: "YES",
//         data2: "YES",
//       },
//       {
//         id: 8,
//         name: "Human performance and limitations",
//         data1: "YES",
//         data2: "YES",
//       },
//       {
//         id: 9,
//         name: "Aircraft general knowledge",
//         data1: "YES",
//         data2: "YES",
//       },
//     ],
//   },
// ];

//   return (
//     // <ReactScrollAnimation animateIn="zoomIn" animateOnce={true}>
//     <div className="table-container">
//       <div className="book-table active">
//         <table>
//           <thead>
//             <tr>
//               <th style={{ width: "56rem" }}>{books[0].name}</th>
//               <input
//                 style={{ marginRight: "1rem", width: "10rem", marginTop: "3%" }}
//                 value={books[0].data1}
//               />
//               <input
//                 style={{ marginRight: "1rem", width: "10rem", marginTop: "3%" }}
//                 value={books[0].data2}
//               />
//             </tr>
//           </thead>
//           <tbody>
//             {books[1].subjects.map((book, index) => (
//               <tr key={index}>
//                 <td>{book.name}</td>
//                 <input
//                   style={{
//                     marginRight: "1rem",
//                     width: "10rem",
//                     marginTop: "3%",
//                   }}
//                   value={book.data1}
//                 />
//                 <input
//                   style={{ width: "10rem", marginTop: "3%" }}
//                   value={book.data2}
//                 />
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//     // </ReactScrollAnimation>
//   );
// }

// export default ChangeBookTableContent;
import React, { useState, useEffect } from "react";
import axios from "axios"; // You may need to install Axios if you haven't already
import "./BookTable.css";

function ChangeBookTableContent() {
  const [subjectsData, setSubjectsData] = useState([
    {
      id: 1,
      name: "Subjects",
      data1: "Esa 2016",
      data2: "Esa 2022",
    },
    {
      subjects: [
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
      ],
    },
  ]);

  // Function to update subject data when an input field changes
  const handleSubjectDataChange = (subjectIndex, property, newValue) => {
    const updatedSubjectsData = [...subjectsData];
    updatedSubjectsData[1].subjects[subjectIndex][property] = newValue; // Assuming subjects are always at index 1
    setSubjectsData(updatedSubjectsData);
  };

  // Function to send updated data to the backend
  const sendUpdatedDataToBackend = () => {
    // Extract the subjects data from the state
    const subjects = subjectsData[1].subjects;

    // // Send a PUT request to your backend API for editing
    // axios
    //   .put("your_api_endpoint_here/1", { subjects }) // Assuming you are editing the resource with ID 1
    //   .then((response) => {
    //     // Handle success, e.g., show a success message
    //     console.log("Data updated successfully:", response.data);
    //   })
    //   .catch((error) => {
    //     // Handle error, e.g., show an error message
    //     console.error("Error updating data:", error);
    //   });
    console.log(subjects, "llllllllllll");
  };

  return (
    <div className="table-container">
      <div className="book-table active">
        <table>
          <thead>
            <tr>
              <th style={{ width: "56rem" }}>Subject</th>
              <th>
                <input
                  style={{ width: "10rem" }}
                  value={subjectsData[0].data1}
                  onChange={(e) =>
                    handleSubjectDataChange(0, "data1", e.target.value)
                  }
                />
              </th>
              <th>
                <input
                  style={{ width: "10rem" }}
                  value={subjectsData[0].data2}
                  onChange={(e) =>
                    handleSubjectDataChange(0, "data2", e.target.value)
                  }
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {subjectsData[1].subjects.map((subject, subjectIndex) => (
              <tr key={subject.id}>
                <td>{subject.name}</td>
                <td>
                  <input
                    style={{ width: "10rem" }}
                    value={subject.data1}
                    onChange={(e) =>
                      handleSubjectDataChange(
                        subjectIndex,
                        "data1",
                        e.target.value
                      )
                    }
                  />
                </td>
                <td>
                  <input
                    style={{ width: "10rem" }}
                    value={subject.data2}
                    onChange={(e) =>
                      handleSubjectDataChange(
                        subjectIndex,
                        "data2",
                        e.target.value
                      )
                    }
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ textAlign: "center" }}>
          <button className="ChangeUi" onClick={sendUpdatedDataToBackend}>
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChangeBookTableContent;
