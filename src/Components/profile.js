import "./profile.css";
import React from "react";
import Pro_imp from "../asserts/profile.jpg";

const Profile = () => {
  return (
    <div className="About">
      <div className="mask"></div>
      <div className="About_me">
        <h2>About</h2>
        <div className="basic">
          <img className="prof" src={Pro_imp} alt="Profile" />
          <ul>
            <li>Full name : A Gayathri </li>
            <li>Date of Birth: February 20, 2004</li>
            <li>Email: gayathriande20@gmail.com</li>
            <li>Phone: 9618574968</li>
            <li>
              Location: 18-8-22/9E, MADHURA NAGAR Tirupati, Andhra Pradesh,
              India - 517501
            </li>
          </ul>
        </div>
        <div className="download_a">
          <a href="/asserts/GAYATHRI_ANDE_RESUME.docx" download>
            Download CV
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
