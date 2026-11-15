"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";
import Slider from "react-slick";
import "./styles/PetProjects.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import arrowUpRight from "../images/svg/arrow-up-right.svg";
import gadetsBig from "../images/png/gadgets-big.png";
import gadetsSmall from "../images/png/gatdets-small.png";
import nothingBig from "../images/png/nothing-big.png";
import nothingSmall from "../images/png/nothing-small.png";

const mobileCarouselQuery = "(max-width: 1024px)";

const subscribeToViewport = (onChange: () => void) => {
  const media = window.matchMedia(mobileCarouselQuery);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
};

const getMobileViewport = () => window.matchMedia(mobileCarouselQuery).matches;
const getServerViewport = () => false;

export const PetProjects = () => {
  const isMobileViewport = useSyncExternalStore(
    subscribeToViewport,
    getMobileViewport,
    getServerViewport,
  );
  const settings = {
    className: "center",
    infinite: true,
    centerPadding: "60px",
    slidesToShow: isMobileViewport ? 1 : 2,
    swipeToSlide: true,
    afterChange: function (index: number) {
      console.log(
        `Slider Changed to: ${index + 1}, background: #222; color: #bada55`,
      );
    },
  };

  return (
    <div id="work" className="swipe-to-slide">
      <Slider {...settings}>
        <div className="slide">
          <a
            className="link-on-pet-project"
            href="https://fe-aug23-team3.github.io/product_catalog/#/"
          >
            <Image
              src={arrowUpRight}
              width={35}
              height={35}
              alt="Arrow Up Right"
              className="slide-arrow"
            />
            <div className="images-container">
              <Image
                src={gadetsBig}
                alt="Gadget store reference big"
                className="gadget-store-reference big"
              />
              <Image
                src={gadetsSmall}
                alt="Gadget store reference small"
                className="gadget-store-reference small"
              />
            </div>
            <h3 className="slide-header">Nice-Gadgets Hub</h3>
            <p className="slider-content">
              A cutting-edge online store showcasing the latest in Apple
              technology. Crafted with React, TypeScript, and Node.js, it offers
              a sleek and dynamic shopping experience for tech enthusiasts.
            </p>
          </a>
        </div>
        <div className="slide">
          <a
            className="link-on-pet-project"
            href="https://stim1.github.io/layout_landing-page/"
          >
            <Image
              src={arrowUpRight}
              width={35}
              height={35}
              alt="Arrow Up Right"
              className="slide-arrow"
            />
            <div className="images-container">
              <Image
                src={nothingBig}
                alt="nothing-store-reference big"
                className="nothing-store-reference big"
              />
              <Image
                src={nothingSmall}
                alt="nothing-store-reference small"
                className="nothing-store-reference small"
              />
            </div>
            <h3 className="slide-header">
              Website business card for “Nothing”
            </h3>
            <p className="slider-content">
              A concise HTML and CSS- based landing page, serving as the digital
              business card for Nothing—a company that values simplicity and
              modernity.{" "}
            </p>
          </a>
        </div>
        <div className="slide">
          <a
            className="link-on-pet-project"
            href="https://fe-aug23-team3.github.io/product_catalog/#/"
          >
            <Image
              src={arrowUpRight}
              width={35}
              height={35}
              alt="Arrow Up Right"
              className="slide-arrow"
            />
            <div className="images-container">
              <Image
                src={gadetsBig}
                alt="Gadget store reference big"
                className="gadget-store-reference big"
              />
              <Image
                src={gadetsSmall}
                alt="Gadget store reference small"
                className="gadget-store-reference small"
              />
            </div>
            <h3 className="slide-header">Nice-Gadgets Hub</h3>
            <p className="slider-content">
              A cutting-edge online store showcasing the latest in Apple
              technology. Crafted with React, TypeScript, and Node.js, it offers
              a sleek and dynamic shopping experience for tech enthusiasts.
            </p>
          </a>
        </div>
        <div className="slide">
          <a
            className="link-on-pet-project"
            href="https://stim1.github.io/layout_landing-page/"
          >
            <Image
              src={arrowUpRight}
              width={35}
              height={35}
              alt="Arrow Up Right"
              className="slide-arrow"
            />
            <div className="images-container">
              <Image
                src={nothingBig}
                alt="nothing-store-reference big"
                className="nothing-store-reference big"
              />
              <Image
                src={nothingSmall}
                alt="nothing-store-reference small"
                className="nothing-store-reference small"
              />
            </div>
            <h3 className="slide-header">
              Website business card for “Nothing”
            </h3>
            <p className="slider-content">
              A concise HTML and CSS- based landing page, serving as the digital
              business card for Nothing—a company that values simplicity and
              modernity.{" "}
            </p>
          </a>
        </div>
      </Slider>
    </div>
  );
};
