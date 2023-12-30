import { Routes, Route } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";

import * as themes from "./styles/theme.css";
import clsx from "clsx";
import "./index.css";

/** @layer 지원하지 않을 경우 */
typeof CSSLayerBlockRule !== "function" &&
  import("./styles/reset.fallback.css");

function App() {
  const className = clsx(themes.baseTheme, themes.defaultTheme);

  return (
    <div id="app" className={className}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;
