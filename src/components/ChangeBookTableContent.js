// // import "./BookTable.css";

// // function ChangeBookTableContent() {
// // const books = [
// //   {
// //     id: 1,
// //     name: "Subjects",
// //     data1: "Esa 2016",
// //     data2: "Esa 2022",
// //   },
// //   {
// //     subjects: [
// //       {
// //         id: 1,
// //         name: "Air Law",
// //         data1: "YES",
// //         data2: "YES",
// //       },
// //       {
// //         id: 2,
// //         name: "Principles of Flight",
// //         data1: "YES",
// //         data2: "YES",
// //       },
// //       {
// //         id: 3,
// //         name: "Operational procedures",
// //         data1: "YES",
// //         data2: "YES",
// //       },
// //       {
// //         id: 4,
// //         name: "Meteorology",
// //         data1: "YES",
// //         data2: "YES",
// //       },
// //       {
// //         id: 5,
// //         name: "Communications",
// //         data1: "YES",
// //         data2: "YES",
// //       },
// //       {
// //         id: 6,
// //         name: "Flight planning and performance",
// //         data1: "YES",
// //         data2: "YES",
// //       },
// //       {
// //         id: 7,
// //         name: "Navigation",
// //         data1: "YES",
// //         data2: "YES",
// //       },
// //       {
// //         id: 8,
// //         name: "Human performance and limitations",
// //         data1: "YES",
// //         data2: "YES",
// //       },
// //       {
// //         id: 9,
// //         name: "Aircraft general knowledge",
// //         data1: "YES",
// //         data2: "YES",
// //       },
// //     ],
// //   },
// // ];

