import { createTheme } from "@vanilla-extract/css";
import { vars } from "./vars.css";

export const [baseTheme, themeVars] = createTheme({
  space: vars.space,
  borderWidth: vars.border.width,
  borderStyle: vars.border.style,
  borderRadius: vars.border.radius,
  font: {
    heading: "'Poppins', sans-serif",
    body: "'Inter', 'Noto Sans KR', sans-serif",
  },
  fontSize: vars.font.size,
  fontWeight: vars.font.weight,
  lineHeights: vars["line-height"],
  letterSpacing: vars["letter-spacing"],
});

export const [defaultTheme, colorThemeVars] = createTheme({
  background: {
    primary: vars.color.neutral[25],
    secondary: vars.color.neutral[50],
    accent: vars.color.secondary.green[300],
    success: vars.color.secondary.green[400],
    danger: vars.color.secondary.red[500],
    warning: vars.color.secondary.orange[500],
    info: vars.color.secondary.blue[400],
    light: vars.color.neutral[25],
    dark: vars.color.neutral[800],
    white: "#fff",
  },
  text: {
    primary: vars.color.primary[900],
    secondary: vars.color.neutral[600],
    accent: vars.color.secondary.green[300],
    success: vars.color.secondary.green[400],
    danger: vars.color.secondary.red[500],
    warning: vars.color.secondary.orange[500],
    info: vars.color.secondary.blue[400],
    light: vars.color.neutral[25],
    dark: vars.color.neutral[800],
    white: "#fff",
  },
  button: {
    primary: vars.color.primary[900],
    onPrimary: vars.color.neutral[25],
  },
  icon: {
    primary: vars.color.neutral[900],
    secondary: vars.color.neutral[600],
  },
  border: {
    subtle: vars.color.neutral[200],
    strong: vars.color.neutral[900],
  },
  skeleton: {
    element: vars.color.neutral[50],
    background: vars.color.neutral[50],
  },
  shadow: vars.shadow,
});

export const theme = { ...themeVars, ...colorThemeVars };
