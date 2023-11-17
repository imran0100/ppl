// import React, { useState, useEffect } from "react";
// import "./VideoBackground.css"; // Import your CSS file if you have one
// import axios from "axios";
// const ChangePricingPage = () => {
//   const [isProcessing, setIsProcessing] = useState(false);

//   const pricingData = [
//     {
//       title: "Basic",
//       pricing: "99",
//       discount: "Save $9",
//       features: ["One account", "Unlimited songs", "Customized playlist"],
//     },
//     {
//       title: "Pro",
//       pricing: "129",
//       discount: "Save $15",
//       features: ["One account", "Unlimited songs", "Customized playlist"],
//     },
//     {
//       title: "Ultimate",
//       pricing: "149",
//       discount: "Save $25",
//       features: ["Six accounts", "Unlimited songs", "Customized playlist"],
//     },
//   ];

//   const checkout = async (plan) => {
//     setIsProcessing(true);
//     // const url = "http://localhost:5000/api/v1/create-subscription-checkout";
//     const url = "http://13.48.26.232:5000/api/v1/create_subscription_checkout";
//     const headers = {
//       "Content-Type": "application/json",
//     };
//     const data = { customerId: 5, plan: plan };

//     try {
//       const res = await axios.post(url, data, { headers, mode: "cors" });

//       if (res.ok) res.json();

//       const { session } = res.data;
//       console.log(res.data.data.url);
//       console.log(session, "ygughycvgcg");
//       // console.log(session.url);
//       window.location = res.data.data.url;
//       const existingData = JSON.parse(localStorage.getItem("user_322"));
//       const updatedData = { ...existingData, sessionId: session.id };
//       localStorage.setItem("user_322", JSON.stringify(updatedData));
//       // window.location = session.url;
//     } catch (e) {
//       console.log(e.error);
//     } finally {
//       // Reset loading state
//     }
//     console.log("fkasfklasas");
//   };

//   return (
//     <div className="video-background">
//       <video
//         autoPlay
//         loop
//         muted
//         playsInline // For iOS to prevent fullscreen playback
//       >
//         <source src="/pexels_videos_2658998 (1080p).mp4" type="video/mp4" />
//         {/* Add additional sources for other video formats if needed */}
//       </video>
//       {/* Add other content, such as your main content */}
//       <div className="content">
//         <div className="main">
//           <div className="container">
//             <div className="grid active">
//               {pricingData.map((pricingItem, index) => (
//                 <div className="card" key={index}>
//                   <input className="card_title" value={pricingItem.title} />
//                   <p className="pricing">
//                     <span style={{ fontSize: "3rem" }}>$</span>
//                     <input value={pricingItem.pricing} />
//                     <span className="small">/per month</span>
//                   </p>
//                   <input value={pricingItem.discount} />
//                   <hr />
//                   <ul className="features">
//                     {pricingItem.features.map((feature, index) => (
//                       <input key={index} value={feature} />
//                     ))}
//                   </ul>
//                   <a
//                     className="cta_btn"
//                     onClick={() => checkout(Number(pricingItem.pricing))}
//                   >
//                     Buy Now
//                   </a>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//       {isProcessing && (
//         <div className="blur-overlay">
//           <div className="loader">
//             {/* For example, you can display a loading spinner */}
//             <div className="spinner">
//               <h1 style={{ color: "white" }}>Please wait...</h1>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ChangePricingPage;

import React, { useState, useEffect } from "react";
import axios from "axios"; // You may need to install Axios if you haven't already
import "./VideoBackground.css";
// Component for displaying a Pricing Item
function PricingItem({ data, index, onUpdate, onBuyNowClick }) {
  // Function to handle changes in input fields
  const handleChange = (property, newValue) => {
    const updatedData = [...data];
    updatedData[index][property] = newValue;
    onUpdate(updatedData);
  };
  console.log(index, "hii");
  return (
    <div className="card">
      {/* Input field for the title */}
      <input
        className="card_title"
        value={data[index].title}
        onChange={(e) => handleChange("title", e.target.value)}
      />

      {/* Pricing information */}
      <p className="pricing">
        <span style={{ fontSize: "3rem" }}>£</span>
        {/* Input field for pricing */}
        <input
          style={{ width: "6.5rem", height: "3rem", fontSize: "3rem" }}
          value={data[index].pricing}
          onChange={(e) => handleChange("pricing", e.target.value)}
        />
        <span className="small">/per month</span>
      </p>

      {/* Input field for discount */}
      <input
        value={data[index].discount}
        onChange={(e) => handleChange("discount", e.target.value)}
      />
      <hr />

      {/* List of features */}
      <ul className="features">
        {data[index].feature.map((item, featureIndex) => (
          // Input fields for each feature
          <input
            style={{ marginBottom: ".3rem" }}
            key={featureIndex}
            value={item}
            onChange={(e) =>
              handleChange("feature", [
                ...data[index].feature.slice(0, featureIndex),
                e.target.value,
                ...data[index].feature.slice(featureIndex + 1),
              ])
            }
          />
        ))}
      </ul>

      <a className="cta_btn" onClick={() => onBuyNowClick(data[index])}>
        Save Changes
      </a>
    </div>
  );
}

function App() {
  // Initial data

  // State to hold the pricing data
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://server.theultimateppl.com/api/v1/get_allbasic_price"
        );
        console.log(response.data.data, "dahsihdia");
        setData([response.data.data[0]]);
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
  console.log("Data111", data);
  // Function to update the pricing data
  const handleDataUpdate = (newData) => {
    setData(newData);
  };

  // Function to handle the "Buy Now" button click
  const handleBuyNowClick = (item) => {
    // Create an object containing the specific data structure
    const requestData = {
      title: item.title,
      pricing: item.pricing,
      discount: item.discount,
      feature: item.feature,
    };

    // Perform the PUT request here
    axios
      .put(
        `https://server.theultimateppl.com/api/v1/update_basic_price/${item.price_id}`,
        requestData
      )
      .then((response) => {
        // Handle success, e.g., show a success message
        console.log("Data updated successfully:", response.data);
      })
      .catch((error) => {
        // Handle error, e.g., show an error message
        console.error("Error updating data:", error);
      });
    console.log(requestData, "fsjajka");
  };

  return (
    <div className="video-background ">
      <video autoPlay loop muted playsInline>
        <source src="/pexels_videos_2658998 (1080p).mp4" type="video/mp4" />
      </video>

      <div className="content">
        <div className="main">
          <div className="container">
            <div className="grid active">
              {data.map((pricingItem, index) => (
                <PricingItem
                  key={index}
                  data={data}
                  index={index}
                  onUpdate={handleDataUpdate}
                  onBuyNowClick={handleBuyNowClick}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
