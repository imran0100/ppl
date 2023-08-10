// import React from "react";
// import image from "../logo/20230712_231252 (1) (1).png";
// import "./Section2.css";
// import ReactScrollAnimation from "react-scroll-animation";
// import "animate.css/animate.min.css"; // Import the animation styles

// function Section2() {
//   return (
//     <div className="section2">
//       <ReactScrollAnimation animateIn="fadeIn" animateOnce={true}>
//         <div className="img-div">
//           <img className="img-phone" src={image} alt="Smartphone" />
//         </div>
//       </ReactScrollAnimation>
//       <div className="section2-right">
//         <h1 className="section2-heading">What Is The Difference?</h1>
//         <p>
//           Apart many European countries, Sweden, Bulgaria, Lithuania, Hungary,
//           Greece, Czech Republic, Italy,Portugal, Austria,Germany, Slovakia,
//           Slovenia, Crotia,France, Iceland, Belgium, Denmark, Serbia,Spain
//           already use ECQB7, possibly also UK; Poland also started to use ECQB
//           7.0 since June 2020. EASA 2021 Database has been released! We strongly
//           recommend checking with your flight school or CAA and find out which
//           database is used for your official exam. EASA has removed a lot of
//           questions for creating the new database but they have also added new
//           chapters. There will be added more new questions, so the difference in
//           question numbers will not be so big. New questions have been added to
//           the new syllabus after receiving students feedback.
//         </p>
//       </div>
//     </div>
//   );
// }

// export default Section2;
import React, { useState, useEffect } from "react";
import image from "../logo/20230712_231252 (1) (1).png";
import "./Section2.css";
import ReactScrollAnimation from "react-scroll-animation";
import "animate.css/animate.min.css"; // Import the animation styles

function Section2() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section2Right = document.querySelector(".section2-right");
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

  return (
    <div className="section2">
      <div className="inside">
        {/* <ReactScrollAnimation animateIn="fadeIn" animateOnce={true}> */}
        <div className={`img-div ${shouldAnimate ? "active" : ""}`}>
          <div className="img-circle">
            <img className="img-phone" src={image} alt="Smartphone" />
          </div>
        </div>
        {/* </ReactScrollAnimation> */}
      </div>

      {/* <div className="section2-right"> */}
      <div className={`section2-right ${shouldAnimate ? "active" : ""}`}>
        <h1 className="section2-heading">What Is The Difference?</h1>
        <p>
          Apart many European countries, Sweden, Bulgaria, Lithuania, Hungary,
          Greece, Czech Republic, Italy,Portugal, Austria,Germany, Slovakia,
          Slovenia, Crotia,France, Iceland, Belgium, Denmark, Serbia,Spain
          already use ECQB7, possibly also UK; Poland also started to use ECQB
          7.0 since June 2020. EASA 2021 Database has been released! We strongly
          recommend checking with your flight school or CAA and find out which
          database is used for your official exam. EASA has removed a lot of
          questions for creating the new database but they have also added new
          chapters. There will be added more new questions, so the difference in
          question numbers will not be so big. New questions have been added to
          the new syllabus after receiving students feedback.
        </p>
      </div>
    </div>
  );
}

export default Section2;
