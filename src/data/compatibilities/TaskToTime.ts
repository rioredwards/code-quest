import { ValuesOf } from "../../utils/utilityTypes";
import { TaskChoiceIdx } from "../choiceIdxs/taskIdxs";
import { TimeChoiceIdx } from "../choiceIdxs/timeIdxs";

type TaskToTime = {
  [key in `${ValuesOf<typeof TaskChoiceIdx>}`]: TimeChoiceIdx[];
};

const {
  THIRTY_M,
  FORTY_FIVE_M,
  ONE_H,
  NINETY_M,
  TWO_H,
  THREE_H,
  FOUR_H,
  FIVE_H,
  SIX_H,
  INFINITY,
} = TimeChoiceIdx;

const {
  TWO_SUM,
  VALID_PALINDROME,
  REVERSE_LINKED_LIST,
  FREQUENT_ELEMENTS,
  MOST_WATER,
  QUICK_NOTE,
  WORD_COUNT,
  FILE_FINDER,
  TEMPERATURE_CHECK,
  DO_NOT_DISTURB,
  LANDING_PAGE,
  CHARACTER_CREATOR,
  PHOTO_CAROUSEL,
  CALCULATOR,
  GIPHY_TV,
  SITE_VISITS,
  NOTES_APP,
  COLOR_COLLAGE,
  SOCIAL_MEDIA,
  CHATROOM,
  BLOG_POSTS,
  MOVIE_LIST,
  CHATGPT_ME,
  E_COMMERCE,
  GRAPHQL_SPACE,
  S3_SURVEY,
  CLOUDCEPTION,
  CORS_CONTROL,
  FIREBASE_OAUTH,
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

export const taskToTime: TaskToTime = {
  [TWO_SUM]: leetCodeTimes.easy,
  [VALID_PALINDROME]: leetCodeTimes.easy,
  [REVERSE_LINKED_LIST]: leetCodeTimes.medium,
  [FREQUENT_ELEMENTS]: leetCodeTimes.medium,
  [MOST_WATER]: leetCodeTimes.medium,
  [QUICK_NOTE]: CLITimes.easy,
  [WORD_COUNT]: CLITimes.easy,
  [FILE_FINDER]: CLITimes.easy,
  [TEMPERATURE_CHECK]: CLITimes.medium,
  [DO_NOT_DISTURB]: CLITimes.hard,
  [LANDING_PAGE]: frontEndTimes.easy,
  [CHARACTER_CREATOR]: frontEndTimes.medium,
  [PHOTO_CAROUSEL]: frontEndTimes.medium,
  [CALCULATOR]: frontEndTimes.medium,
  [GIPHY_TV]: frontEndTimes.hard,
  [SITE_VISITS]: fullstackTimes.easy,
  [NOTES_APP]: fullstackTimes.medium,
  [COLOR_COLLAGE]: fullstackTimes.medium,
  [SOCIAL_MEDIA]: fullstackTimes.hard,
  [CHATROOM]: fullstackTimes.hard,
  [BLOG_POSTS]: backendTimes.easy,
  [MOVIE_LIST]: backendTimes.easy,
  [CHATGPT_ME]: backendTimes.medium,
  [E_COMMERCE]: backendTimes.hard,
  [GRAPHQL_SPACE]: backendTimes.hard,
  [S3_SURVEY]: cloudTimes.easy,
  [CLOUDCEPTION]: cloudTimes.easy,
  [CORS_CONTROL]: cloudTimes.easy,
  [FIREBASE_OAUTH]: cloudTimes.medium,
  [MOOD_MATCHER]: cloudTimes.hard,
};
