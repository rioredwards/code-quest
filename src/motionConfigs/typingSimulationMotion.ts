import { SECOND } from "../constants";

export const MIN_TYPE_DELAY = SECOND / 16;
export const MAX_TYPE_DELAY = SECOND / 8;
export const EXTRA_DELAY_BETWEEN_WORDS = SECOND / 10;
export const CURSOR_BLINK_SPEED = SECOND / 2;
export const BLINK_DURATION_AFTER_TYPING = SECOND * 3;
// The text will wrap after this many characters this is important
// because if the final text is the exact length of the display,
// The cursor will blink on the next line, giving off a weird effect
export const TEXT_WRAP_LENGTH = 61;
