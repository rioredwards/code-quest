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

export type SpinState =
  | "PRE"
  | "IDLE_START"
  | "IDLE_LOOP"
  | "STOPPING"
  | "POST";

export type ChallengeState = "NONE" | "CREATING" | "CREATED" | "DISPLAYED";

type ChoiceCompatibility = Partial<Record<ReelName, number[]>>;

export type Choice = {
  id: number;
  name: string;
  sentenceName: string;
  compatibleWith: ChoiceCompatibility;
};

// type SpinLight = {
//   spinState: SpinState;
// };

// type Lever = {
//   spinState: SpinState;
// };

// type LockSwitch = {
//   isLocked: boolean;
// };

// type Challenge = {
//   [key in ReelName]: number | null;
// };
