import { useEffect, useState } from "react";
import "./styles/Header.scss";

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isPhone, setIsPhone] = useState(window.innerWidth < 600);

  useEffect(() => {
    const handleResize = () => {
      setIsPhone(window.innerWidth < 600);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
        <button onClick={() => setIsOpen(!isOpen)} className="menuButton">
          {isPhone ? "+" : "+ Get in touch"}
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
