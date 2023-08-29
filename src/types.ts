export type ReelName = "TYPE" | "TECH" | "TASK" | "TIME";

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
