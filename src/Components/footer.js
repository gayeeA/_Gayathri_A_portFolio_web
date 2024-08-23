import "./footer.css";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a
          href="https://www.linkedin.com/in/ande-gayathri-9b536524a"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
        <a
          href="https://github.com/gayeeA"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </div>
      <div className="footer-info">
        <p>&copy; 2024 Your Gayathri_Ande. All rights reserved.</p>
        <p>Email: gayathriande20@gmail.com</p>
        <p>Phone: 9618574968</p>
      </div>
    </footer>
  );
};

export default footer;
