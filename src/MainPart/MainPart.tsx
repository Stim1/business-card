import "./styles/MainPart.scss";
import { TypeAnimation } from "react-type-animation";
import stickerImage from "../photos/sticker.jpg";

export const MainPart: React.FC = () => {
  return (
    <div className="mainPart">
      <img className="stickerImage" src={stickerImage} alt="Hello!" />
      <TypeAnimation
        className="mainText"
        sequence={[
          "I am a Full Stack Developer based in Lviv, Ukraine. I'm ready to join a new team and help bring new ideas and a fresh perspective to our projects.",
          1000,
        ]}
        wrapper="span"
        speed={55}
        style={{ display: "inline-block", color: "white" }}
        repeat={Infinity}
      />
      <a
        href="https://drive.google.com/file/d/1Fm6TDvcE1eSieowYl8h6LlIuJ0RvfsSl/view"
        download="Hnatyuk_N_Fullstack_Dev_CV.pdf"
        className="cvButton"
      >
        Download CV
      </a>
    </div>
  );
};
