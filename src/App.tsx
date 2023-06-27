import { useState } from "react";
import "./App.css";
import ReelTwo from "./ReelTwo";

const choices = [
  "0 React",
  "1 Typescript",
  "2 Javascript",
  "3 Python",
  "4 Rust",
  "5 Go",
  "6 C++",
  "7 C",
  "8 Java",
  "9 C#",
];

function App() {
  const [spinning, setSpinning] = useState(false);

  return (
    <div className="App">
      <button onClick={() => setSpinning(true)}>Spin</button>
      <button onClick={() => setSpinning(false)}>Stop</button>
      <ReelTwo choices={choices} delay={0} spinning={spinning} />
    </div>
  );
}

export default App;
