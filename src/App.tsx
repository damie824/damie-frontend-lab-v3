import { ScrollView, styleReset } from "react95";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import light from "react95/dist/themes/original";
import dark from "react95/dist/themes/vistaesqueMidnight";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GlobalHeader from "./components/global/header";

import galmuri from "./fonts/galmuri.woff2";

import NotFound from "./pages/not-found";
import MainPage from "./pages/main/main";
import NowPage from "./pages/now/now";
import Profile from "./pages/me/profile";
import { useEffect, useState } from "react";
import DarkmodeToggle from "./components/global/darkmode-toggle";
import Projects from "./pages/projects/projects";
import About from "./pages/about/about";
import WtfPage from "./pages/wtf/wtf";

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'galmuri';
    src: url('${galmuri}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  *::selection{
    background-color: blue;
    color: white;
  }
  body, input, select, textarea {
    font-family: 'galmuri';
  }
`;

const MainBackground = styled.div`
  background-color: ${({ theme }) => {
    console.log(theme);
    return theme.desktopBackground;
  }};
`;

function App() {
  // 다크 모드 구현
  const [theme, setTheme] = useState(
    window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
      ? dark
      : light
  );

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      setTheme(
        storedTheme === "dark"
          ? dark
          : storedTheme === "system"
            ? window.matchMedia("(prefers-color-scheme: dark)").matches
              ? dark
              : light
            : light
      );
    }

    const body = document.body;

    var observer = new MutationObserver(function (mutations) {
      mutations.forEach(function (mutation) {
        if (mutation.type === "attributes") {
          setTheme(body.getAttribute("data-theme") === "dark" ? dark : light);
        }
      });
    });

    observer.observe(body, {
      attributes: true,
    });
  }, []);

  return (
    <div className="App">
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <DarkmodeToggle />
        <MainBackground>
          <GlobalHeader />
          <ScrollView
            style={{
              width: "100%",
              height: "100vh",
            }}
          >
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/now" element={<NowPage />} />
                <Route path="/wtf" element={<WtfPage />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </BrowserRouter>
          </ScrollView>
        </MainBackground>
      </ThemeProvider>
    </div>
  );
}

export default App;
