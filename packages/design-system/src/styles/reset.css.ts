import { globalStyle } from "@vanilla-extract/css";
import { reset } from "./layers.css.ts";

globalStyle(
  "html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed,  figure, figcaption, footer, header, hgroup,  menu, nav, output, ruby, section, summary, time, mark, audio, video",
  {
    "@layer": {
      [reset]: {
        margin: 0,
        padding: 0,
        border: 0,
        fontSize: "100%",
        font: "inherit",
        verticalAlign: "baseline",
      },
    },
  }
);

/* HTML5 display-role reset for older browsers */
globalStyle(
  "article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section",
  {
    "@layer": {
      [reset]: {
        display: "block",
      },
    },
  }
);

globalStyle("body", {
  "@layer": {
    [reset]: {
      lineHeight: 1,
    },
  },
});

globalStyle("ol, ul", {
  "@layer": {
    [reset]: {
      listStyle: "none",
    },
  },
});

globalStyle("blockquote, q", {
  "@layer": {
    [reset]: {
      quotes: "none",
    },
  },
});

globalStyle("blockquote:before, blockquote:after,q:before, q:after", {
  "@layer": {
    [reset]: {
      content: ["", "none"], /** fallback */
    },
  },
});

globalStyle("table", {
  "@layer": {
    [reset]: {
      borderSpacing: 0,
      borderCollapse: "collapse",
    },
  },
});

globalStyle("a", {
  "@layer": {
    [reset]: {
      textDecoration: "none",
      color: "inherit",
    },
  },
});
