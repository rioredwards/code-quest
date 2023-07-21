import { useState } from "react";

export enum SpinState {
  PRE,
  IDLE_START,
  IDLE_LOOP,
  STOPPING,
  POST,
}

export default function useSpinState() {
  const [spinState, setSpinState] = useState(SpinState.PRE);

  function cycleSpinState() {
    console.log("spinState", spinState);
    setSpinState((latest) => (latest + 1) % 5);
  }

  return [spinState, cycleSpinState] as const;
}
