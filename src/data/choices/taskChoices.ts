import { Choice } from '../../types';
import { TaskChoiceIdx } from '../choiceIdxs/taskIdxs';
import { taskToTech } from '../compatibilities/TaskToTech';
import { taskToTime } from '../compatibilities/TaskToTime';
import { taskToType } from '../compatibilities/TaskToType';

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

export const taskChoices: Choice[] = [
  {
    id: TWO_SUM,
    name: 'Two Sum', // Leetcode -> Easy
    sentenceName: '#1 Two Sum',
    compatibleWith: {
      TYPE: taskToType[TWO_SUM],
      TECH: taskToTech[TWO_SUM],
      TIME: taskToTime[TWO_SUM],
    },
  },
  {
    id: VALID_PALINDROME,
    name: 'Valid Palindrome', // Leetcode -> Easy
    sentenceName: '#125 Valid Palindrome',
    compatibleWith: {
      TYPE: taskToType[VALID_PALINDROME],
      TECH: taskToTech[VALID_PALINDROME],
      TIME: taskToTime[VALID_PALINDROME],
    },
  },
  {
    id: REVERSE_LINKED_LIST,
    name: 'Reverse Linked List', // Leetcode -> Easy (medium-ish)
    sentenceName: '#206 Reverse Linked List',
    compatibleWith: {
      TYPE: taskToType[REVERSE_LINKED_LIST],
      TECH: taskToTech[REVERSE_LINKED_LIST],
      TIME: taskToTime[REVERSE_LINKED_LIST],
    },
  },
  {
    id: FREQUENT_ELEMENTS,
    name: 'Frequent Elements', // Leetcode -> Medium
    sentenceName: '#347 Top K Frequent Elements',
    compatibleWith: {
      TYPE: taskToType[FREQUENT_ELEMENTS],
      TECH: taskToTech[FREQUENT_ELEMENTS],
      TIME: taskToTime[FREQUENT_ELEMENTS],
    },
  },
  {
    id: MOST_WATER,
    name: 'Most Water', // Leetcode -> Medium
    sentenceName: '#11 Container With Most Water',
    compatibleWith: {
      TYPE: taskToType[MOST_WATER],
      TECH: taskToTech[MOST_WATER],
      TIME: taskToTime[MOST_WATER],
    },
  },
  {
    id: DEAR_DIARY,
    name: 'Dear Diary...', // CLI -> Easy
    sentenceName: 'quickly create and retrieve notes',
    compatibleWith: {
      TYPE: taskToType[DEAR_DIARY],
      TECH: taskToTech[DEAR_DIARY],
      TIME: taskToTime[DEAR_DIARY],
    },
  },
  {
    id: WAY_WITH_WORDS,
    name: 'Way With Words', // CLI -> Easy
    sentenceName: 'count the number of words in a file',
    compatibleWith: {
      TYPE: taskToType[WAY_WITH_WORDS],
      TECH: taskToTech[WAY_WITH_WORDS],
      TIME: taskToTime[WAY_WITH_WORDS],
    },
  },
  {
    id: POMODORO,
    name: 'Pomodoro', // CLI -> Medium
    sentenceName: 'timer for the "Pomodoro Technique"',
    compatibleWith: {
      TYPE: taskToType[POMODORO],
      TECH: taskToTech[POMODORO],
      TIME: taskToTime[POMODORO],
    },
  },
  {
    id: RAIN_CHECK,
    name: 'Rain Check', // CLI -> Medium
    sentenceName: 'return the current weather outside',
    compatibleWith: {
      TYPE: taskToType[RAIN_CHECK],
      TECH: taskToTech[RAIN_CHECK],
      TIME: taskToTime[RAIN_CHECK],
    },
  },
  {
    id: PUSH_THE_ENVELOPE,
    name: 'Push the Envelope', // CLI -> Hard
    sentenceName: 'send an email',
    compatibleWith: {
      TYPE: taskToType[PUSH_THE_ENVELOPE],
      TECH: taskToTech[PUSH_THE_ENVELOPE],
      TIME: taskToTime[PUSH_THE_ENVELOPE],
    },
  },
  {
    id: BIG_MAC,
    name: 'Big Mac', // Frontend -> Easy
    sentenceName: `responsive navbar where links become a "hamburger" menu`,
    compatibleWith: {
      TYPE: taskToType[BIG_MAC],
      TECH: taskToTech[BIG_MAC],
      TIME: taskToTime[BIG_MAC],
    },
  },
  {
    id: CHARACTER_CREATOR,
    name: 'Character Creator', // Frontend -> Medium
    sentenceName: 'create a character with a form and preview',
    compatibleWith: {
      TYPE: taskToType[CHARACTER_CREATOR],
      TECH: taskToTech[CHARACTER_CREATOR],
      TIME: taskToTime[CHARACTER_CREATOR],
    },
  },
  {
    id: SPACE_RACE,
    name: 'Space Race', // Frontend -> Medium
    sentenceName: 'display images from a NASA API with pagination and search',
    compatibleWith: {
      TYPE: taskToType[SPACE_RACE],
      TECH: taskToTech[SPACE_RACE],
      TIME: taskToTime[SPACE_RACE],
    },
  },
  {
    id: CALCULATOR,
    name: 'Calculator', // Frontend -> Medium
    sentenceName: 'Calculator with basic arithmetic operations',
    compatibleWith: {
      TYPE: taskToType[CALCULATOR],
      TECH: taskToTech[CALCULATOR],
      TIME: taskToTime[CALCULATOR],
    },
  },
  {
    id: PRICE_IS_RIGHT,
    name: 'Price Is Right', // Frontend -> Hard
    sentenceName: "chart that updates with a stock's prices in realtime",
    compatibleWith: {
      TYPE: taskToType[PRICE_IS_RIGHT],
      TECH: taskToTech[PRICE_IS_RIGHT],
      TIME: taskToTime[PRICE_IS_RIGHT],
    },
  },
  {
    id: HEAD_COUNT,
    name: 'Head Count', // Fullstack -> Easy
    sentenceName: 'display the total number of visits to a website',
    compatibleWith: {
      TYPE: taskToType[HEAD_COUNT],
      TECH: taskToTech[HEAD_COUNT],
      TIME: taskToTime[HEAD_COUNT],
    },
  },
  {
    id: RETAIL_THERAPY,
    name: 'Retail Therapy', // Fullstack -> Medium
    sentenceName: 'shopping list with CRUD functionality',
    compatibleWith: {
      TYPE: taskToType[RETAIL_THERAPY],
      TECH: taskToTech[RETAIL_THERAPY],
      TIME: taskToTime[RETAIL_THERAPY],
    },
  },
  {
    id: QUERY_STRING_QUEST,
    name: 'Query String Quest', // Fullstack -> Medium
    sentenceName: 'fetch images from an API to match URL parameters',
    compatibleWith: {
      TYPE: taskToType[QUERY_STRING_QUEST],
      TECH: taskToTech[QUERY_STRING_QUEST],
      TIME: taskToTime[QUERY_STRING_QUEST],
    },
  },
  {
    id: SHARING_IS_CARING,
    name: 'Sharing Is Caring', // Fullstack -> Hard
    sentenceName: 'social media app with auth, posts, and likes',
    compatibleWith: {
      TYPE: taskToType[SHARING_IS_CARING],
      TECH: taskToTech[SHARING_IS_CARING],
      TIME: taskToTime[SHARING_IS_CARING],
    },
  },
  {
    id: HELLO_WORLD,
    name: 'Hello World!', // Fullstack -> Hard
    sentenceName: 'Chat room app with auth and realtime messages',
    compatibleWith: {
      TYPE: taskToType[HELLO_WORLD],
      TECH: taskToTech[HELLO_WORLD],
      TIME: taskToTime[HELLO_WORLD],
    },
  },
  {
    id: HOT_TAKES,
    name: 'Hot Takes', // Backend -> Easy
    sentenceName: 'CRUD API for Blog Posts with a database',
    compatibleWith: {
      TYPE: taskToType[HOT_TAKES],
      TECH: taskToTech[HOT_TAKES],
      TIME: taskToTime[HOT_TAKES],
    },
  },
  {
    id: MOVIE_LIST,
    name: 'Spoiler Alert', // Backend -> easy
    sentenceName: 'return info about movies from TheMovieDB API',
    compatibleWith: {
      TYPE: taskToType[MOVIE_LIST],
      TECH: taskToTech[MOVIE_LIST],
      TIME: taskToTime[MOVIE_LIST],
    },
  },
  {
    id: TOP_SECRET,
    name: 'Top Secret', // Backend -> Medium
    sentenceName: 'REST API with auth and protected routes',
    compatibleWith: {
      TYPE: taskToType[TOP_SECRET],
      TECH: taskToTech[TOP_SECRET],
      TIME: taskToTime[TOP_SECRET],
    },
  },
  {
    id: ADD_TO_CART,
    name: 'Add To Cart', // Backend -> Hard
    sentenceName: 'REST API for an E-Commerce site with products and orders',
    compatibleWith: {
      TYPE: taskToType[ADD_TO_CART],
      TECH: taskToTech[ADD_TO_CART],
      TIME: taskToTime[ADD_TO_CART],
    },
  },
  {
    id: BOOKWORM,
    name: 'Bookworm', // Backend -> Hard
    sentenceName: 'GraphQL server for books and authors with a database',
    compatibleWith: {
      TYPE: taskToType[BOOKWORM],
      TECH: taskToTech[BOOKWORM],
      TIME: taskToTime[BOOKWORM],
    },
  },
  {
    id: BIG_DATA,
    name: 'Big Data', // Cloud -> Easy
    sentenceName: 'survey that stores responses in an AWS S3 bucket',
    compatibleWith: {
      TYPE: taskToType[BIG_DATA],
      TECH: taskToTech[BIG_DATA],
      TIME: taskToTime[BIG_DATA],
    },
  },
  {
    id: CLOUDCEPTION,
    name: 'Cloudception', // Cloud -> Easy
    sentenceName: 'store images of clouds in Cloudinary',
    compatibleWith: {
      TYPE: taskToType[CLOUDCEPTION],
      TECH: taskToTech[CLOUDCEPTION],
      TIME: taskToTime[CLOUDCEPTION],
    },
  },
  {
    id: CORS_CONTROL,
    name: 'CORS Control', // Cloud -> Easy
    sentenceName: 'create serverless functions to query the Yelp API',
    compatibleWith: {
      TYPE: taskToType[CORS_CONTROL],
      TECH: taskToTech[CORS_CONTROL],
      TIME: taskToTime[CORS_CONTROL],
    },
  },
  {
    id: TICKET_TO_RIDE,
    name: 'Ticket To Ride', // Cloud -> Medium
    sentenceName: 'setup Firebase Auth to allow users to login with Github',
    compatibleWith: {
      TYPE: taskToType[TICKET_TO_RIDE],
      TECH: taskToTech[TICKET_TO_RIDE],
      TIME: taskToTime[TICKET_TO_RIDE],
    },
  },
  {
    id: MOOD_MATCHER,
    name: 'Mood Matcher', // Cloud -> Hard
    sentenceName: 'match the color of text with its sentiment with AWS Comprehend',
    compatibleWith: {
      TYPE: taskToType[MOOD_MATCHER],
      TECH: taskToTech[MOOD_MATCHER],
      TIME: taskToTime[MOOD_MATCHER],
    },
  },
];
