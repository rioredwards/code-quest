import { SpinState, ReelName } from "./App";

type App = {
  reels: Reels;
};

type Reels = {
  [key in ReelName]: Reel;
};

type Reel = {
  choices: Choice[];
  spinState: SpinState;
  isUserLocked: boolean;
  chosenIdx: number | null;
};

type ChoiceCompatibility = {
  [key in ReelName]: number[];
};

type Choice = {
  id: number;
  name: string;
  sentenceName: string;
  compatibleWith: ChoiceCompatibility;
};

type SpinLight = {
  spinState: SpinState;
};

type Lever = {
  spinState: SpinState;
};

type LockSwitch = {
  isLocked: boolean;
};

type Challenge = {
  [key in ReelName]: number | null;
};
