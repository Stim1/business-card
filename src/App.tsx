import { Coursor } from "./Coursor/Coursor";
import { Header } from "./Header";
import { MainPart } from "./MainPart";
import { PetProjects } from "./PetProjects";
import "./styles/App.scss";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <div className="mainPartContainer">
        <MainPart />
      </div>
      <div className="slider">
        <PetProjects />
      </div>
      <Coursor />
    </div>
  );
};

export default App;
