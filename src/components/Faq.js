import React, { useState } from "react";
import "./Faq.css"; // Create a CSS file to style the FAQ component
import Footer from "./Footer";
import logo from "../logo/WhatsApp Image 2023-07-12 at 9.58.35 AM.png";
import { Link, useNavigate } from "react-router-dom";
const Faq = () => {
  const navigate = useNavigate();

  // State to manage the active accordion
  const [activeAccordion, setActiveAccordion] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Helper function to toggle the active accordion
  const toggleAccordion = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  // FAQ data based on the provided HTML code
  const faqData = [
    {
      question: "Why should I choose your training software?",
      answer:
        "Only we can offer you a high standard of questions, support and actuality. We are focusing on frequent updates to ensure a precise approach towards your examination.\nOur customer support is ready to answer your questions all the time and will provide all information in a timely and effective way.",
    },
    {
      question:
        "What happens if I find an error in one of the questions or answers?",
      answer:
        "Please provide us with a detailed explanation why you think the question or the answer is wrong. We will discuss it with our team of experts and get back to you with feedback regarding your concern.\nBut don´t forget that in many cases the answer choices provided by EASA can be ambiguous or questionable. This is based on a well-known deficiency of the EASA exam system, but that is the way the questions appear in the official examinations.",
    },
    {
      question: "Can you offer all EASA Questions that authorities are using?",
      answer:
        "As the content of the ECQB provided by EASA is confidential no provider can offer you a full coverage but we work hard to ensure our trainees have the best chance to practice with the content of the ECQB and we are trying to avoid any unknown questions on the official exam sessions.\nApproximately 95% of the questions are covered by our tool.",
    },
    {
      question: "What payment methods are acceptable?",
      answer:
        "The primary source of payment should be the secure online credit card payment. You can use the following cards: VISA, MASTERCARD, ELECTRON, MAESTRO. The mentioned payment method is the most safe and fastest possibility to receive an access to our training platform. We will provide you with your personal login immediately as soon as you make the online payment.\nThe most frequent problems that might occur (when making an online payment) is the fact that some VISA ELECTRON or MAESTRO cards are blocked by the issuing banks for international or online transactions. In this case we advise our customers to kindly use another credit card (preferably a standard embossed VISA or MASTERCARD).\nThe payment can be also processed via PayPal. In this case, please select American Express from the offered types of credit cards at our web page (it doesn’t matter what card do you actually have). The PayPal button will appear. When you click on it, it will transfer you to PayPal pages, where you can login into your PayPal account and process the payment.\nAs an alternate we also offer offline payment; using a bank transfer directly to our bank account. If you decided to use this method, please, notify us via email for further details.",
    },
    {
      question: "How many people can use my account?",
      answer:
        "The registration is always just valid for a single user only. Sharing of user name and password is not allowed and it will result in canceling your subscription.",
    },
    {
      question: "On which browser do ATPL Questions website works?",
      answer:
        "ATPL Questions website has been tested on Chrome, Firefox Mozilla and Safari.\nATPL Questions is also optimized for mobile devices, Ipad and tablet.",
    },
  ];

  return (
    <>
      <div id="container-nav" className={`navbar ${isOpen ? "open" : ""}`}>
        <nav className={`navbar ${isOpen ? "open" : ""}`}>
          <img
            onClick={() => navigate("/")}
            className="link-item"
            src={logo}
            alt="logo"
          />
          <div className="menu-icon" onClick={toggleMenu}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>
          <div className={`nav-links ${isOpen ? "show" : ""}`}>
            <Link to="/" className="link-item">
              HOME
            </Link>
            <Link to="/faq" className="link-item">
              FAQ
            </Link>
            <Link to="/contact" className="link-item">
              CONTACT US
            </Link>

            {localStorage.getItem("user_322") ? (
              <Link to="/dashboard" className="link-item">
                {localStorage.getItem("user_322") ? "GO TO DASHBOARD" : "LOGIN"}
              </Link>
            ) : (
              <Link to="/login" className="link-item">
                {localStorage.getItem("user_322") ? "GO TO DASHBOARD" : "LOGIN"}
              </Link>
            )}
            {!localStorage.getItem("user_322") && (
              <Link to="/signup" className="link-item">
                REGISTER
              </Link>
            )}
          </div>
        </nav>
      </div>
      <div className="faq-container">
        {faqData.map((faq, index) => (
          <div className="faq-item" key={index}>
            <h3 className="faq-question" onClick={() => toggleAccordion(index)}>
              {faq.question}
            </h3>
            {activeAccordion === index && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
      {/* <Footer /> */}
    </>
  );
};

export default Faq;
