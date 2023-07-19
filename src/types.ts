export type ReelName = "TYPE" | "TECH" | "TASK" | "TIME";

export type AppState = {
  reels: AllReelsState;
};

export type AllReelsState = {
  [key in ReelName]: ReelState;
};

export type ReelState = {
  choices: Choice[];
  spinState: SpinState;
  isUserLocked: boolean;
  chosenIdx: number | null;
};

export enum SpinState {
  PRE = "preSpin",
  IDLE_START = "idleSpinStart",
  IDLE_LOOP = "idleSpinLoop",
  STOPPING = "stoppingSpin",
  POST = "postSpin",
}

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
