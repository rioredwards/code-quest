import { Choice } from "../../types";
import { TaskChoiceIdx } from "../choiceEnums/taskEnum";
import { taskToType } from "../compatibilities/TypeTask";
import {
  CLIEasyTime,
  CLIHardTime,
  CLIMediumTime,
  backendEasyTime,
  backendHardTime,
  backendMediumTime,
  cloudEasyTime,
  cloudHardTime,
  cloudMediumTime,
  frontendEasyTime,
  frontendHardTime,
  frontendMediumTime,
  fullstackEasyTime,
  fullstackHardTime,
  fullstackMediumTime,
  leetCodeEasyTime,
  leetCodeMediumTime,
} from "./typeChoices";

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

export const leetCodeEasyTasks: number[] = [TWO_SUM, VALID_PALINDROME];
export const leetCodeMediumTasks: number[] = [
  REVERSE_LINKED_LIST,
  FREQUENT_ELEMENTS,
  MOST_WATER,
];
export const CLIEasyTasks: number[] = [QUICK_NOTE, WORD_COUNT, FILE_FINDER];
export const CLIMediumTasks: number[] = [TEMPERATURE_CHECK];
export const CLIHardTasks: number[] = [DO_NOT_DISTURB];
export const frontendEasyTasks: number[] = [LANDING_PAGE];
export const frontendMediumTasks: number[] = [
  CHARACTER_CREATOR,
  PHOTO_CAROUSEL,
  CALCULATOR,
];
export const frontendHardTasks: number[] = [GIPHY_TV];
export const fullstackEasyTasks: number[] = [SITE_VISITS];
export const fullstackMediumTasks: number[] = [NOTES_APP, COLOR_COLLAGE];
export const fullstackHardTasks: number[] = [SOCIAL_MEDIA, CHATROOM];
export const backendEasyTasks: number[] = [BLOG_POSTS, MOVIE_LIST];
export const backendMediumTasks: number[] = [CHATGPT_ME];
export const backendHardTasks: number[] = [E_COMMERCE, GRAPHQL_SPACE];
export const cloudEasyTasks: number[] = [S3_SURVEY, CLOUDCEPTION, CORS_CONTROL];
export const cloudMediumTasks: number[] = [FIREBASE_OAUTH];
export const cloudHardTasks: number[] = [MOOD_MATCHER];

export const leetCodeTasks: number[] = [0, 1, 2, 3, 4];
export const CLITasks: number[] = [5, 6, 7, 8, 9];
export const frontendTasks: number[] = [10, 11, 12, 13, 14];
export const fullstackTasks: number[] = [15, 16, 17, 18, 19];
export const backendTasks: number[] = [20, 21, 22, 23, 24];
export const cloudTasks: number[] = [25, 26, 27, 28, 29];

