import { ValuesOf } from "../../utils/utilityTypes";
import { TaskChoiceIdx } from "../choiceEnums/taskEnum";
import { TypeChoiceIdx } from "../choiceEnums/typeEnum";

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

const { LEETCODE, CLI, FRONTEND, FULLSTACK, BACKEND, CLOUD } = TypeChoiceIdx;

type TypeToTask = {
  [key in ValuesOf<typeof TypeChoiceIdx>]: TaskChoiceIdx[];
};

export const typeToTask: TypeToTask = {
  [LEETCODE]: [
    TWO_SUM,
    VALID_PALINDROME,
    REVERSE_LINKED_LIST,
    FREQUENT_ELEMENTS,
    MOST_WATER,
  ],
  [CLI]: [
    QUICK_NOTE,
    WORD_COUNT,
    FILE_FINDER,
    TEMPERATURE_CHECK,
    DO_NOT_DISTURB,
  ],
  [FRONTEND]: [
    LANDING_PAGE,
    CHARACTER_CREATOR,
    PHOTO_CAROUSEL,
    CALCULATOR,
    GIPHY_TV,
  ],
  [FULLSTACK]: [SITE_VISITS, NOTES_APP, COLOR_COLLAGE, SOCIAL_MEDIA, CHATROOM],
  [BACKEND]: [BLOG_POSTS, MOVIE_LIST, CHATGPT_ME, E_COMMERCE, GRAPHQL_SPACE],
  [CLOUD]: [
    S3_SURVEY,
    CLOUDCEPTION,
    CORS_CONTROL,
    FIREBASE_OAUTH,
    MOOD_MATCHER,
  ],
};

type TaskToType = {
  [key in ValuesOf<typeof TaskChoiceIdx>]: TypeChoiceIdx[];
};

export const taskToType: TaskToType = {} as TaskToType;

for (const [type, tasks] of Object.entries(typeToTask)) {
  if (!tasks) throw new Error("Tasks not found in typeToTask");

  tasks.forEach((task) => {
    if (taskToType[task] === undefined) {
      taskToType[task] = [];
    }
    taskToType[task]!.push(Number(type));
  });
}
