import { Choice } from "../../types";
import { TimeChoiceIdx } from "./timeChoices";

const {
  THIRTY_MIN,
  FORTY_FIVE_MIN,
  ONE_HOUR,
  NINETY_MIN,
  TWO_HOURS,
  THREE_HOURS,
  FOUR_HOURS,
  FIVE_HOURS,
  INFINITY,
} = TimeChoiceIdx;

const leetCodeEasy: TimeChoiceIdx[] = [
  THIRTY_MIN,
  FORTY_FIVE_MIN,
  ONE_HOUR,
  NINETY_MIN,
  INFINITY,
];
const leetCodeMediumish: TimeChoiceIdx[] = [
  ONE_HOUR,
  NINETY_MIN,
  TWO_HOURS,
  INFINITY,
];
const leetCodeMedium: TimeChoiceIdx[] = [
  NINETY_MIN,
  TWO_HOURS,
  THREE_HOURS,
  INFINITY,
];

const backendEasy: TimeChoiceIdx[] = [TWO_HOURS, THREE_HOURS, INFINITY];
const backendMedium: TimeChoiceIdx[] = [THREE_HOURS, FOUR_HOURS, INFINITY];
const backendHard: TimeChoiceIdx[] = [FOUR_HOURS, FIVE_HOURS, INFINITY];

const frontendEasy: TimeChoiceIdx[] = [TWO_HOURS, THREE_HOURS, INFINITY];
const frontendMedium: TimeChoiceIdx[] = [THREE_HOURS, FOUR_HOURS, INFINITY];
const frontendHard: TimeChoiceIdx[] = [FOUR_HOURS, FIVE_HOURS, INFINITY];

export const taskChoices: Choice[] = [
  {
    id: 0,
    name: "Two Sum", // Leetcode -> Easy
    sentenceName: "Two Sum",
    compatibleWith: {
      TYPE: [0],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: leetCodeEasy,
    },
  },
  {
    id: 1,
    name: "Contains Duplicate", // Leetcode -> Easy
    sentenceName: "Contains Duplicate",
    compatibleWith: {
      TYPE: [0],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: leetCodeEasy,
    },
  },
  {
    id: 2,
    name: "Valid Anagram", // Leetcode -> Easy
    sentenceName: "Valid Anagram",
    compatibleWith: {
      TYPE: [0],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: leetCodeEasy,
    },
  },
  {
    id: 3,
    name: "Valid Palindrome", // Leetcode -> Easy
    sentenceName: "Valid Palindrome",
    compatibleWith: {
      TYPE: [0],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: leetCodeEasy,
    },
  },
  {
    id: 8,
    name: "Merge Two Lists", // Leetcode -> Easy (medium-ish)
    sentenceName: "Merge Two Sorted Lists",
    compatibleWith: {
      TYPE: [0],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: leetCodeMediumish,
    },
  },
  {
    id: 9,
    name: "Reverse Linked List", // Leetcode -> Easy (medium-ish)
    sentenceName: "Reverse Linked List",
    compatibleWith: {
      TYPE: [0],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: leetCodeMediumish,
    },
  },
  {
    id: 4,
    name: "Top K Frequent Elements", // Leetcode -> Medium
    sentenceName: "Top K Frequent Elements",
    compatibleWith: {
      TYPE: [0],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: leetCodeMedium,
    },
  },
  {
    id: 5,
    name: "Container With Most Water", // Leetcode -> Medium
    sentenceName: "Container With Most Water",
    compatibleWith: {
      TYPE: [0],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: leetCodeMedium,
    },
  },
  {
    id: 6,
    name: "Longest Substring", // Leetcode -> Medium
    sentenceName: "Longest Substring Without Repeating Characters",
    compatibleWith: {
      TYPE: [0],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: leetCodeMedium,
    },
  },
  {
    id: 10,
    name: "Rotated Sorted Array", // Leetcode -> Medium
    sentenceName: "Find Minimum in Rotated Sorted Array",
    compatibleWith: {
      TYPE: [0],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: leetCodeMedium,
    },
  },
  {
    id: 11,
    name: "Todos API", // Backend -> Easy
    sentenceName: "CRUD API for Todos",
    compatibleWith: {
      TYPE: [1],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: backendEasy,
    },
  },
  {
    id: 12,
    name: "Blog Posts API", // Backend -> Easy
    sentenceName: "CRUD API for Blog Posts",
    compatibleWith: {
      TYPE: [1],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: backendEasy,
    },
  },
  {
    id: 13,
    name: "Pokemon List", // Backend -> easy
    sentenceName:
      "proxy server for the the PokeAPI which returns a list of pokemon",
    compatibleWith: {
      TYPE: [1],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: backendEasy,
    },
  },
  {
    id: 14,
    name: "Movie List", // Backend -> easy
    sentenceName:
      "proxy server for the TheMovieDB API which returns a list of movies",
    compatibleWith: {
      TYPE: [1],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: backendEasy,
    },
  },
  {
    id: 15,
    name: "OpenAI", // Backend -> Medium
    sentenceName:
      "proxy server for the OpenAI API to return answers to questions",
    compatibleWith: {
      TYPE: [1],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: backendMedium,
    },
  },
  {
    id: 16,
    name: "Auth", // Backend -> Medium
    sentenceName: "API with Authentication, Authorization and Protected Routes",
    compatibleWith: {
      TYPE: [1],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: backendMedium,
    },
  },
  {
    id: 17,
    name: "Bad Words", // Backend -> Medium
    sentenceName: "API that filters out bad words from a string",
    compatibleWith: {
      TYPE: [1],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: backendMedium,
    },
  },
  {
    id: 18,
    name: "E-Commerce", // Backend -> Hard
    sentenceName: "API for an E-Commerce site with products and orders",
    compatibleWith: {
      TYPE: [1],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: backendHard,
    },
  },
  {
    id: 18,
    name: "GraphQL Space", // Backend -> Hard
    sentenceName: "GraphQL API for celestial objects in outer space",
    compatibleWith: {
      TYPE: [1],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: backendHard,
    },
  },
  {
    id: 19,
    name: "Landing Page", // Frontend -> Easy
    sentenceName: "Landing Page",
    compatibleWith: {
      TYPE: [2],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: frontendEasy,
    },
  },
  {
    id: 19,
    name: "Photo Gallery", // Frontend -> Easy
    sentenceName: "Responsive Photo Gallery",
    compatibleWith: {
      TYPE: [2],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: frontendEasy,
    },
  },
  {
    id: 19,
    name: "Character Creator", // Frontend -> Medium
    sentenceName: "Character Creator",
    compatibleWith: {
      TYPE: [2],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: frontendMedium,
    },
  },
  {
    id: 19,
    name: "Photo Carousel", // Frontend -> Medium
    sentenceName: "Photo Carousel with infinite scroll",
    compatibleWith: {
      TYPE: [2],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: frontendMedium,
    },
  },
  {
    id: 19,
    name: "Calculator", // Frontend -> Medium
    sentenceName: "Calculator with basic arithmetic operations",
    compatibleWith: {
      TYPE: [2],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: frontendMedium,
    },
  },
  {
    id: 19,
    name: "Tic-Tac-Toe", // Frontend -> Medium
    sentenceName: "Tic-Tac-Toe game",
    compatibleWith: {
      TYPE: [2],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: frontendMedium,
    },
  },
  {
    id: 19,
    name: "Admin Dashboard", // Frontend -> Hard
    sentenceName: "Admin Dashboard",
    compatibleWith: {
      TYPE: [2],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: frontendHard,
    },
  },
];
