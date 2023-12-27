import { styleVariants } from "@vanilla-extract/css";
import { theme } from "../../../styles/theme.css";

type FontSizeType = keyof typeof theme.fontSizes;
type LineHeightType = keyof typeof theme.lineHeights;
type LetterSpacingType = keyof typeof theme.letterSpacing;

function fontMappingFn(
  keys: Record<
    string,
    | [FontSizeType, LineHeightType]
    | [FontSizeType, LineHeightType, LetterSpacingType]
  >
) {
  return Object.fromEntries(
    Object.entries(keys).map(([name, [k1, k2, k3]]) => [
      name,
      {
        fontSize: theme.fontSizes[k1],
        lineHeight: theme.lineHeights[k2],
        ...(k3 && { letterSpacing: theme.letterSpacing[k3] }),
      },
    ])
  );
}

const base = styleVariants({
  heading: {
    color: theme.text.primary,
    fontFamily: theme.font.heading,
    fontWeight: theme.fontWeight.medium,
  },
  body: {
    color: theme.text.secondary,
    fontWeight: theme.fontWeight.normal,
    fontFamily: theme.font.body,
  },
});

const headings = fontMappingFn({
  h1: ["h1", "h1", "tighter"],
  h2: ["h2", "h2", "tight"],
  h3: ["h3", "h3", "normal"],
  h4: ["h4", "h4", "wider"],
  h5: ["h5", "h5", "wide"],
  h6: ["h6", "h6", "wide"],
  h7: ["h7", "h7"],
});

const bodies = fontMappingFn({
  caption1: ["xs", "xs"],
  caption2: ["xxs", "xxs"],
  body1: ["l", "l"],
  body2: ["s", "s"],
});

const texts = fontMappingFn({
  xxl: ["xxl", "xxl"] /** 26px */,
  xl: ["xl", "xl"] /** 22px */,
  l: ["l", "l"] /** 20px */,
  m: ["m", "m"] /** 18px */,
  s: ["s", "s"] /** 16px */,
  xs: ["xs", "xs"] /** 14px */,
  xxs: ["xxs", "xxs"] /** 12px */,
});

export const typography = {
  ...styleVariants(headings, (props) => [base.heading, props]),
  ...styleVariants(bodies, (props) => [base.body, props]),
  ...styleVariants(texts, (props) => [base.body, props]),
};
