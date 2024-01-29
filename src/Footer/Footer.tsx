import "./styles/Footer.scss";

export const Footer: React.FC = () => {
  return (
    <div className="footerContent">
      <div className="leftContent">
        <div className="nameThurname">2024 Nazar Hnatyuk</div>
        <ul className="links-list">
          <li className="telegram">
            <a href="https://link1.com">https://t.me/Nazar_Hnatyuk</a>
          </li>
          <li className="linkedin">
            <a href="https://link2.com">Nazar Hnatyuk</a>
          </li>
          <li className="github">
            <a href="https://link3.com">github.com/Stim1</a>
          </li>
          <li className="facebook">
            <a href="https://link3.com">Nazar Hnatyuk</a>
          </li>
        </ul>
      </div>
      <div className="cityName">Lviv, Ukraine</div>
    </div>
  );
};
