import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { setElementVars } from "@vanilla-extract/dynamic";

import { useThemeContext } from "./context/ThemeContext";

import { SignIn } from "./pages/SignIn";
import { SignUp } from "./pages/SignUp";
import { Home } from "./pages/Home";

import { darkTheme, lightTheme } from "./themes";
import { baseTheme, colorThemeVars } from "./styles/theme.css";
import "./index.css";

/** @layer 지원하지 않을 경우 */
typeof CSSLayerBlockRule !== "function" &&
  import("./styles/reset.fallback.css");

function App() {
  const { theme } = useThemeContext();

  useEffect(() => {
    setElementVars(
      document.body,
      colorThemeVars,
      theme === "dark" ? darkTheme : lightTheme
    );
  }, [theme]);

  return (
    <div id="app" className={baseTheme}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/changepassword" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
