// import { useState, useEffect } from "react";
// import "./AboutDatabasePage.css";
// import { FaBook, FaSearch, FaList } from "react-icons/fa";
// import axios from "axios";
// function ChangeAboutDatabase() {
//   const [data, setData] = useState({});

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://13.48.26.232:5000/api/v1/get_alldatabase"
//         );

//         setData(response.data.data[0]);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);

//   const handleClick = async () => {
//     try {
//       // Prepare the data to be sent in the PUT request

//       // Make a PUT request to the API endpoint and await the response
//       const response = await axios.put(
//         "http://13.48.26.232:5000/api/v1/getbyId_database/1",
//         data
//       );

//       console.log(response);
//       // Handle the response data here if needed
//     } catch (error) {
//       console.error("Error making PUT request:", error);
//     }
//   };

//   return (
//     <div>
//       <section>
//         <input
//           style={{ width: "25%" }}
//           className="section-heading active"
//           value={data.heading}
//           onChange={(e) => setData(e.target.value)}
//         />
//         <input
//           onChange={(e) => setData(e.target.value)}
//           value={data.description}
//         />

//         <div className="row">
//           <div className="col-1">
//             <input
//               onChange={(e) => setData(e.target.value)}
//               value={data.sub_head1}
//             />
//             <div className="cl" style={{ width: "27rem" }}>
//               {" "}
//               <div className="icon">
//                 <FaBook className="icon-color" size={30} />
//               </div>
//               <textarea
//                 onChange={(e) => setData(e.target.value)}
//                 value={data.sub_description1}
//               />
//             </div>
//           </div>
//           <div className="col-1">
//             <input
//               onChange={(e) => setData(e.target.value)}
//               value={data.sub_head2}
//             />
//             <div className="cl" style={{ width: "27rem" }}>
//               {" "}
//               <div className="icon">
//                 <FaSearch className="icon-color" size={30} />
//               </div>
//               <textarea
//                 onChange={(e) => setData(e.target.value)}
//                 value={data.sub_description2}
//               />
//             </div>
//           </div>
//           <div className="col-1">
//             <input
//               onChange={(e) => setData(e.target.value)}
//               value={data.sub_head3}
//             />
//             <div className="cl" style={{ width: "27rem" }}>
//               {" "}
//               <div className="icon">
//                 <FaList className="icon-color" size={30} />
//               </div>
//               <textarea
//                 onChange={(e) => setData(e.target.value)}
//                 value={data.sub_description3}
//               />
//             </div>
//           </div>
//         </div>
//         <div style={{ textAlign: "center" }}>
//           <button onClick={handleClick} className="ChangeUi">
//             Save Changes
//           </button>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default ChangeAboutDatabase;
import React, { useState, useEffect } from "react";
import { FaBook, FaSearch, FaList } from "react-icons/fa";
import axios from "axios";
import "./AboutDatabasePage.css";

function ChangeAboutDatabase() {
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

  const handleInputChange = (field, value) => {
    setData({
      ...data,
      [field]: value,
    });
  };

  const handleClick = async () => {
    try {
      // Make a PUT request to the API endpoint and await the response
      const response = await axios.put(
        "http://13.48.26.232:5000/api/v1/getbyId_database/1",
        data
      );

      console.log(response);
      // Handle the response data here if needed
    } catch (error) {
      console.error("Error making PUT request:", error);
    }
  };

  return (
    <div>
      <section>
        <input
          style={{ width: "25%" }}
          className="section-heading active"
          value={data.heading || ""}
          onChange={(e) => handleInputChange("heading", e.target.value)}
        />
        <input
          onChange={(e) => handleInputChange("description", e.target.value)}
          value={data.description || ""}
        />

        <div className="row">
          <div className="col-1">
            <input
              onChange={(e) => handleInputChange("sub_head1", e.target.value)}
              value={data.sub_head1 || ""}
            />
            <div className="cl" style={{ width: "27rem" }}>
              {" "}
              <div className="icon">
                <FaBook className="icon-color" size={30} />
              </div>
              <textarea
                onChange={(e) =>
                  handleInputChange("sub_description1", e.target.value)
                }
                value={data.sub_description1 || ""}
              />
            </div>
          </div>
          <div className="col-1">
            <input
              onChange={(e) => handleInputChange("sub_head2", e.target.value)}
              value={data.sub_head2 || ""}
            />
            <div className="cl" style={{ width: "27rem" }}>
              {" "}
              <div className="icon">
                <FaSearch className="icon-color" size={30} />
              </div>
              <textarea
                onChange={(e) =>
                  handleInputChange("sub_description2", e.target.value)
                }
                value={data.sub_description2 || ""}
              />
            </div>
          </div>
          <div className="col-1">
            <input
              onChange={(e) => handleInputChange("sub_head3", e.target.value)}
              value={data.sub_head3 || ""}
            />
            <div className="cl" style={{ width: "27rem" }}>
              {" "}
              <div className="icon">
                <FaList className="icon-color" size={30} />
              </div>
              <textarea
                onChange={(e) =>
                  handleInputChange("sub_description3", e.target.value)
                }
                value={data.sub_description3 || ""}
              />
            </div>
          </div>
          {/* Add more input fields here following the same pattern */}
        </div>

        <div style={{ textAlign: "center" }}>
          <button onClick={handleClick} className="ChangeUi">
            Save Changes
          </button>
        </div>
      </section>
    </div>
  );
}

export default ChangeAboutDatabase;
