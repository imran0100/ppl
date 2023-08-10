import React, { useState, useEffect } from "react";
import logo from "../logo/WhatsApp Image 2023-07-12 at 9.58.35 AM.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
// import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
function Footer() {
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section2Right = document.querySelector(".footer");
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
    <div className="footer">
      <div className={`footer-anime ${shouldAnimate ? "active" : ""}`}>
        {" "}
        <img src={logo} alt="logo" />
        <div style={{ display: "flex", gap: ".3rem" }}>
          <FaFacebook className="facebook" size={30} />
          <FaTwitter className="twitter" size={30} />
          <FaInstagram className="instagram" size={30} />
        </div>
        <p>Copyright © 2017 - 2023 The Ultimate PPL Guide</p>
      </div>
    </div>
  );
}

export default Footer;
