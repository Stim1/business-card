import "./styles/Footer.scss";

export const Footer: React.FC = () => {
  return (
    <div className="footerContent">
      <div className="leftContent">
        <div className="nameThurname">2024 Nazar Hnatyuk</div>
        <ul className="links-list">
          <li className="telegram socialLink">
            <a href="https://t.me/Nazar_Hnatyuk">https://t.me/Nazar_Hnatyuk</a>
          </li>
          <li className="linkedin socialLink">
            <a href="https://www.linkedin.com/in/nazar-hnatyuk-48699917b/">
              Nazar Hnatyuk
            </a>
          </li>
          <li className="github socialLink">
            <a href="https://github.com/Stim1">github.com/Stim1</a>
          </li>
          <li className="facebook socialLink">
            <a href="https://www.facebook.com/nazar.hnatyuk/">Nazar Hnatyuk</a>
          </li>
        </ul>
      </div>

      <a
        className="cityName"
        href="https://www.google.com/maps/place/Lviv,+Lviv+Oblast/"
        target="_blank"
        rel="noopener noreferrer"
      >
        Lviv, Ukraine
      </a>
    </div>
  );
};
