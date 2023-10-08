import React, { useState, useEffect } from "react";
import image from "../logo/20230712_231252 (1) (1).png";
import "./Section2.css";
import axios from "axios";
// Import the animation styles

function ChangeWhatsDifferentPage() {
  const [data, setData] = useState({});
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://server.theultimateppl.com/api/v1/get_allcontent"
        );

        setData(response.data.data[1]);
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
        "https://server.theultimateppl.com/api/v1/update_content/2",
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
    <div className="section2">
      <div className="inside">
        {/* <ReactScrollAnimation animateIn="fadeIn" animateOnce={true}> */}
        <div className="img-div active">
          <div className="img-circle">
            <img className="img-phone" src={image} alt="Smartphone" />
          </div>
        </div>
        {/* </ReactScrollAnimation> */}
      </div>

      {/* <div className="section2-right"> */}
      <div className="section2-right active">
        <input
          onChange={(e) => setData({ ...data, heading: e.target.value })}
          value={data.heading || ""}
        />
        <textarea
          onChange={(e) => setData({ ...data, description: e.target.value })}
          style={{ height: "200px" }}
          value={data.description || ""}
        />
        <div style={{ textAlign: "center" }}>
          <button onClick={handleClick} className="ChangeUi">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChangeWhatsDifferentPage;
