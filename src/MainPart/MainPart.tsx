import "./styles/MainPart.scss";
import { TypeAnimation } from "react-type-animation";

export const MainPart: React.FC = () => {
  return (
    <TypeAnimation
      className="mainText"
      sequence={[
        "I am a Full Stack Developer based in Lviv, Ukraine. I'm ready to join a new team and help bring new ideas and a fresh perspective to our projects.",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "3em", display: "inline-block", color: "white", }}
      repeat={Infinity}
    />
  );
};
