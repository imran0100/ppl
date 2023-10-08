// import React, { useState, useEffect } from "react";
// import "./Section3.css";
// import axios from "axios";
// function ChangeAmazingFeature() {
//   const [data, setData] = useState({});
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://13.48.26.232:5000/api/v1/get_all_amazing_fearture"
//         );
//         console.log(response.data.data[0]);
//         setData(response.data.data[0]);
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
//   const handleSave = async () => {
//     try {
//       console.log("hiii");
//       // Make a POST request to the API endpoint and await the response
//       const response = await axios.post(
//         "http://13.48.26.232:5000"
//         // resultDataApi
//       );
//       console.log(response);
//       // Handle the response data here and update the state
//     } catch (error) {
//       // Handle any errors that occurred during the request
//       console.error("Error making POST request:", error);
//       console.log("hii");
//     }
//   };
//   return (
//     <section className="section3">
//       <input
//         onChange={(e) => setData(e.target.value)}
//         style={{ width: "25%" }}
//         value={data.heading}
//         className="active"
//       />
//       <input
//         onChange={(e) => setData(e.target.value)}
//         style={{ width: "85%" }}
//         value={data.description}
//       />
//       <div className="row">
//         <div className="col">
//           <input
//             onChange={(e) => setData(e.target.value)}
//             value={data.sub_head1}
//           />
//           <textarea
//             onChange={(e) => setData(e.target.value)}
//             value={data.sub_description1}
//           />
//         </div>
//         <div className="col">
//           <input
//             onChange={(e) => setData(e.target.value)}
//             value={data.sub_head2}
//           />
//           <textarea
//             onChange={(e) => setData(e.target.value)}
//             value={data.sub_description2}
//           />
//         </div>
//         <div className="col">
//           <input
//             onChange={(e) => setData(e.target.value)}
//             value={data.sub_head3}
//           />
//           <textarea
//             onChange={(e) => setData(e.target.value)}
//             value={data.sub_description3}
//           />
//         </div>
//         <div className="col">
//           <input
//             onChange={(e) => setData(e.target.value)}
//             value={data.sub_head4}
//           />
//           <textarea
//             onChange={(e) => setData(e.target.value)}
//             value={data.sub_description4}
//           />
//         </div>
//         <div className="col">
//           <input
//             onChange={(e) => setData(e.target.value)}
//             value={data.sub_head5}
//           />
//           <textarea
//             onChange={(e) => setData(e.target.value)}
//             value={data.sub_description5}
//           />
//         </div>
//         <div className="col">
//           <input
//             onChange={(e) => setData(e.target.value)}
//             value={data.sub_head6}
//           />
//           <textarea
//             onChange={(e) => setData(e.target.value)}
//             value={data.sub_description6}
//           />
//         </div>
//       </div>
//       <div style={{ textAlign: "center" }}>
//         <button onClick={handleSave} className="ChangeUi">
//           Save Changes
//         </button>
//       </div>
//     </section>
//   );
// }

// export default ChangeAmazingFeature;
import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Section3.css";

function ChangeAmazingFeature() {
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

  const handleInputChange = (field, value) => {
    setData({
      ...data,
      [field]: value,
    });
  };

  const handleSave = async () => {
    try {
      // Make a PUT request to the API endpoint and await the response
      const response = await axios.put(
        "https://server.theultimateppl.com/api/v1/update_amazing_fearture/1",
        data
      );
      console.log(response);
      // Handle the response data here if needed
    } catch (error) {
      // Handle any errors that occurred during the request
      console.error("Error making PUT request:", error);
    }
  };

  return (
    <section className="section3">
      <input
        onChange={(e) => handleInputChange("heading", e.target.value)}
        style={{ width: "25%" }}
        value={data.heading || ""}
        className="active"
      />
      <input
        onChange={(e) => handleInputChange("description", e.target.value)}
        style={{ width: "85%" }}
        value={data.description || ""}
      />
      <div className="row">
        {[...Array(6)].map((_, index) => (
          <div className="col" key={index}>
            <input
              onChange={(e) =>
                handleInputChange(`sub_head${index + 1}`, e.target.value)
              }
              value={data[`sub_head${index + 1}`] || ""}
            />
            <textarea
              onChange={(e) =>
                handleInputChange(`sub_description${index + 1}`, e.target.value)
              }
              value={data[`sub_description${index + 1}`] || ""}
            />
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center" }}>
        <button onClick={handleSave} className="ChangeUi">
          Save Changes
        </button>
      </div>
    </section>
  );
}

export default ChangeAmazingFeature;
