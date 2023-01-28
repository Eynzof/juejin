import * as React from "react";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";

import { Hydrate, QueryClientProvider } from "react-query";
import { queryClient } from "../src/api";

import createEmotionCache from "../utils/createEmotionCache";
import lightThemeOptions from "../styles/theme/lightThemeOptions";
import darkThemeOptions from "../styles/theme/darkThemeOptions";

import "../styles/globals.css";
import { useEffect, useState } from "react";
import { wrapper } from "../src/store/store";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

// Theme
const lightTheme = createTheme(lightThemeOptions);
const darkTheme = createTheme(darkThemeOptions);

function getActiveTheme(themeMode: "light" | "dark") {
  return themeMode === "light" ? lightTheme : darkTheme;
}

const MyApp: React.FunctionComponent<MyAppProps> = (props) => {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  const [activeTheme, setActiveTheme] = useState(lightTheme);
  const [selectedTheme, setSelectedTheme] = useState<"light" | "dark">("light");

  const toggleTheme: React.MouseEventHandler<HTMLAnchorElement> = () => {
    const desiredTheme = selectedTheme === "light" ? "dark" : "light";
    setSelectedTheme(desiredTheme);
  };

  useEffect(() => {
    setActiveTheme(getActiveTheme(selectedTheme));
    console.log("theme switched: ", selectedTheme);
  }, [selectedTheme]);

  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <CacheProvider value={emotionCache}>
          <ThemeProvider theme={activeTheme}>
            <CssBaseline />
            <Component
              {...pageProps}
              toggleTheme={toggleTheme}
              currentTheme={selectedTheme}
            />
          </ThemeProvider>
        </CacheProvider>
      </Hydrate>
    </QueryClientProvider>
  );
};

export default wrapper.withRedux(MyApp);
