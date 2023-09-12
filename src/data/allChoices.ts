import { Choice, ReelName } from '../types';
import { taskChoices } from './choices/taskChoices';
import { techChoices } from './choices/techChoices';
import { timeChoices } from './choices/timeChoices';
import { typeChoices } from './choices/typeChoices';

type AllChoices = {
  [K in ReelName]: readonly Choice[];
};

export const allChoices: AllChoices = {
  TYPE: typeChoices,
  TASK: taskChoices,
  TECH: techChoices,
  TIME: timeChoices,
};
