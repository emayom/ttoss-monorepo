import { globalStyle } from "@vanilla-extract/css";
import { globalReset } from "./reset.css";

/** 브라우저가 @layer 지원하지 않는 경우 */
globalReset.forEach(({ selector, rule }) => globalStyle(selector, rule));
