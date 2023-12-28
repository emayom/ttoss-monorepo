import { style, styleVariants } from "@vanilla-extract/css";
import { sprinkles } from "../../styles/sprinkles.css";
import { theme } from "../../styles/theme.css";

export const base = style({
  display: "inline-block",
  width: "max-content",
  height: "max-content",
  lineHeight: "normal",
  fontWeight: theme.fontWeight.bold,
  borderRadius: theme.borderRadius.s,
  background: theme.background.white,
  boxShadow: theme.shadow.xs,
});

export const badge = styleVariants({
  medium: [
    sprinkles({
      px: "150" /** 1.5x (base: 8px) */,
      py: "050" /** .5x */,
      fontSize: "s",
    }),
  ],
  large: [
    sprinkles({
      px: "250" /** 2.5x */,
      py: "100" /** 1x */,
      fontSize: "m",
    }),
  ],
  accent: {
    color: theme.text.white,
    background: theme.background.accent,
  },
});
