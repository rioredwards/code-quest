import "./App.css";
import Machine from "./layout/Machine";
import GameContainer from "./layout/GameContainer";
import Sign from "./components/Sign";
import Lever from "./components/Lever";
import { Example } from "./prototypes/Example";
import { Drag } from "./prototypes/Drag";
import { Drag2 } from "./prototypes/Drag2";
import LeverProto from "./prototypes/LeverProto";

const signNames = ["TYPE", "TECH", "TASK", "TIME"];

function App() {
  const signs = signNames.map((signName, id) => {
    return <Sign name={signName} key={id} />;
  });

  const lever = <Lever />;

  return (
    <div className="App">
      <Example>
        {/* <Drag /> */}
        {/* <Drag2 /> */}
        <LeverProto />
      </Example>
      <GameContainer>
        <Machine signs={signs} lever={lever}></Machine>
        {/* </Background> */}
      </GameContainer>
    </div>
  );
}

export default App;