export const taskChoices: Choice[] = [
  {
    id: TWO_SUM,
    name: "Two Sum", // Leetcode -> Easy
    sentenceName: "Two Sum",
    compatibleWith: {
      TYPE: taskToType[TWO_SUM],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: leetCodeEasyTime,
    },
  },
  {
    id: VALID_PALINDROME,
    name: "Valid Palindrome", // Leetcode -> Easy
    sentenceName: "Valid Palindrome",
    compatibleWith: {
      TYPE: taskToType[VALID_PALINDROME],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: leetCodeEasyTime,
    },
  },
  {
    id: REVERSE_LINKED_LIST,
    name: "Reverse Linked List", // Leetcode -> Easy (medium-ish)
    sentenceName: "Reverse Linked List",
    compatibleWith: {
      TYPE: taskToType[REVERSE_LINKED_LIST],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: leetCodeMediumTime,
    },
  },
  {
    id: FREQUENT_ELEMENTS,
    name: "Frequent Elements", // Leetcode -> Medium
    sentenceName: "Top K Frequent Elements",
    compatibleWith: {
      TYPE: taskToType[FREQUENT_ELEMENTS],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: leetCodeMediumTime,
    },
  },
  {
    id: MOST_WATER,
    name: "Most Water", // Leetcode -> Medium
    sentenceName: "Container With Most Water",
    compatibleWith: {
      TYPE: taskToType[MOST_WATER],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: leetCodeMediumTime,
    },
  },
  {
    id: QUICK_NOTE,
    name: "Quick Note", // CLI -> Easy
    sentenceName: "Quickly save and view notes",
    compatibleWith: {
      TYPE: taskToType[QUICK_NOTE],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: CLIEasyTime,
    },
  },
  {
    id: WORD_COUNT,
    name: "Word Count", // CLI -> Easy
    sentenceName: "Count the number of words in a file",
    compatibleWith: {
      TYPE: taskToType[WORD_COUNT],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: CLIEasyTime,
    },
  },
  {
    id: FILE_FINDER,
    name: "File Finder", // CLI -> Easy
    sentenceName: "Find a file by name and open it if it exists",
    compatibleWith: {
      TYPE: taskToType[FILE_FINDER],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: CLIEasyTime,
    },
  },
  {
    id: TEMPERATURE_CHECK,
    name: "Temperature Check", // CLI -> Medium
    sentenceName: "Return the current temperature outside",
    compatibleWith: {
      TYPE: taskToType[TEMPERATURE_CHECK],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: CLIMediumTime,
    },
  },
  {
    id: DO_NOT_DISTURB,
    name: "Do Not Disturb", // CLI -> Hard
    sentenceName: "Block all notifications for a specified amount of time",
    compatibleWith: {
      TYPE: taskToType[DO_NOT_DISTURB],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: CLIHardTime,
    },
  },
  {
    id: LANDING_PAGE,
    name: "Landing Page", // Frontend -> Easy
    sentenceName: "Landing Page",
    compatibleWith: {
      TYPE: taskToType[LANDING_PAGE],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: frontendEasyTime,
    },
  },
  {
    id: CHARACTER_CREATOR,
    name: "Character Creator", // Frontend -> Medium
    sentenceName: "Character Creator",
    compatibleWith: {
      TYPE: taskToType[CHARACTER_CREATOR],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: frontendMediumTime,
    },
  },
  {
    id: PHOTO_CAROUSEL,
    name: "Photo Carousel", // Frontend -> Medium
    sentenceName: "Photo Carousel with infinite scroll",
    compatibleWith: {
      TYPE: taskToType[PHOTO_CAROUSEL],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: frontendMediumTime,
    },
  },
  {
    id: CALCULATOR,
    name: "Calculator", // Frontend -> Medium
    sentenceName: "Calculator with basic arithmetic operations",
    compatibleWith: {
      TYPE: taskToType[CALCULATOR],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: frontendMediumTime,
    },
  },
  {
    id: GIPHY_TV,
    name: "Giphy TV", // Frontend -> Hard
    sentenceName: "Giphy TV",
    compatibleWith: {
      TYPE: taskToType[GIPHY_TV],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: frontendHardTime,
    },
  },
  {
    id: SITE_VISITS,
    name: "Site Visits", // Fullstack -> Easy
    sentenceName: "Display the total number of visits to a website",
    compatibleWith: {
      TYPE: taskToType[SITE_VISITS],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: fullstackEasyTime,
    },
  },
  {
    id: NOTES_APP,
    name: "Notes App", // Fullstack -> Medium
    sentenceName: "Notes App with CRUD functionality",
    compatibleWith: {
      TYPE: taskToType[NOTES_APP],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: fullstackMediumTime,
    },
  },
  {
    id: COLOR_COLLAGE,
    name: "Color Collage", // Fullstack -> Medium
    sentenceName:
      "Use the Unsplash API to Fetch and display different colored images to match each route. Ex: mySite/red -> red images",
    compatibleWith: {
      TYPE: taskToType[COLOR_COLLAGE],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: fullstackMediumTime,
    },
  },
  {
    id: SOCIAL_MEDIA,
    name: "Social Media", // Fullstack -> Hard
    sentenceName: "Social Media app with auth, posts, and likes",
    compatibleWith: {
      TYPE: taskToType[SOCIAL_MEDIA],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: fullstackHardTime,
    },
  },
  {
    id: CHATROOM,
    name: "Chatroom", // Fullstack -> Hard
    sentenceName: "Chatroom app with auth and realtime messages",
    compatibleWith: {
      TYPE: taskToType[CHATROOM],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: fullstackHardTime,
    },
  },
  {
    id: BLOG_POSTS,
    name: "Blog Posts", // Backend -> Easy
    sentenceName: "CRUD API for Blog Posts",
    compatibleWith: {
      TYPE: taskToType[BLOG_POSTS],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: backendEasyTime,
    },
  },
  {
    id: MOVIE_LIST,
    name: "Movie List", // Backend -> easy
    sentenceName:
      "proxy server for the TheMovieDB API which returns a list of movies",
    compatibleWith: {
      TYPE: taskToType[MOVIE_LIST],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: backendEasyTime,
    },
  },
  {
    id: CHATGPT_ME,
    name: "ChatGPT Me", // Backend -> Medium
    sentenceName:
      "proxy server for the OpenAI API to return answers to questions",
    compatibleWith: {
      TYPE: taskToType[CHATGPT_ME],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: backendMediumTime,
    },
  },
  {
    id: E_COMMERCE,
    name: "E-Commerce", // Backend -> Hard
    sentenceName: "API for an E-Commerce site with products and orders",
    compatibleWith: {
      TYPE: taskToType[E_COMMERCE],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: backendHardTime,
    },
  },
  {
    id: GRAPHQL_SPACE,
    name: "GraphQL Space", // Backend -> Hard
    sentenceName: "GraphQL API for celestial objects in outer space",
    compatibleWith: {
      TYPE: taskToType[GRAPHQL_SPACE],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: backendHardTime,
    },
  },
  {
    id: S3_SURVEY,
    name: "S3 Survey", // Cloud -> Easy
    sentenceName: "Setup a survey that stores responses in an AWS S3 bucket",
    compatibleWith: {
      TYPE: taskToType[S3_SURVEY],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: cloudEasyTime,
    },
  },
  {
    id: CLOUDCEPTION,
    name: "Cloudception", // Cloud -> Easy
    sentenceName: "Use Cloudinary to store images of clouds in the cloud",
    compatibleWith: {
      TYPE: taskToType[CLOUDCEPTION],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: cloudEasyTime,
    },
  },
  {
    id: CORS_CONTROL,
    name: "CORS Control", // Cloud -> Easy
    sentenceName: "Use serverless functions to query the Yelp API",
    compatibleWith: {
      TYPE: taskToType[CORS_CONTROL],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: cloudEasyTime,
    },
  },
  {
    id: FIREBASE_OAUTH,
    name: "Firebase OAuth", // Cloud -> Medium
    sentenceName: "With Firebase Auth, allow users to login with Github",
    compatibleWith: {
      TYPE: taskToType[FIREBASE_OAUTH],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: cloudMediumTime,
    },
  },
  {
    id: MOOD_MATCHER,
    name: "Mood Matcher", // Cloud -> Hard
    sentenceName:
      "Use AWS Comprehend to analyze the sentiment of text and change the background color accordingly",
    compatibleWith: {
      TYPE: taskToType[MOOD_MATCHER],
      TECH: [0, 1, 2, 3, 4, 5],
      TIME: cloudHardTime,
    },
  },
];
