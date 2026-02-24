import React, { useState } from "react";
import "./Email.css";

const Email = () => {
  const [email, setEmail] = useState("");

  const checkEmail = () => {
    if (email.includes("@") && email.includes(".")) {
      alert("Thank you for subscribing!");
    } else {
      alert("Please enter a valid email address.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      checkEmail();
    }
  };

  return (
    <div className="email container">
      <h3>Lorem ipsum</h3>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry.
      </p>

      <div className="block">
        <div>
          <h4>Stay in the loop</h4>
          <p>
            Subscribe to receive the latest news and updates about TDA. We
            promise not to spam you!
          </p>
        </div>

        <div className="email-input">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={handleKeyPress}   
          />
          <button onClick={checkEmail}>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Email;