import React from "react";
import "./styles/Technologies.scss";
import react from "../images/png/png-transparent-aperture-laboratories-science-technology-laboratory-portal-science-blue-text-computer-thumbnail.png";
import redux from "../images/png/Redux.png";
import java from "../images/png/java-logo-1.png";
import express from "../images/png/express-js.png";
import html from "../images/png/1532556.png";
import css from "../images/png/CSS3_logo.svg.png";
import node from "../images/svg/nodejs-logo-vector.svg";
import typescript from "../images/png/5968381.png";

export const Technologies: React.FC = () => {
  return (
    <header className="header">
      <div className="ticker-container ticker-wrapper__first-half">
        <img src={react} alt="BorisCooper" className="ticker-image" />
        <p className="ticker-text">React</p>
        <img src={redux} alt="BorisCooper" className="ticker-image" />
        <p className="ticker-text">Redux</p>
        <img src={java} alt="BorisCooper" className="ticker-image" />
        <p className="ticker-text">Java</p>
        <img src={express} alt="BorisCooper" className="ticker-image" />
        <p className="ticker-text">Express.js</p>
      </div>
      <div className="ticker-container ticker-wrapper__second-half">
        <img src={html} alt="BorisCooper" className="ticker-image" />
        <p className="ticker-text">HTML</p>
        <img src={css} alt="BorisCooper" className="ticker-image" />
        <p className="ticker-text">CSS3</p>
        <img src={node} alt="BorisCooper" className="ticker-image" />
        <p className="ticker-text">Node.js</p>
        <img src={typescript} alt="BorisCooper" className="ticker-image" />
        <p className="ticker-text">Typescript</p>
      </div>
    </header>
  );
};
