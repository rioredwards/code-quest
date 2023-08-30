import { Choice } from "../../types";
import { TimeChoiceIdx } from "./timeChoices";
import { TypeChoiceIdx } from "./typeChoices";

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

const { LEETCODE, CLI, FRONTEND, FULLSTACK, BACKEND, CLOUD } = TypeChoiceIdx;

const leetCodeEasy: TimeChoiceIdx[] = [
  THIRTY_MIN,
  FORTY_FIVE_MIN,
  ONE_HOUR,
  NINETY_MIN,
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

const frontendEasy: TimeChoiceIdx[] = backendEasy;
const frontendMedium: TimeChoiceIdx[] = backendMedium;
const frontendHard: TimeChoiceIdx[] = backendHard;

const fullstackEasy: TimeChoiceIdx[] = backendEasy;
const fullstackMedium: TimeChoiceIdx[] = backendMedium;
const fullstackHard: TimeChoiceIdx[] = backendHard;

const cloudEasy: TimeChoiceIdx[] = backendEasy;
const cloudMedium: TimeChoiceIdx[] = backendMedium;
const cloudHard: TimeChoiceIdx[] = backendHard;

const CLIEasy: TimeChoiceIdx[] = backendEasy;
const CLIMedium: TimeChoiceIdx[] = backendMedium;
const CLIHard: TimeChoiceIdx[] = backendHard;

export const taskChoices: Choice[] = [
  {
    id: 0,
    name: "Two Sum", // Leetcode -> Easy
    sentenceName: "Two Sum",
    compatibleWith: {
      TYPE: [LEETCODE],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: leetCodeEasy,
    },
  },
  {
    id: 1,
    name: "Valid Palindrome", // Leetcode -> Easy
    sentenceName: "Valid Palindrome",
    compatibleWith: {
      TYPE: [LEETCODE],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: leetCodeEasy,
    },
  },
  {
    id: 2,
    name: "Reverse Linked List", // Leetcode -> Easy (medium-ish)
    sentenceName: "Reverse Linked List",
    compatibleWith: {
      TYPE: [LEETCODE],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: leetCodeMedium,
    },
  },
  {
    id: 3,
    name: "Frequent Elements", // Leetcode -> Medium
    sentenceName: "Top K Frequent Elements",
    compatibleWith: {
      TYPE: [LEETCODE],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: leetCodeMedium,
    },
  },
  {
    id: 4,
    name: "Most Water", // Leetcode -> Medium
    sentenceName: "Container With Most Water",
    compatibleWith: {
      TYPE: [LEETCODE],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: leetCodeMedium,
    },
  },
  {
    id: 5,
    name: "Quick Note", // CLI -> Easy
    sentenceName: "Quickly save and view notes",
    compatibleWith: {
      TYPE: [CLI],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: CLIEasy,
    },
  },
  {
    id: 6,
    name: "Word Count", // CLI -> Easy
    sentenceName: "Count the number of words in a file",
    compatibleWith: {
      TYPE: [CLI],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: CLIEasy,
    },
  },
  {
    id: 7,
    name: "File Finder", // CLI -> Easy
    sentenceName: "Find a file by name and open it if it exists",
    compatibleWith: {
      TYPE: [CLI],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: CLIEasy,
    },
  },
  {
    id: 8,
    name: "Temperature Check", // CLI -> Medium
    sentenceName: "Return the current temperature outside",
    compatibleWith: {
      TYPE: [CLI],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: CLIMedium,
    },
  },
  {
    id: 9,
    name: "Do Not Disturb", // CLI -> Hard
    sentenceName: "Block all notifications for a specified amount of time",
    compatibleWith: {
      TYPE: [CLI],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: CLIHard,
    },
  },
  {
    id: 10,
    name: "Landing Page", // Frontend -> Easy
    sentenceName: "Landing Page",
    compatibleWith: {
      TYPE: [FRONTEND],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: frontendEasy,
    },
  },
  {
    id: 11,
    name: "Character Creator", // Frontend -> Medium
    sentenceName: "Character Creator",
    compatibleWith: {
      TYPE: [FRONTEND],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: frontendMedium,
    },
  },
  {
    id: 12,
    name: "Photo Carousel", // Frontend -> Medium
    sentenceName: "Photo Carousel with infinite scroll",
    compatibleWith: {
      TYPE: [FRONTEND],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: frontendMedium,
    },
  },
  {
    id: 13,
    name: "Calculator", // Frontend -> Medium
    sentenceName: "Calculator with basic arithmetic operations",
    compatibleWith: {
      TYPE: [FRONTEND],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: frontendMedium,
    },
  },
  {
    id: 14,
    name: "Giphy TV", // Frontend -> Hard
    sentenceName: "Giphy TV",
    compatibleWith: {
      TYPE: [FRONTEND],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: frontendHard,
    },
  },
  {
    id: 15,
    name: "Notes App", // Fullstack -> Easy
    sentenceName: "Notes App with CRUD functionality",
    compatibleWith: {
      TYPE: [FULLSTACK],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: fullstackEasy,
    },
  },
  {
    id: 16,
    name: "Site Visits", // Fullstack -> Easy
    sentenceName: "Display the total number of visits to a website",
    compatibleWith: {
      TYPE: [FULLSTACK],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: fullstackEasy,
    },
  },
  {
    id: 17,
    name: "Fav Hotkeys", // Fullstack -> Medium
    sentenceName: "Allow users to store their favorite hotkeys",
    compatibleWith: {
      TYPE: [FULLSTACK],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: fullstackMedium,
    },
  },
  {
    id: 18,
    name: "Social Media", // Fullstack -> Hard
    sentenceName: "Social Media app with auth, posts, and likes",
    compatibleWith: {
      TYPE: [FULLSTACK],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: fullstackHard,
    },
  },
  {
    id: 19,
    name: "Chatroom", // Fullstack -> Hard
    sentenceName: "Chatroom app with auth and realtime messages",
    compatibleWith: {
      TYPE: [FULLSTACK],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: fullstackHard,
    },
  },
  {
    id: 20,
    name: "Blog Posts", // Backend -> Easy
    sentenceName: "CRUD API for Blog Posts",
    compatibleWith: {
      TYPE: [BACKEND],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: backendEasy,
    },
  },
  {
    id: 21,
    name: "Movie List", // Backend -> easy
    sentenceName:
      "proxy server for the TheMovieDB API which returns a list of movies",
    compatibleWith: {
      TYPE: [BACKEND],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: backendEasy,
    },
  },
  {
    id: 22,
    name: "OpenAI", // Backend -> Medium
    sentenceName:
      "proxy server for the OpenAI API to return answers to questions",
    compatibleWith: {
      TYPE: [BACKEND],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: backendMedium,
    },
  },
  {
    id: 23,
    name: "E-Commerce", // Backend -> Hard
    sentenceName: "API for an E-Commerce site with products and orders",
    compatibleWith: {
      TYPE: [BACKEND],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: backendHard,
    },
  },
  {
    id: 24,
    name: "GraphQL Space", // Backend -> Hard
    sentenceName: "GraphQL API for celestial objects in outer space",
    compatibleWith: {
      TYPE: [BACKEND],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: backendHard,
    },
  },
  {
    id: 25,
    name: "S3 Survey", // Cloud -> Easy
    sentenceName: "Setup a survey that stores responses in an AWS S3 bucket",
    compatibleWith: {
      TYPE: [CLOUD],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: cloudEasy,
    },
  },
  {
    id: 26,
    name: "Cloudception", // Cloud -> Easy
    sentenceName: "Use Cloudinary to store images of clouds in the cloud",
    compatibleWith: {
      TYPE: [CLOUD],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: cloudEasy,
    },
  },
  {
    id: 27,
    name: "CORS Control", // Cloud -> Easy
    sentenceName: "Use serverless functions to query the Yelp API",
    compatibleWith: {
      TYPE: [CLOUD],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: cloudEasy,
    },
  },
  {
    id: 28,
    name: "Firebase OAuth", // Cloud -> Medium
    sentenceName: "With Firebase Auth, allow users to login with Github",
    compatibleWith: {
      TYPE: [CLOUD],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: cloudMedium,
    },
  },
  {
    id: 29,
    name: "Mood Matcher", // Cloud -> Hard
    sentenceName:
      "Use AWS Comprehend to analyze the sentiment of text and change the background color accordingly",
    compatibleWith: {
      TYPE: [CLOUD],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: cloudHard,
    },
  },
];
