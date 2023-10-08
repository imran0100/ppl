// import axios from "axios";
// import React, { useEffect, useState } from "react";

// function ChangeHomePageContent() {
//   const [data, setData] = useState({});
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get(
//           "http://13.48.26.232:5000/api/v1/get_allcontent"
//         );

//         setData(response.data.data[0]);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };

//     fetchData();
//   }, []);
//   const handleClick = async () => {
//     //
//     try {
//       let data1 = { heading: data.heading, description: data.description };
//       console.log(data1);

//       // Make a POST request to the API endpoint and await the response
//       const response = await axios.put(
//         "http://13.48.26.232:5000/api/v1/update_content/1",
//         data1
//       );
//       // resultDataApi
//       console.log(response);
//       // Handle the response data here and update the state
//     } catch (error) {
//       // Handle any errors that occurred during the request
//       console.error("Error making POST request:", error);
//       console.log("hii");
//     }
//   };
//   return (
//     <section className="section">
//       <div className="side active">
//         <input onChange={(e) => setData(e.target.value)} value={data.heading} />
//         <textarea
//           onChange={(e) => setData(e.target.value)}
//           style={{ height: "55px" }}
//           value={data.description}
//         />
//         <div className="div-button">
//           <button onClick={handleClick}>Change Content</button>
//         </div>
//       </div>
//       <div className="side-content"></div>
//     </section>
//   );
// }

// export default ChangeHomePageContent;
import axios from "axios";
import React, { useEffect, useState } from "react";

function ChangeHomePageContent() {
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://server.theultimateppl.com/api/v1/get_allcontent"
        );

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

  const handleClick = async () => {
    try {
      // Prepare the data to be sent in the PUT request
      const updatedData = {
        heading: data.heading,
        description: data.description,
      };

      // Make a PUT request to update the content
      await axios.put(
        "https://server.theultimateppl.com/api/v1/update_content/1",
        updatedData
      );

      // Log success message or handle response data if needed
      console.log("Content updated successfully!");
    } catch (error) {
      // Handle errors that occurred during the PUT request
      console.error("Error updating content:", error.message);
    }
  };

  return (
    <section className="section">
      <div className="side active">
        <input
          onChange={(e) => setData({ ...data, heading: e.target.value })}
          value={data.heading || ""}
        />
        <textarea
          onChange={(e) => setData({ ...data, description: e.target.value })}
          style={{ height: "55px" }}
          value={data.description || ""}
        />
        <div className="div-button">
          <button onClick={handleClick}>Change Content</button>
        </div>
      </div>
      <div className="side-content"></div>
    </section>
  );
}

export default ChangeHomePageContent;
