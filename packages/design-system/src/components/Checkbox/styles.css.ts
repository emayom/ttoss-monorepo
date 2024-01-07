import { style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { theme } from "../../styles/theme.css";
import { sprinkles } from "../../styles/sprinkles.css";

const base = style({
  display: "flex",
  alignItems: "center",
  gap: theme.space[150],
  color: theme.text.secondary,
  userSelect: "none",
});

const variants = {
  size: {
    s: {},
    m: {},
    l: {},
  },
};

export const checkbox = recipe({
  base,
  variants,
});

/**
 * (hidden) Input & Icon Container
 */
export const inputContainer = style({
  position: "relative",
  selectors: {
    [`${checkbox.classNames.variants.size.s} &`]: {
      width: "15px",
      height: "15px",
    },
    [`${checkbox.classNames.variants.size.m} &`]: {
      width: "18px",
      height: "18px",
    },
    [`${checkbox.classNames.variants.size.l} &`]: {
      width: "24px",
      height: "24px",
    },
  },
});

export const input = style([
  sprinkles({
    width: 100,
    height: 100,
  }),
  {
    selectors: {
      [`${inputContainer} &`]: {
        appearance: "none",
        position: "absolute",
        zIndex: 1,
        margin: 0,
        opacity: 0,
      },
    },
  },
]);

export const iconWrap = style({
  selectors: {
    [`${inputContainer} &`]: {
      width: "24px",
      height: "24px",
      overflow: "hidden",
      aspectRatio: "1",
      borderRadius: theme.borderRadius.s,
    },
  },
});

export type CheckboxVariants = NonNullable<RecipeVariants<typeof checkbox>>;
