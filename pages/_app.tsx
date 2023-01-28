import * as React from "react";
import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { Provider as ReduxProvider, useSelector } from "react-redux";
import { Hydrate, QueryClientProvider } from "react-query";
import { queryClient } from "../src/api";

import createEmotionCache from "../utils/createEmotionCache";
import lightThemeOptions from "../styles/theme/lightThemeOptions";
import darkThemeOptions from "../styles/theme/darkThemeOptions";

import "../styles/globals.css";
import { useEffect, useState } from "react";
import { wrapper } from "../src/store/store";
import { selectTheme } from "../src/store/themeSlice";

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const clientSideEmotionCache = createEmotionCache();

// Theme
const lightTheme = createTheme(lightThemeOptions);
const darkTheme = createTheme(darkThemeOptions);

const MyApp: React.FunctionComponent<MyAppProps> = ({ Component, ...rest }) => {
  const { store, props } = wrapper.useWrappedStore(rest);
  const { emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <ReduxProvider store={store}>
      <QueryClientProvider client={queryClient}>
        <Hydrate state={pageProps.dehydratedState}>
          <CacheProvider value={emotionCache}>
            <ThemeWrapper>
              <Component {...pageProps} />
            </ThemeWrapper>
          </CacheProvider>
        </Hydrate>
      </QueryClientProvider>
    </ReduxProvider>
  );
};

// 这里有一些注意事项:
// 我们将 theme 这个参数存储进了 redux, 然后在ThemeProvider中取出这个参数。
// 但是，如果Redux Provider和ThemeProvider在同一个元素中，那么ThemeProvider无法获取Redux Context中的数据。
// 这时候就需要一个中间组件，将Redux Provider和ThemeProvider分开。
const ThemeWrapper = (props) => {
  const themeState = useSelector(selectTheme);
  return (
    <ThemeProvider theme={themeState ? lightTheme : darkTheme}>
      <CssBaseline />
      {props.children}
    </ThemeProvider>
  );
};

export default MyApp;
