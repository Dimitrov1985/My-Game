import React from "react";
import "./About.css";
import aboutUs from "../../img/AboutUs.png";

export default function About() {
  return (
    <div className="wrapper">
      <div className="hero-about container">
        <div className="info">
          <h1>Lorem Ipsum is simply dummy text of the printing and.</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard.
          </p>
          <button className="btn">Get in touch</button>
        </div>

        <img src={aboutUs} alt="about us" />
      </div>

      <div className="container work">
        <h2>Why work with us</h2>
        <div className="blocks">

          <div className="block">
            <span className="badge purple">Lorem ipsum</span>
            <h3>Lorem ipsum</h3>
            <p>Lorem Ipsum is simply dummy text…</p>
          </div>

          <div className="block">
            <span className="badge brown">Lorem ipsum</span>
            <h3>Lorem ipsum</h3>
            <p>Lorem Ipsum is simply dummy text…</p>
          </div>

          <div className="block">
            <span className="badge green">Lorem ipsum</span>
            <h3>Lorem ipsum</h3>
            <p>Lorem Ipsum is simply dummy text…</p>
          </div>

        </div>
      </div>
    </div>
  );
}