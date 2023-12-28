import { globalStyle } from "@vanilla-extract/css";
import { theme } from "./theme.css";

globalStyle("#app", {
  background: theme.background.primary,
});
