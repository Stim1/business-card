"use client";

import { useEffect, useRef, useState } from "react";
import "./styles/Header.scss";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        toggleRef.current?.focus();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="header">
      <h3 className="logo">
        Nazar
        <br />
        Hnatyuk
      </h3>
      <nav className="navBar">
        <a href="#about" className="navLink">
          About
        </a>
        <a href="#work" className="navLink">
          Work
        </a>
        <a href="#skills" className="navLink">
          Skills
        </a>
      </nav>
      <div className="menuContainer">
        <button
          ref={toggleRef}
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="menuButton"
          aria-label="Get in touch"
          aria-expanded={isOpen}
          aria-controls="contact-links"
        >
          <span aria-hidden="true">+</span>
          <span className="menuButtonLabel">&nbsp;Get in touch</span>
        </button>
        <ul id="contact-links" className="menu" hidden={!isOpen}>
          <li className="menuItem">
            <a className="menuLink" href="mailto:hnatyuk.nazariy@gmail.com">
              Email
            </a>
          </li>
          <li className="menuItem">
            <a
              className="menuLink"
              href="https://www.linkedin.com/in/nazar-hnatyuk-48699917b/"
            >
              LinkedIn
            </a>
          </li>
          <li className="menuItem">
            <a className="menuLink" href="https://t.me/Nazar_Hnatyuk">
              Telegram
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};