// //   return (
// //     // <ReactScrollAnimation animateIn="zoomIn" animateOnce={true}>
// //     <div className="table-container">
// //       <div className="book-table active">
// //         <table>
// //           <thead>
// //             <tr>
// //               <th style={{ width: "56rem" }}>{books[0].name}</th>
// //               <input
// //                 style={{ marginRight: "1rem", width: "10rem", marginTop: "3%" }}
// //                 value={books[0].data1}
// //               />
// //               <input
// //                 style={{ marginRight: "1rem", width: "10rem", marginTop: "3%" }}
// //                 value={books[0].data2}
// //               />
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {books[1].subjects.map((book, index) => (
// //               <tr key={index}>
// //                 <td>{book.name}</td>
// //                 <input
// //                   style={{
// //                     marginRight: "1rem",
// //                     width: "10rem",
// //                     marginTop: "3%",
// //                   }}
// //                   value={book.data1}
// //                 />
// //                 <input
// //                   style={{ width: "10rem", marginTop: "3%" }}
// //                   value={book.data2}
// //                 />
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //     // </ReactScrollAnimation>
// //   );
// // }

// // export default ChangeBookTableContent;
// import React, { useState, useEffect } from "react";
// import axios from "axios"; // You may need to install Axios if you haven't already
// import "./BookTable.css";

// function ChangeBookTableContent() {
//   const [subjectsData, setSubjectsData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://13.48.26.232:5000/api/v1/get_allsubjectlist"
//         );
//         console.log(response.data.data);
//         setSubjectsData(response.data.data);
//       } catch (error) {
//         if (error.response && error.response.status === 404) {
//           // Handle 404 error here
//           console.error("Data not found on the server.");
//         } else {
//           // Handle other errors
//           console.error("Error fetching data:", error.message);
//         }
//       }
//     };

//     fetchData();
//   }, []);

//   const handleAdd = () => {
//     console.log("Add");
//   };
//   const handleUpdate = () => {
//     console.log("update");
//   };
//   const handleClick = () => {
//     setSubjectsData([...subjectsData, {}]);
//   };
//   return (
//     <div className="table-container">
//       <div className="book-table active">
//         <table>
//           <thead>
//             <tr>
//               <th style={{ width: "56rem" }}>Subject</th>
//               <th>EASA 2016</th>
//               <th>EASA 2021</th>
//               <th></th>
//             </tr>
//           </thead>
//           <tbody>
//             {subjectsData.map((subject, subjectIndex) => (
//               <tr key={subject.id}>
//                 <input
//                   className="align"
//                   style={{ width: "20rem", margin: "1.2rem 0 0 1rem" }}
//                   value={subject.name}
//                 />
//                 <td>
//                   <input
//                     className="td-input"
//                     style={{ width: "5rem" }}
//                     value={subject.data1}
//                   />
//                 </td>
//                 <td>
//                   <input
//                     className="td-input"
//                     style={{ width: "5rem" }}
//                     value={subject.data2}
//                   />
//                 </td>
//                 <td>
//                   <button
//                     onClick={subject.id ? handleUpdate : handleAdd}
//                     className="ChangeUi"
//                   >
//                     {subject.id ? "Save Changes" : "Add Subject"}
//                   </button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div style={{ textAlign: "center" }}>
//           {" "}
//           <button onClick={handleClick} className="ChangeUi">
//             Add Subject
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ChangeBookTableContent;
// // import React, { useState, useEffect } from "react";
// // import "./BookTable.css";

// // function ChangeBookTableContent() {
// //   const books = [
// //     {
// //       id: 1,
// //       name: "Air Law",
// //       data1: "YES",
// //       data2: "YES",
// //     },
// //     {
// //       id: 2,
// //       name: "Principles of Flight",
// //       data1: "YES",
// //       data2: "YES",
// //     },
// //     {
// //       id: 3,
// //       name: "Operational procedures",
// //       data1: "YES",
// //       data2: "YES",
// //     },
// //     {
// //       id: 4,
// //       name: "Meteorology",
// //       data1: "YES",
// //       data2: "YES",
// //     },
// //     {
// //       id: 5,
// //       name: "Communications",
// //       data1: "YES",
// //       data2: "YES",
// //     },
// //     {
// //       id: 6,
// //       name: "Flight planning and performance",
// //       data1: "YES",
// //       data2: "YES",
// //     },
// //     {
// //       id: 7,
// //       name: "Navigation",
// //       data1: "YES",
// //       data2: "YES",
// //     },
// //     {
// //       id: 8,
// //       name: "Human performance and limitations",
// //       data1: "YES",
// //       data2: "YES",
// //     },
// //     {
// //       id: 9,
// //       name: "Aircraft general knowledge",
// //       data1: "YES",
// //       data2: "YES",
// //     },
// //   ];

// //   return (
// //     // <ReactScrollAnimation animateIn="zoomIn" animateOnce={true}>
// //     <div className="table-container">
// //       <div className="book-table active">
// //         <table>
// //           <thead>
// //             <tr>
// //               <th>Subjects</th>
// //               <th style={{ textAlign: "center" }}>EASA 2016</th>
// //               <th style={{ textAlign: "center" }}>EASA 2021</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {books.map((book, index) => (
// //               <tr key={index}>
// //                 <input style={{ width: "16rem" }} value={book.name} />
// //                 <input style={{ width: "4rem" }} value={book.data1} />
// //                 <input style={{ width: "4rem" }} value={book.data2} />
// //                 <button>Save Changes</button>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //     // </ReactScrollAnimation>
// //   );
// // }

// // export default ChangeBookTableContent;
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BookTable.css";

function ChangeBookTableContent() {
  const [subjectsData, setSubjectsData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "http://13.48.26.232:5000/api/v1/get_allsubjectlist"
      );
      setSubjectsData(response.data.data);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  const handleAddOrUpdate = async (subject) => {
    try {
      if (subject.sub_id) {
        let data = {
          sub_name: subject.sub_name,
          EASA_2016: subject.EASA_2016,
          EASA_2021: subject.EASA_2021,
        };
        console.log(data);
        // If subject has an id, it already exists, so update it
        await axios.put(
          `http://13.48.26.232:5000/api/v1/getbyId_subject/${subject.sub_id}`,
          data
        );
      } else {
        console.log("asfjikashfkj");
        // If subject doesn't have an id, it's a new subject, so add it
        await axios.post(
          "http://13.48.26.232:5000/api/v1/create_subject",
          subject
        );
      }
      // After adding/updating, fetch the updated data
      fetchData();
    } catch (error) {
      console.error("Error adding/updating subject:", error.message);
    }
  };

  const handleInputChange = (index, field, value) => {
    const updatedSubjects = subjectsData.map((subject, i) => {
      if (i === index) {
        return { ...subject, [field]: value };
      }
      return subject;
    });
    setSubjectsData(updatedSubjects);
  };

  const handleClick = () => {
    setSubjectsData([
      ...subjectsData,
      { sub_name: "", EASA_2016: "", EASA_2021: "" },
    ]);
  };

  return (
    <div className="table-container">
      <div className="book-table active">
        <table>
          <thead>
            <tr>
              <th style={{ width: "56rem" }}>Subject</th>
              <th>EASA 2016</th>
              <th>EASA 2021</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {subjectsData.map((subject, index) => (
              <tr key={subject.sub_id || index}>
                <input
                  className="align"
                  style={{ width: "20rem", margin: "1.2rem 0 0 1rem" }}
                  value={subject.sub_name || ""}
                  onChange={(e) =>
                    handleInputChange(index, "sub_name", e.target.value)
                  }
                />
                <td>
                  <input
                    className="td-input"
                    style={{ width: "5rem" }}
                    value={subject.EASA_2016 || ""}
                    onChange={(e) =>
                      handleInputChange(index, "EASA_2016", e.target.value)
                    }
                  />
                </td>
                <td>
                  <input
                    className="td-input"
                    style={{ width: "5rem" }}
                    value={subject.EASA_2021 || ""}
                    onChange={(e) =>
                      handleInputChange(index, "EASA_2021", e.target.value)
                    }
                  />
                </td>
                <td>
                  <button
                    onClick={() => handleAddOrUpdate(subject)}
                    className="ChangeUi"
                  >
                    {subject.sub_id ? "Save Changes" : "Add Subject"}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div style={{ textAlign: "center" }}>
          <button onClick={handleClick} className="ChangeUi">
            Add Subject
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChangeBookTableContent;
