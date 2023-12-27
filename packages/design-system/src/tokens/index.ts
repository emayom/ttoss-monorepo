import { border } from "./border";
import { global as color } from "./colors";
import { opacity } from "./opacity";
import { space } from "./space";
import { font, lineHeight, letterSpacing } from "./typography";

/**
 * Global Tokens
 */
export const tokens = {
  border,
  color,
  opacity,
  space,
  font,
  "line-height": lineHeight,
  "letter-spacing": letterSpacing,
} as const;

export type Tokens = typeof tokens;
