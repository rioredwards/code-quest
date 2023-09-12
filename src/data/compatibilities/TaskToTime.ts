import { ChoiceMap } from '../../utils/choiceRelations';
import { TaskChoiceIdx } from '../choiceIdxs/taskIdxs';
import { TimeChoiceIdx } from '../choiceIdxs/timeIdxs';
import { logChoiceCompatibilities } from '../../logging';

const { THIRTY_M, FORTY_FIVE_M, ONE_H, NINETY_M, TWO_H, THREE_H, FOUR_H, FIVE_H, SIX_H, INFINITY } =
  TimeChoiceIdx;

const {
  TWO_SUM,
  VALID_PALINDROME,
  REVERSE_LINKED_LIST,
  FREQUENT_ELEMENTS,
  MOST_WATER,
  DEAR_DIARY,
  WAY_WITH_WORDS,
  POMODORO,
  RAIN_CHECK,
  PUSH_THE_ENVELOPE,
  BIG_MAC,
  CHARACTER_CREATOR,
  SPACE_RACE,
  CALCULATOR,
  PRICE_IS_RIGHT,
  HEAD_COUNT,
  RETAIL_THERAPY,
  QUERY_STRING_QUEST,
  SHARING_IS_CARING,
  HELLO_WORLD,
  HOT_TAKES,
  MOVIE_LIST,
  TOP_SECRET,
  ADD_TO_CART,
  BOOKWORM,
  BIG_DATA,
  CLOUDCEPTION,
  CORS_CONTROL,
  TICKET_TO_RIDE,
  MOOD_MATCHER,
} = TaskChoiceIdx;

const leetCodeTimes = {
  easy: [THIRTY_M, FORTY_FIVE_M, ONE_H],
  medium: [FORTY_FIVE_M, ONE_H, NINETY_M],
};

const CLITimes = {
  easy: [ONE_H, NINETY_M, TWO_H],
  medium: [NINETY_M, TWO_H, THREE_H],
  hard: [TWO_H, THREE_H, FOUR_H],
};

const frontEndTimes = {
  easy: [NINETY_M, TWO_H, THREE_H],
  medium: [THREE_H, FOUR_H, FIVE_H],
  hard: [FIVE_H, SIX_H, INFINITY],
};

const fullstackTimes = {
  easy: [THREE_H, FOUR_H, FIVE_H],
  medium: [FOUR_H, FIVE_H, SIX_H],
  hard: [FIVE_H, SIX_H, INFINITY],
};

const backendTimes = {
  easy: [TWO_H, THREE_H, FOUR_H],
  medium: [THREE_H, FOUR_H, FIVE_H],
  hard: [FIVE_H, SIX_H, INFINITY],
};

const cloudTimes = {
  easy: [TWO_H, THREE_H, FOUR_H],
  medium: [THREE_H, FOUR_H, FIVE_H],
  hard: [FIVE_H, SIX_H, INFINITY],
};

export const taskToTime: ChoiceMap = {
  [TWO_SUM]: leetCodeTimes.easy,
  [VALID_PALINDROME]: leetCodeTimes.easy,
  [REVERSE_LINKED_LIST]: leetCodeTimes.medium,
  [FREQUENT_ELEMENTS]: leetCodeTimes.medium,
  [MOST_WATER]: leetCodeTimes.medium,
  [DEAR_DIARY]: CLITimes.easy,
  [WAY_WITH_WORDS]: CLITimes.easy,
  [POMODORO]: CLITimes.easy,
  [RAIN_CHECK]: CLITimes.medium,
  [PUSH_THE_ENVELOPE]: CLITimes.hard,
  [BIG_MAC]: frontEndTimes.easy,
  [CHARACTER_CREATOR]: frontEndTimes.medium,
  [SPACE_RACE]: frontEndTimes.medium,
  [CALCULATOR]: frontEndTimes.medium,
  [PRICE_IS_RIGHT]: frontEndTimes.hard,
  [HEAD_COUNT]: fullstackTimes.easy,
  [RETAIL_THERAPY]: fullstackTimes.medium,
  [QUERY_STRING_QUEST]: fullstackTimes.medium,
  [SHARING_IS_CARING]: fullstackTimes.hard,
  [HELLO_WORLD]: fullstackTimes.hard,
  [HOT_TAKES]: backendTimes.easy,
  [MOVIE_LIST]: backendTimes.easy,
  [TOP_SECRET]: backendTimes.medium,
  [ADD_TO_CART]: backendTimes.hard,
  [BOOKWORM]: backendTimes.hard,
  [BIG_DATA]: cloudTimes.easy,
  [CLOUDCEPTION]: cloudTimes.easy,
  [CORS_CONTROL]: cloudTimes.easy,
  [TICKET_TO_RIDE]: cloudTimes.medium,
  [MOOD_MATCHER]: cloudTimes.hard,
};

logChoiceCompatibilities(taskToTime, TaskChoiceIdx, TimeChoiceIdx);
