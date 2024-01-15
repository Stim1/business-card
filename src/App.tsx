import { Header } from "./Header";
import { MainPart } from "./MainPart";
import "./styles/App.scss";

export const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <MainPart />
    </div>
  );
};

export default App;
