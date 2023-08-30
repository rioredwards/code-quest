// import { TaskChoiceIdx } from "../choiceEnums/taskEnum";
// import { TypeChoiceIdx } from "../choiceEnums/typeEnum";
// import {
//   CLIEasyTime,
//   CLIHardTime,
//   CLIMediumTime,
//   backendEasyTime,
//   backendHardTime,
//   backendMediumTime,
//   cloudEasyTime,
//   cloudHardTime,
//   cloudMediumTime,
//   frontendEasyTime,
//   frontendHardTime,
//   frontendMediumTime,
//   fullstackEasyTime,
//   fullstackHardTime,
//   fullstackMediumTime,
//   leetCodeEasyTime,
//   leetCodeMediumTime,
// } from "./typeChoices";

// const { LEETCODE, CLI, FRONTEND, FULLSTACK, BACKEND, CLOUD } = TypeChoiceIdx;
// const {
//   TWO_SUM,
//   VALID_PALINDROME,
//   REVERSE_LINKED_LIST,
//   FREQUENT_ELEMENTS,
//   MOST_WATER,
//   QUICK_NOTE,
//   WORD_COUNT,
//   FILE_FINDER,
//   TEMPERATURE_CHECK,
//   DO_NOT_DISTURB,
//   LANDING_PAGE,
//   CHARACTER_CREATOR,
//   PHOTO_CAROUSEL,
//   CALCULATOR,
//   GIPHY_TV,
//   SITE_VISITS,
//   NOTES_APP,
//   COLOR_COLLAGE,
//   SOCIAL_MEDIA,
//   CHATROOM,
//   BLOG_POSTS,
//   MOVIE_LIST,
//   CHATGPT_ME,
//   E_COMMERCE,
//   GRAPHQL_SPACE,
//   S3_SURVEY,
//   CLOUDCEPTION,
//   CORS_CONTROL,
//   FIREBASE_OAUTH,
//   MOOD_MATCHER,
// } = TaskChoiceIdx;

// export const leetCodeEasyTasks: number[] = [TWO_SUM, VALID_PALINDROME];
// export const leetCodeMediumTasks: number[] = [
//   REVERSE_LINKED_LIST,
//   FREQUENT_ELEMENTS,
//   MOST_WATER,
// ];
// export const CLIEasyTasks: number[] = [QUICK_NOTE, WORD_COUNT, FILE_FINDER];
// export const CLIMediumTasks: number[] = [TEMPERATURE_CHECK];
// export const CLIHardTasks: number[] = [DO_NOT_DISTURB];
// export const frontendEasyTasks: number[] = [LANDING_PAGE];
// export const frontendMediumTasks: number[] = [
//   CHARACTER_CREATOR,
//   PHOTO_CAROUSEL,
//   CALCULATOR,
// ];
// export const frontendHardTasks: number[] = [GIPHY_TV];
// export const fullstackEasyTasks: number[] = [SITE_VISITS];
// export const fullstackMediumTasks: number[] = [NOTES_APP, COLOR_COLLAGE];
// export const fullstackHardTasks: number[] = [SOCIAL_MEDIA, CHATROOM];
// export const backendEasyTasks: number[] = [BLOG_POSTS, MOVIE_LIST];
// export const backendMediumTasks: number[] = [CHATGPT_ME];
// export const backendHardTasks: number[] = [E_COMMERCE, GRAPHQL_SPACE];
// export const cloudEasyTasks: number[] = [S3_SURVEY, CLOUDCEPTION, CORS_CONTROL];
// export const cloudMediumTasks: number[] = [FIREBASE_OAUTH];
// export const cloudHardTasks: number[] = [MOOD_MATCHER];

// export const leetCodeTasks: number[] = [0, 1, 2, 3, 4];
// export const CLITasks: number[] = [5, 6, 7, 8, 9];
// export const frontendTasks: number[] = [10, 11, 12, 13, 14];
// export const fullstackTasks: number[] = [15, 16, 17, 18, 19];
// export const backendTasks: number[] = [20, 21, 22, 23, 24];
// export const cloudTasks: number[] = [25, 26, 27, 28, 29];

