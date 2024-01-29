import { Coursor } from "./Coursor/Coursor";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { MainPart } from "./MainPart";
import { PetProjects } from "./PetProjects";
import { Technologies } from "./Technologies/Technologies";
import { TechnologiesPart } from "./TechnologiesPart";
import "./styles/App.scss";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Coursor />
      <Header />
      <div className="mainPartContainer">
        <MainPart />
      </div>
      <div className="slider">
        <PetProjects />
      </div>
      <div className="technologiesPartContainer">
        <TechnologiesPart />
      </div>
      <div className="technologiesContainer">
        <Technologies />
      </div>
      <div className="footerContainer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
