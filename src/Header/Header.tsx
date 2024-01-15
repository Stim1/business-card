import { useState } from "react";
import "./styles/Header.scss";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="header">
      <h3 className="logo">
        Nazar
        <br />
        Hnatyuk
      </h3>
      <nav className="navBar">
        <li className="navLink">About</li>
        <li className="navLink">Work</li>
        <li className="navLink">Skills</li>
      </nav>
      <div className="menuContainer">
        <button onClick={() => setIsOpen(!isOpen)} className="menuButton">
          + Get in touch
        </button>
        <ul className={`menu ${isOpen ? "menuOpen" : "menuClosed"}`}>
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
              Linkedin
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
