import { Choice } from "../../types";
import { TaskChoiceIdx } from "../choiceIdxs/taskIdxs";
import { taskToTech } from "../compatibilities/TaskToTech";
import { taskToTime } from "../compatibilities/TaskToTime";
import { taskToType } from "../compatibilities/TaskToType";

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

export const taskChoices: Choice[] = [
  {
    id: TWO_SUM,
    name: "Two Sum", // Leetcode -> Easy
    sentenceName: "Two Sum",
    compatibleWith: {
      TYPE: taskToType[TWO_SUM],
      TECH: taskToTech[TWO_SUM],
      TIME: taskToTime[TWO_SUM],
    },
  },
  {
    id: VALID_PALINDROME,
    name: "Valid Palindrome", // Leetcode -> Easy
    sentenceName: "Valid Palindrome",
    compatibleWith: {
      TYPE: taskToType[VALID_PALINDROME],
      TECH: taskToTech[VALID_PALINDROME],
      TIME: taskToTime[VALID_PALINDROME],
    },
  },
  {
    id: REVERSE_LINKED_LIST,
    name: "Reverse Linked List", // Leetcode -> Easy (medium-ish)
    sentenceName: "Reverse Linked List",
    compatibleWith: {
      TYPE: taskToType[REVERSE_LINKED_LIST],
      TECH: taskToTech[REVERSE_LINKED_LIST],
      TIME: taskToTime[REVERSE_LINKED_LIST],
    },
  },
  {
    id: FREQUENT_ELEMENTS,
    name: "Frequent Elements", // Leetcode -> Medium
    sentenceName: "Top K Frequent Elements",
    compatibleWith: {
      TYPE: taskToType[FREQUENT_ELEMENTS],
      TECH: taskToTech[FREQUENT_ELEMENTS],
      TIME: taskToTime[FREQUENT_ELEMENTS],
    },
  },
  {
    id: MOST_WATER,
    name: "Most Water", // Leetcode -> Medium
    sentenceName: "Container With Most Water",
    compatibleWith: {
      TYPE: taskToType[MOST_WATER],
      TECH: taskToTech[MOST_WATER],
      TIME: taskToTime[MOST_WATER],
    },
  },
  {
    id: QUICK_NOTE,
    name: "Quick Note", // CLI -> Easy
    sentenceName: "Quickly save and view notes",
    compatibleWith: {
      TYPE: taskToType[QUICK_NOTE],
      TECH: taskToTech[QUICK_NOTE],
      TIME: taskToTime[QUICK_NOTE],
    },
  },
  {
    id: WORD_COUNT,
    name: "Word Count", // CLI -> Easy
    sentenceName: "Count the number of words in a file",
    compatibleWith: {
      TYPE: taskToType[WORD_COUNT],
      TECH: taskToTech[WORD_COUNT],
      TIME: taskToTime[WORD_COUNT],
    },
  },
  {
    id: FILE_FINDER,
    name: "File Finder", // CLI -> Easy
    sentenceName: "Find a file by name and open it if it exists",
    compatibleWith: {
      TYPE: taskToType[FILE_FINDER],
      TECH: taskToTech[FILE_FINDER],
      TIME: taskToTime[FILE_FINDER],
    },
  },
  {
    id: TEMPERATURE_CHECK,
    name: "Temperature Check", // CLI -> Medium
    sentenceName: "Return the current temperature outside",
    compatibleWith: {
      TYPE: taskToType[TEMPERATURE_CHECK],
      TECH: taskToTech[TEMPERATURE_CHECK],
      TIME: taskToTime[TEMPERATURE_CHECK],
    },
  },
  {
    id: DO_NOT_DISTURB,
    name: "Do Not Disturb", // CLI -> Hard
    sentenceName: "Block all notifications for a specified amount of time",
    compatibleWith: {
      TYPE: taskToType[DO_NOT_DISTURB],
      TECH: taskToTech[DO_NOT_DISTURB],
      TIME: taskToTime[DO_NOT_DISTURB],
    },
  },
  {
    id: LANDING_PAGE,
    name: "Landing Page", // Frontend -> Easy
    sentenceName: "Landing Page",
    compatibleWith: {
      TYPE: taskToType[LANDING_PAGE],
      TECH: taskToTech[LANDING_PAGE],
      TIME: taskToTime[LANDING_PAGE],
    },
  },
  {
    id: CHARACTER_CREATOR,
    name: "Character Creator", // Frontend -> Medium
    sentenceName: "Character Creator",
    compatibleWith: {
      TYPE: taskToType[CHARACTER_CREATOR],
      TECH: taskToTech[CHARACTER_CREATOR],
      TIME: taskToTime[CHARACTER_CREATOR],
    },
  },
  {
    id: PHOTO_CAROUSEL,
    name: "Photo Carousel", // Frontend -> Medium
    sentenceName: "Photo Carousel with infinite scroll",
    compatibleWith: {
      TYPE: taskToType[PHOTO_CAROUSEL],
      TECH: taskToTech[PHOTO_CAROUSEL],
      TIME: taskToTime[PHOTO_CAROUSEL],
    },
  },
  {
    id: CALCULATOR,
    name: "Calculator", // Frontend -> Medium
    sentenceName: "Calculator with basic arithmetic operations",
    compatibleWith: {
      TYPE: taskToType[CALCULATOR],
      TECH: taskToTech[CALCULATOR],
      TIME: taskToTime[CALCULATOR],
    },
  },
  {
    id: GIPHY_TV,
    name: "Giphy TV", // Frontend -> Hard
    sentenceName: "Giphy TV",
    compatibleWith: {
      TYPE: taskToType[GIPHY_TV],
      TECH: taskToTech[GIPHY_TV],
      TIME: taskToTime[GIPHY_TV],
    },
  },
  {
    id: SITE_VISITS,
    name: "Site Visits", // Fullstack -> Easy
    sentenceName: "Display the total number of visits to a website",
    compatibleWith: {
      TYPE: taskToType[SITE_VISITS],
      TECH: taskToTech[SITE_VISITS],
      TIME: taskToTime[SITE_VISITS],
    },
  },
  {
    id: NOTES_APP,
    name: "Notes App", // Fullstack -> Medium
    sentenceName: "Notes App with CRUD functionality",
    compatibleWith: {
      TYPE: taskToType[NOTES_APP],
      TECH: taskToTech[NOTES_APP],
      TIME: taskToTime[NOTES_APP],
    },
  },
  {
    id: COLOR_COLLAGE,
    name: "Color Collage", // Fullstack -> Medium
    sentenceName:
      "Use the Unsplash API to Fetch and display different colored images to match each route. Ex: mySite/red -> red images",
    compatibleWith: {
      TYPE: taskToType[COLOR_COLLAGE],
      TECH: taskToTech[COLOR_COLLAGE],
      TIME: taskToTime[COLOR_COLLAGE],
    },
  },
  {
    id: SOCIAL_MEDIA,
    name: "Social Media", // Fullstack -> Hard
    sentenceName: "Social Media app with auth, posts, and likes",
    compatibleWith: {
      TYPE: taskToType[SOCIAL_MEDIA],
      TECH: taskToTech[SOCIAL_MEDIA],
      TIME: taskToTime[SOCIAL_MEDIA],
    },
  },
  {
    id: CHATROOM,
    name: "Chatroom", // Fullstack -> Hard
    sentenceName: "Chatroom app with auth and realtime messages",
    compatibleWith: {
      TYPE: taskToType[CHATROOM],
      TECH: taskToTech[CHATROOM],
      TIME: taskToTime[CHATROOM],
    },
  },
  {
    id: BLOG_POSTS,
    name: "Blog Posts", // Backend -> Easy
    sentenceName: "CRUD API for Blog Posts",
    compatibleWith: {
      TYPE: taskToType[BLOG_POSTS],
      TECH: taskToTech[BLOG_POSTS],
      TIME: taskToTime[BLOG_POSTS],
    },
  },
  {
    id: MOVIE_LIST,
    name: "Movie List", // Backend -> easy
    sentenceName:
      "proxy server for the TheMovieDB API which returns a list of movies",
    compatibleWith: {
      TYPE: taskToType[MOVIE_LIST],
      TECH: taskToTech[MOVIE_LIST],
      TIME: taskToTime[MOVIE_LIST],
    },
  },
  {
    id: CHATGPT_ME,
    name: "ChatGPT Me", // Backend -> Medium
    sentenceName:
      "proxy server for the OpenAI API to return answers to questions",
    compatibleWith: {
      TYPE: taskToType[CHATGPT_ME],
      TECH: taskToTech[CHATGPT_ME],
      TIME: taskToTime[CHATGPT_ME],
    },
  },
  {
    id: E_COMMERCE,
    name: "E-Commerce", // Backend -> Hard
    sentenceName: "API for an E-Commerce site with products and orders",
    compatibleWith: {
      TYPE: taskToType[E_COMMERCE],
      TECH: taskToTech[E_COMMERCE],
      TIME: taskToTime[E_COMMERCE],
    },
  },
  {
    id: GRAPHQL_SPACE,
    name: "GraphQL Space", // Backend -> Hard
    sentenceName: "GraphQL API for celestial objects in outer space",
    compatibleWith: {
      TYPE: taskToType[GRAPHQL_SPACE],
      TECH: taskToTech[GRAPHQL_SPACE],
      TIME: taskToTime[GRAPHQL_SPACE],
    },
  },
  {
    id: S3_SURVEY,
    name: "S3 Survey", // Cloud -> Easy
    sentenceName: "Setup a survey that stores responses in an AWS S3 bucket",
    compatibleWith: {
      TYPE: taskToType[S3_SURVEY],
      TECH: taskToTech[S3_SURVEY],
      TIME: taskToTime[S3_SURVEY],
    },
  },
  {
    id: CLOUDCEPTION,
    name: "Cloudception", // Cloud -> Easy
    sentenceName: "Use Cloudinary to store images of clouds in the cloud",
    compatibleWith: {
      TYPE: taskToType[CLOUDCEPTION],
      TECH: taskToTech[CLOUDCEPTION],
      TIME: taskToTime[CLOUDCEPTION],
    },
  },
  {
    id: CORS_CONTROL,
    name: "CORS Control", // Cloud -> Easy
    sentenceName: "Use serverless functions to query the Yelp API",
    compatibleWith: {
      TYPE: taskToType[CORS_CONTROL],
      TECH: taskToTech[CORS_CONTROL],
      TIME: taskToTime[CORS_CONTROL],
    },
  },
  {
    id: FIREBASE_OAUTH,
    name: "Firebase OAuth", // Cloud -> Medium
    sentenceName: "With Firebase Auth, allow users to login with Github",
    compatibleWith: {
      TYPE: taskToType[FIREBASE_OAUTH],
      TECH: taskToTech[FIREBASE_OAUTH],
      TIME: taskToTime[FIREBASE_OAUTH],
    },
  },
  {
    id: MOOD_MATCHER,
    name: "Mood Matcher", // Cloud -> Hard
    sentenceName:
      "Use AWS Comprehend to analyze the sentiment of text and change the background color accordingly",
    compatibleWith: {
      TYPE: taskToType[MOOD_MATCHER],
      TECH: taskToTech[MOOD_MATCHER],
      TIME: taskToTime[MOOD_MATCHER],
    },
  },
];
