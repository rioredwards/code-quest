import "./App.css";
import Machine from "./layout/Machine";
import GameContainer from "./layout/GameContainer";
import Sign from "./components/Sign";
import Lever from "./components/Lever";
import SpinLight from "./components/SpinLight";
import { Example } from "./prototypes/Example";
import LockSwitchProto from "./prototypes/LockSwitchProto";

export enum SpinMode {
  "preSpin",
  "midSpin",
  "postSpin",
}

const signNames = ["TYPE", "TECH", "TASK", "TIME"];
const tempSpinModes = [
  SpinMode.preSpin,
  SpinMode.midSpin,
  SpinMode.postSpin,
  SpinMode.postSpin,
];

function App() {
  const signs = signNames.map((signName, id) => {
    return <Sign name={signName} key={id} />;
  });

  const lever = <Lever />;

  const lights = tempSpinModes.map((mode, id) => {
    return <SpinLight mode={mode} key={id} />;
  });

  return (
    <div className="App">
      <Example>
        <LockSwitchProto />
      </Example>
      {/* <GameContainer>
        <Machine signs={signs} lights={lights} lever={lever}></Machine>
      </GameContainer> */}
    </div>
  );
}

export default App;
