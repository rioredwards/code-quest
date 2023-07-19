export type AppState = {
  reels: AllReelsState;
};

export type AllReelsState = [ReelState, ReelState, ReelState, ReelState];

export type ReelName = "TYPE" | "TECH" | "TASK" | "TIME";

export enum ReelIdx {
  TYPE = 0,
  TECH = 1,
  TASK = 2,
  TIME = 3,
}

export type ReelState = {
  spinState: SpinState;
  chosenIdx: number | null;
};

export enum SpinState {
  PRE = "preSpin",
  IDLE_START = "idleSpinStart",
  IDLE_LOOP = "idleSpinLoop",
  STOPPING = "stoppingSpin",
  POST = "postSpin",
}

type ChoiceCompatibility = Partial<Record<ReelName, number[]>>;

export type Choice = {
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
