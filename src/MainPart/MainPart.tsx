"use client";

import Image from "next/image";
import "./styles/MainPart.scss";
import { TypeAnimation } from "react-type-animation";
import stickerImage from "../photos/sticker.jpg";

export const MainPart: React.FC = () => {
  return (
    <div id="about" className="mainPart">
      <Image className="stickerImage" src={stickerImage} alt="Hello!" />
      <TypeAnimation
        className="mainText"
        sequence={[
          "I am a Full Stack Developer with 3 years of commercial experience, based in Lviv, Ukraine and ready to work remotely.",
          1000,
        ]}
        wrapper="h1"
        preRenderFirstString
        speed={55}
        style={{ display: "inline-block", color: "white" }}
        repeat={Infinity}
      />
      <a
        href="/business-card/downloads/Hnatyuk_N_Fullstack_Dev_CV_updated.pdf"
        download="Hnatyuk_N_Fullstack_Dev_CV_updated.pdf"
        className="cvButton"
      >
        Download CV
      </a>
    </div>
  );
};
