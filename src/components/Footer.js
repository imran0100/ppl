import React from "react";
import logo from "../logo/WhatsApp Image 2023-07-12 at 9.58.35 AM.png";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
// import { icon } from "@fortawesome/fontawesome-svg-core/import.macro";
function Footer() {
  return (
    <div className="footer">
      <img src={logo} alt="logo" />
      <div style={{ display: "flex", gap: ".3rem" }}>
        <FaFacebook className="facebook" size={30} />
        <FaTwitter className="twitter" size={30} />
        <FaInstagram className="instagram" size={30} />
      </div>
      <p>Copyright © 2017 - 2023 The Ultimate PPL Guide</p>
    </div>
  );
}

export default Footer;
