import { defineProperties, createSprinkles } from "@vanilla-extract/sprinkles";
import { theme } from "./theme.css";

const { space, text, background, fontSize, fontWeight } = theme;

const display = defineProperties({
  properties: {
    display: [
      "none",
      "inline",
      "inline-block",
      "block",
      "table",
      "table-cell",
      "table-row",
      "flex",
      "inline-flex",
      "grid",
    ],
    flexDirection: {
      row: "row",
      column: "column",
    },
    justifyContent: [
      "stretch",
      "flex-start",
      "center",
      "flex-end",
      "space-around",
      "space-between",
    ],
    alignItems: ["stretch", "flex-start", "center", "flex-end"],
    alignSelf: ["auto", "normal", "self-start", "self-end"],
    gap: space,
  },
  shorthands: {
    d: ["display"],
    flex: ["flexDirection"],
  },
});

const spacing = defineProperties({
  properties: {
    // Padding
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    // Margin
    marginTop: space,
    marginBottom: space,
    marginLeft: space,
    marginRight: space,
  },
  shorthands: {
    // Padding
    p: ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"],
    px: ["paddingLeft", "paddingRight"],
    py: ["paddingTop", "paddingBottom"],
    pl: ["paddingLeft"],
    pr: ["paddingRight"],
    pb: ["paddingBottom"],
    pt: ["paddingTop"],
    // Margin
    m: ["marginTop", "marginBottom", "marginLeft", "marginRight"],
    mx: ["marginLeft", "marginRight"],
    my: ["marginTop", "marginBottom"],
    ml: ["marginLeft"],
    mr: ["marginRight"],
    mb: ["marginBottom"],
    mt: ["marginTop"],
  },
});

const sizing = defineProperties({
  properties: {
    width: {
      25: "25%",
      50: "50%",
      75: "75%",
      100: "100%",
    },
    height: {
      25: "25%",
      50: "50%",
      75: "75%",
      100: "100%",
    },
  },
  shorthands: {
    w: ["width"],
    h: ["height"],
  },
});

const colors = defineProperties({
  properties: {
    color: text,
    background,
  },
  shorthands: {
    text: ["color"],
    bg: ["background"],
  },
});

const fonts = defineProperties({
  properties: {
    fontSize,
    fontWeight,
  },
});

export const sprinkles = createSprinkles(
  colors,
  display,
  sizing,
  spacing,
  fonts
);

export type Sprinkles = Parameters<typeof sprinkles>[0];