// export const taskChoices = {
//   twoSum: {
//     name: "Two Sum", // Leetcode -> Easy
//     sentenceName: "Two Sum",
//     compatibleWith: {
//       TYPE: [LEETCODE],
//       TECH: [0, 1, 2, 3, 4, 5],
//       TIME: leetCodeEasyTime,
//     },
//   },
//   validPalindrome: {
//     name: "Valid Palindrome",
//     sentenceName: "Valid Palindrome",
//     compatibleWith: {
//       TYPE: [LEETCODE],
//       TECH: [0, 1, 2, 3, 4, 5],
//       TIME: leetCodeEasyTime,
//     },
//   },
//   reverseLinkedList: {
//     name: "Reverse Linked List",
//     sentenceName: "Reverse Linked List",
//     compatibleWith: {
//       TYPE: [LEETCODE],
//       TECH: [0, 1, 2, 3, 4, 5],
//       TIME: leetCodeMediumTime,
//     },
//   },
//   frequentElements: {
//     name: "Frequent Elements", // Leetcode -> Medium
//     sentenceName: "Top K Frequent Elements",
//     compatibleWith: {
//       TYPE: [LEETCODE],
//       TECH: [0, 1, 2, 3, 4, 5],
//       TIME: leetCodeMediumTime,
//     },
//   },
//   mostWater: {
//     name: "Most Water", // Leetcode -> Medium
//     sentenceName: "Container With Most Water",
//     compatibleWith: {
//       TYPE: [LEETCODE],
//       TECH: [0, 1, 2, 3, 4, 5],
//       TIME: leetCodeMediumTime,
//     },
//   },
//   quickNote: {
//     name: "Quick Note", // CLI -> Easy
//     sentenceName: "Quickly save and view notes",
//     compatibleWith: {
//       TYPE: [CLI],
//       TECH: [0, 1, 2, 3, 4, 5],
//       TIME: CLIEasyTime,
//     },
//   },
//   wordCount: {
//     name: "Word Count", // CLI -> Easy
//     sentenceName: "Count the number of words in a file",
//     compatibleWith: {
//       TYPE: [CLI],
//       TECH: [0, 1, 2, 3, 4, 5],
//       TIME: CLIEasyTime,
//     },
//   },
//   fileFinder: {
//     name: "File Finder", // CLI -> Easy
//     sentenceName: "Find a file by name and open it if it exists",
//     compatibleWith: {
//       TYPE: [CLI],
//       TECH: [0, 1, 2, 3, 4, 5],
//       TIME: CLIEasyTime,
//     },
//   },
//   temperatureCheck: {
//     name: "Temperature Check", // CLI -> Medium
//     sentenceName: "Return the current temperature outside",
//     compatibleWith: {
//       TYPE: [CLI],
//       TECH: [0, 1, 2, 3, 4, 5],
//       TIME: CLIMediumTime,
//     },
//   },
//   doNotDisturb: {
//     name: "Do Not Disturb", // CLI -> Hard
//     sentenceName: "Block all notifications for a specified amount of time",
//     compatibleWith: {
//       TYPE: [CLI],
//       TECH: [0, 1, 2, 3, 4, 5],
//       TIME: CLIHardTime,
//     },
//   },
//   landingPage: {
//     name: "Landing Page", // Frontend -> Easy
//     sentenceName: "Landing Page",
//     compatibleWith: {
//       TYPE: [FRONTEND],
//       TECH: [0, 1, 2, 3, 4, 5],
//       TIME: frontendEasyTime,
//     },
//   },
//   characterCreator: {
//     name: "Character Creator", // Frontend -> Medium
//     sentenceName: "Character Creator",
//     compatibleWith: {
//       TYPE: [FRONTEND],
//       TECH: [0, 1, 2, 3, 4, 5],
//       TIME: frontendMediumTime,
//     },
//   },
//   photoCarousel: {
//     name: "Photo Carousel", // Frontend -> Medium
//     sentenceName: "Photo Carousel with infinite scroll",
//     compatibleWith: {
//       TYPE: [FRONTEND],
//       TECH: [0, 1, 2, 3, 4, 5],
//       TIME: frontendMediumTime,
//     },
//   },
//   calculator: {
//     name: "Calculator", // Frontend -> Medium
//     sentenceName: "Calculator with basic arithmetic operations",
//     compatibleWith: {
//       TYPE: [FRONTEND],
//       TECH: [0, 1, 2, 3, 4, 5],
//       TIME: frontendMediumTime,
//     },
//   },
//   giphyTV: {
//     name: "Giphy TV", // Frontend -> Hard
//     sentenceName: "Giphy TV",
//     compatibleWith: {
//       TYPE: [FRONTEND],
//       TECH: [0, 1, 2, 3, 4, 5],
//       TIME: frontendHardTime,
//     },
//   },
//   siteVisits: {
//     name: "Site Visits", // Fullstack -> Easy
//     sentenceName: "Display the total number of visits to a website",
//     compatibleWith: {
//       TYPE: [FULLSTACK],
//       TECH: [0, 1, 2, 3, 4, 5],
//       TIME: fullstackEasyTime,
//     },
//   },
//   notesApp: {
//     name: "Notes App", // Fullstack -> Medium
//     sentenceName: "Notes App with CRUD functionality",
//     compatibleWith: {
//       TYPE: [FULLSTACK],
//       TECH: [0, 1, 2, 3, 4, 5],
//       TIME: fullstackMediumTime,
//     },
//   },
//   colorCollage: {
//     name: "Color Collage", // Fullstack -> Medium
//     sentenceName:
//       "Use the Unsplash API to Fetch and display different colored images to match each route. Ex: mySite/red -> red images",
//     compatibleWith: {
//       TYPE: [FULLSTACK],
//       TECH: [0, 1, 2, 3, 4, 5],
//       TIME: fullstackMediumTime,
//     },
//   },
//   socialMedia: {
//     name: "Social Media", // Fullstack -> Hard
//     sentenceName: "Social Media app with auth, posts, and likes",
//     compatibleWith: {
//       TYPE: [FULLSTACK],
//       TECH: [0, 1, 2, 3, 4, 5],
//       TIME: fullstackHardTime,
//     },
//   },
//   chatroom: {
//     name: "Chatroom", // Fullstack -> Hard
//     sentenceName: "Chatroom app with auth and realtime messages",
//     compatibleWith: {
//       TYPE: [FULLSTACK],
//       TECH: [0, 1, 2, 3, 4, 5],
//       TIME: fullstackHardTime,
//     },
//   },
//   blogPosts: {
//     name: "Blog Posts", // Backend -> Easy
//     sentenceName: "CRUD API for Blog Posts",
//     compatibleWith: {
//       TYPE: [BACKEND],
//       TECH: [0, 1, 2, 3, 4, 5],
//       TIME: backendEasyTime,
//     },
//   },
//   movieList: {
//     name: "Movie List", // Backend -> easy
//     sentenceName:
//       "proxy server for the TheMovieDB API which returns a list of movies",
//     compatibleWith: {
//       TYPE: [BACKEND],
//       TECH: [0, 1, 2, 3, 4, 5],
//       TIME: backendEasyTime,
//     },
//   },
//   chatGPTMe: {
//     name: "ChatGPT Me", // Backend -> Medium
//     sentenceName:
//       "proxy server for the OpenAI API to return answers to questions",
//     compatibleWith: {
//       TYPE: [BACKEND],
//       TECH: [0, 1, 2, 3, 4, 5],
//       TIME: backendMediumTime,
//     },
//   },
//   eCommerce: {
//     name: "E-Commerce", // Backend -> Hard
//     sentenceName: "API for an E-Commerce site with products and orders",
//     compatibleWith: {
//       TYPE: [BACKEND],
//       TECH: [0, 1, 2, 3, 4, 5],
//       TIME: backendHardTime,
//     },
//   },
//   graphQLSpace: {
//     name: "GraphQL Space", // Backend -> Hard
//     sentenceName: "GraphQL API for celestial objects in outer space",
//     compatibleWith: {
//       TYPE: [BACKEND],
//       TECH: [0, 1, 2, 3, 4, 5],
//       TIME: backendHardTime,
//     },
//   },
//   s3Survey: {
//     name: "S3 Survey", // Cloud -> Easy
//     sentenceName: "Setup a survey that stores responses in an AWS S3 bucket",
//     compatibleWith: {
//       TYPE: [CLOUD],
//       TECH: [0, 1, 2, 3, 4, 5],
//       TIME: cloudEasyTime,
//     },
//   },
//   cloudception: {
//     name: "Cloudception", // Cloud -> Easy
//     sentenceName: "Use Cloudinary to store images of clouds in the cloud",
//     compatibleWith: {
//       TYPE: [CLOUD],
//       TECH: [0, 1, 2, 3, 4, 5],
//       TIME: cloudEasyTime,
//     },
//   },
//   corsControl: {
//     name: "CORS Control", // Cloud -> Easy
//     sentenceName: "Use serverless functions to query the Yelp API",
//     compatibleWith: {
//       TYPE: [CLOUD],
//       TECH: [0, 1, 2, 3, 4, 5],
//       TIME: cloudEasyTime,
//     },
//   },
//   firebaseOAuth: {
//     name: "Firebase OAuth", // Cloud -> Medium
//     sentenceName: "With Firebase Auth, allow users to login with Github",
//     compatibleWith: {
//       TYPE: [CLOUD],
//       TECH: [0, 1, 2, 3, 4, 5],
//       TIME: cloudMediumTime,
//     },
//   },
//   moodMatcher: {
//     name: "Mood Matcher", // Cloud -> Hard
//     sentenceName:
//       "Use AWS Comprehend to analyze the sentiment of text and change the background color accordingly",
//     compatibleWith: {
//       TYPE: [CLOUD],
//       TECH: [0, 1, 2, 3, 4, 5],
//       TIME: cloudHardTime,
//     },
//   },
// };

// export type TaskName = keyof typeof taskChoices;
