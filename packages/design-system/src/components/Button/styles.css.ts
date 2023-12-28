import { style } from "@vanilla-extract/css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { typography } from "../Typography/styles.css";
import { theme } from "../../styles/theme.css";

const base = style({
  cursor: "pointer",
  fontStyle: "normal",
  textAlign: "center",
  outline: "unset",
  borderRadius: theme.borderRadius.m,
  borderWidth: theme.borderWidth.thin,
  borderStyle: theme.borderStyle.solid,
  padding: `${theme.space[100]} ${theme.space[300]}`,
  transition: "color, background 0.3s ease",
});

const variants = {
  variant: {
    contained: {
      color: theme.button.onPrimary,
      background: theme.button.primary,
      borderColor: theme.button.primary,
      boxShadow: theme.shadow.s,
      ":hover": {
        borderColor: theme.background.accent,
        backgroundColor: theme.background.accent,
      },
    },
    outlined: {
      color: theme.button.primary,
      background: "none",
      borderColor: theme.button.primary,
    },
    text: {
      color: theme.button.primary,
      border: "none",
      background: "none",
      padding: `${theme.space[100]} ${theme.space[0]}`,

      ":hover": {
        borderColor: theme.button.primary,
        borderBottom: theme.borderStyle.solid,
        borderRadius: theme.borderRadius.none,
      },
    },
  },
  size: {
    xs: typography.xs,
    s: typography.s,
    m: typography.m,
    l: typography.l,
  },
};

export const button = recipe({
  base,
  variants,
});

export type ButtonVariants = NonNullable<RecipeVariants<typeof button>>;
