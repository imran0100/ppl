// import React from "react";
// import "./PricingPage.css";
// // import ReactScrollAnimation from "react-scroll-animation";
// import "animate.css/animate.min.css"; // Import the animation styles
// import axios from "axios";

// const PricingPage = () => {
//   const data = [
//     { id: 1, title: "Basic", price: "99" },
//     { id: 2, title: "Pro", price: "129" },
//     { id: 3, title: "premium", price: "149" },
//   ];
//   let user = localStorage.getItem("user");
//   let id = user ? JSON.parse(user).id : null;

//   // const checkout = (plan) => {
//   //   fetch("http://localhost:5000/api/v1/create-subscription-checkout", {
//   //     method: "POST",
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //     },
//   //     mode: "cors",
//   //     body: JSON.stringify({ plan: plan, customerId: id }),
//   //   })
//   //     .then((res) => {
//   //       if (res.ok) res.json();
//   //       console.log(res);
//   //       return res.json().then((json) => Promise.reject(json));
//   //     })
//   //     .then(({ session }) => {
//   //       console.log(session.url, "ugugug");
//   //       window.location = session.url;
//   //     })
//   //     .catch((e) => {
//   //       console.log(e.error);
//   //     });
//   // };
// const checkout = async (plan) => {
//   const url = "http://13.127.37.70:5000/api/v1/create_subscription_checkout";
//   const headers = {
//     "Content-Type": "application/json",
//   };
//   const data = { plan: plan, customerId: id };

//   try {
//     const res = await axios.post(url, data, { headers, mode: "cors" });

//     if (res.ok) res.json();

//     // const { session } = res.data;
//     // console.log(session, "ygughycvgcg");
//     window.location = res.data.data.url;
//   } catch (e) {
//     console.log(e.error);
//   }
// };

//   return (
//     <div className="Pricing-Section">
//       <h2>Choose Pricing</h2>
//       {/* <ReactScrollAnimation animateIn="slideInRight" animateOnce={true}> */}
//       <div className="pricing-page">
//         {data.map((item) => {
//           return (
//             <div className="pricing-plan">
//               <h2 className="plan-name">{item.title}</h2>
//               <p className="plan-price">{item.price}/month</p>
//               <ul className="plan-features">
//                 <li>Feature 1</li>
//                 <li>Feature 2</li>
//                 <li>Feature 3</li>
//               </ul>
//               <div className="button-wrapper">
//                 <button
//                   onClick={() => checkout(Number(item.price))}
//                   className="plan-button"
//                 >
//                   Select Plan
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//         {/* <ReactScrollAnimation animateIn="zoomIn" animateOnce={true}> */}

//         {/* </ReactScrollAnimation> */}
//         {/* <ReactScrollAnimation animateIn="slideInLeft" animateOnce={true}> */}

//         {/* </ReactScrollAnimation> */}
//       </div>
//       {/* </ReactScrollAnimation> */}
//     </div>
//   );
// };

// export default PricingPage;
/////////////////////////////////////////////////////////////////////////////
import React from "react";
import "./PricingPage.css";
import axios from "axios";
const PricingPage = () => {
  const pricingData = [
    {
      title: "Basic",
      pricing: "99",
      discount: "Save $9",
      features: ["One account", "Unlimited songs", "Customized playlist"],
    },
    {
      title: "Pro",
      pricing: "129",
      discount: "Save $15",
      features: ["One account", "Unlimited songs", "Customized playlist"],
    },
    {
      title: "Ultimate",
      pricing: "149",
      discount: "Save $25",
      features: ["Six accounts", "Unlimited songs", "Customized playlist"],
    },
  ];
  const checkout = async (plan) => {
    const url = "http://localhost:5000/api/v1/create-subscription-checkout";
    const headers = {
      "Content-Type": "application/json",
    };
    const data = { plan: plan };

    try {
      const res = await axios.post(url, data, { headers, mode: "cors" });

      if (res.ok) res.json();

      const { session } = res.data;
      console.log(session, "ygughycvgcg");
      // console.log(session.url);
      const existingData = JSON.parse(localStorage.getItem("user_322"));
      const updatedData = { ...existingData, sessionId: session.id };
      localStorage.setItem("user_322", JSON.stringify(updatedData));
      window.location = session.url;
      // window.location = res.data.data.url;
    } catch (e) {
      console.log(e.error);
    }
  };
  return (
    <div className="main">
      <div className="container">
        <div className="grid">
          {pricingData.map((pricingItem, index) => (
            <div className="card" key={index}>
              <h2 className="card_title">{pricingItem.title}</h2>
              <p className="pricing">
                <span style={{ fontSize: "3rem" }}>$</span>
                {pricingItem.pricing}
                <span className="small">/per month</span>
              </p>
              <p>{pricingItem.discount}</p>
              <hr />
              <ul className="features">
                {pricingItem.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              <a
                className="cta_btn"
                onClick={() => checkout(Number(pricingItem.pricing))}
              >
                Buy Now
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPage;
//
