import Image from "next/image";
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
    <div className="technologiesTicker">
      <div className="ticker-container ticker-wrapper__first-half">
        <Image src={react} alt="React" className="ticker-image" />
        <p className="ticker-text">React</p>
        <Image src={redux} alt="Redux" className="ticker-image" />
        <p className="ticker-text">Redux</p>
        <Image src={java} alt="Java" className="ticker-image" />
        <p className="ticker-text">Java</p>
        <Image src={express} alt="Express.js" className="ticker-image" />
        <p className="ticker-text">Express.js</p>
      </div>
      <div className="ticker-container ticker-wrapper__second-half">
        <Image src={html} alt="HTML5" className="ticker-image" />
        <p className="ticker-text">HTML</p>
        <Image src={css} alt="CSS3" className="ticker-image" />
        <p className="ticker-text">CSS3</p>
        <Image
          src={node}
          width={80}
          height={80}
          alt="Node.js"
          className="ticker-image"
        />
        <p className="ticker-text">Node.js</p>
        <Image src={typescript} alt="TypeScript" className="ticker-image" />
        <p className="ticker-text">Typescript</p>
      </div>
    </div>
  );
};
