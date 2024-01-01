import { style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { typography } from "../Typography/styles.css";
import { theme } from "../../styles/theme.css";

const base = style({
  color: theme.text.primary,
});

const variants = {
  size: typography,
  accent: {
    true: { color: theme.text.accent },
  },
  underline: {
    none: {},
    hover: {
      selectors: {
        "&:hover": {
          textDecoration: "underline",
        },
      },
    },
    always: { textDecoration: "underline" },
  },
};

export const link = recipe({
  base,
  variants,
});

export type LinkVariants = NonNullable<RecipeVariants<typeof link>>;
