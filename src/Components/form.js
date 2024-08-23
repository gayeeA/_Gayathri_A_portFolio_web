import React from "react";
import "./form.css";

const Form = () => {
  return (
    <div className="contact-background">
      <h2>Hi, here you can contact me</h2>
      <div className="contact-container">
        <form>
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Subject" />
          <textarea placeholder="Type your message here"></textarea>
          <button type="submit" className="button">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
