export type ReelName = 'TYPE' | 'TECH' | 'TASK' | 'TIME';

export type SpinState = 'PRE' | 'IDLE_START' | 'IDLE_LOOP' | 'STOPPING' | 'POST';

type ChoiceCompatibility = Partial<Record<ReelName, number[] | undefined>>;

export type Choice = {
  id: number;
  name: string;
  sentenceName: string;
  compatibleWith: ChoiceCompatibility;
};
